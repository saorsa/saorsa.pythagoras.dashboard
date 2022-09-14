import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from "rxjs";
import { ScreenSize, UiStateService } from "../../services/ui-state.service";
import {NavigationBreadcrumb, NavigationStateService} from "../../services/navigation-state.service";


@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.sass']
})
export class MasterLayoutComponent implements OnInit {
  destroyed = new Subject<void>();
  currentScreenSize: ScreenSize = 'unknown';
  breadcrumbs: NavigationBreadcrumb[] = [];
  lastBreadcrumb?: NavigationBreadcrumb;

  readonly screenBreakpointsMap = new Map<string, ScreenSize>([
    [Breakpoints.XSmall, 'xs'],
    [Breakpoints.Small, 'sm'],
    [Breakpoints.Medium, 'md'],
    [Breakpoints.Large, 'lg'],
    [Breakpoints.XLarge, 'xl'],
  ]);

  constructor(
    private readonly screenSizeDetector: BreakpointObserver,
    private readonly uiState: UiStateService,
    private readonly navState: NavigationStateService,
  ) { }

  ngOnInit(): void {
    this.detectScreenSize();
    this.detectRouteChanges();
  }

  detectScreenSize(): void {
    this.screenSizeDetector
      .observe(Array.from(this.screenBreakpointsMap.keys()))
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.screenBreakpointsMap.get(query) ?? 'unknown';
            this.uiState.updateScreenSize(this.currentScreenSize);
          }
        }
      });
  }

  detectRouteChanges(): void {
    this.navState.breadcrumbsChange.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs || [];
      this.lastBreadcrumb = breadcrumbs.length ? breadcrumbs[breadcrumbs.length - 1] : undefined;
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
