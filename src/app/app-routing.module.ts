import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { TestPageComponent } from './test-page/test-page.component';
import { FinishTestComponent } from './finish-test/finish-test.component';
import { ValidationComponent } from './validation/validation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { PipExampleComponent } from './pip-example/pip-example.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"contactus", component:ContactUsComponent},
  {path:"aboutus", component:AboutUsComponent},
  {path:"pipe", component:PipExampleComponent},
  {path:"start", component:StartComponent},
  {path:"test/:questionNumber", component:TestPageComponent},
  {path:"validation", component:ValidationComponent},
  {path:"finish/:score/:maxScore/:correctAnswers", component:FinishTestComponent},
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"**", redirectTo:"/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
