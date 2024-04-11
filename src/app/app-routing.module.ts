import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinancialComponent, } from './financial/financial.component';
import { ToolsComponent, } from './tools/tools.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
    { path: '', component: LoginComponentComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'financial', component: FinancialComponent },
	{ path: 'tools', component: ToolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
