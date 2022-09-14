import { Component, Input, OnInit } from '@angular/core';
import { NavigationBreadcrumb } from "../../services/navigation-state.service";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() breadcrumbs: NavigationBreadcrumb[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
