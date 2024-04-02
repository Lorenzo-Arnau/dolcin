import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { FinancialComponent } from './financial/financial.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfigExport } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsComponent,
    FinancialComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfigExport.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    provideClientHydration(),
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
