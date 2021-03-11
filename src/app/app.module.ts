import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsideListModule } from './Components/aside-list/aside-list.module';
import { BodyListModule } from './Components/body-list/body-list.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterListModule } from './Components/footer-list/footer-list.module';
import { BlockUIModule } from 'ng-block-ui';
import { HeaderListComponent } from './Components/header-list/header-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AsideListModule,
    BodyListModule,
    BodyListModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BlockUIModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
