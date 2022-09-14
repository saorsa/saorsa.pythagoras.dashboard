import { Component, Input, OnInit } from '@angular/core';
import { NavigationBreadcrumb } from "../../services/navigation-state.service";

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.sass']
})
export class SideNavigationComponent implements OnInit {

  @Input() breadcrumbs: NavigationBreadcrumb[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
