import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ManageQuestionService } from './manage-question.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ValidationComponent } from './validation/validation.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { FinishTestComponent } from './finish-test/finish-test.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { TemplateFormValidationComponent } from './template-form-validation/template-form-validation.component';
import { PipExampleComponent } from './pip-example/pip-example.component';
import { CustomvalidationService } from './services/customvalidation.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    TestPageComponent,
    ValidationComponent,
    DirectiveExampleComponent,
    FinishTestComponent,
    ContactUsComponent,
    AboutUsComponent,
    RegisterComponent,
    TemplateFormValidationComponent,
    PipExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ManageQuestionService,
  CustomvalidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
