import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from 'src/app/core/common.service';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


@NgModule({})
export class ClassicAppModule{
  static forRoot(): ModuleWithProviders<NgModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}