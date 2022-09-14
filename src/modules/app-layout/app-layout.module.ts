import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayoutComponent } from './components/master-layout/master-layout.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { UiStateService } from "./services/ui-state.service";
import {RouterModule} from "@angular/router";
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import {MatButtonModule} from "@angular/material/button";
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';


@NgModule({
  declarations: [
    MasterLayoutComponent,
    BreadcrumbsComponent,
    SideNavigationComponent,
    TopNavigationComponent
  ],
  providers: [
    UiStateService,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    MasterLayoutComponent,
  ]
})
export class AppLayoutModule { }
