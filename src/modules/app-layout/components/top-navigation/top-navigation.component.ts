import { Component, Input, OnInit } from '@angular/core';
import { NavigationBreadcrumb } from "../../services/navigation-state.service";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.sass']
})
export class TopNavigationComponent implements OnInit {

  @Input() breadcrumbs: NavigationBreadcrumb[] = [];


  get lastBreadcrumb(): NavigationBreadcrumb | undefined {
    if (this.breadcrumbs?.length) {
      return this.breadcrumbs[this.breadcrumbs.length - 1];
    }
    return undefined;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
