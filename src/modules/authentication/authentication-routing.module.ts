import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionInfoComponent } from "./components/session-info/session-info.component";

const routes: Routes = [{
  path: '',
  component: SessionInfoComponent,
  data: {
    'breadcrumbLabel': 'Session'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
