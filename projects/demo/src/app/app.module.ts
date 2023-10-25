import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { CommonService } from 'src/app/core/common.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class DemoAppModule {
  static forRoot(): ModuleWithProviders<NgModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}

