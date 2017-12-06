import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {ToastOptions} from 'ng2-toastr';
import { CustomOption } from './ng2-toastr-custom-option';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AuthGuard } from './service/ZauthGuard';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TheTableComponent } from './home/the-table/the-table.component';
import { APIService } from './service/APIService';
import { ProjectService } from './service/ProjectService';
import { NgPipesModule } from 'ngx-pipes';
import { TheContractComponent } from './home/the-contract/the-contract.component';
import { InfoPageComponent } from './home/info-page/info-page.component';
import { TheUploadComponent } from './home/the-upload/the-upload.component';
import { TheSummaryComponent } from './home/the-summary/the-summary.component';
import { SummaryContentComponent } from './home/the-summary/summary-content/summary-content.component';
import { Sm1Component } from './home/the-summary/summary-content/sm1/sm1.component';
import { Sm2Component } from './home/the-summary/summary-content/sm2/sm2.component';
import { Sm3Component } from './home/the-summary/summary-content/sm3/sm3.component';
import { Sm4Component } from './home/the-summary/summary-content/sm4/sm4.component';
import { Sm5Component } from './home/the-summary/summary-content/sm5/sm5.component';
import { LoginComponent } from './login/login.component';
import { D3SunBrustComponent } from './home/the-summary/summary-content/d3-sun-brust/d3-sun-brust.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TheTableComponent,
    TheContractComponent,
    InfoPageComponent,
    TheUploadComponent,
    TheSummaryComponent,
    SummaryContentComponent,
    Sm1Component,
    Sm2Component,
    Sm3Component,
    Sm4Component,
    Sm5Component,
    LoginComponent,
    D3SunBrustComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpModule,
    NgPipesModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    AuthGuard,
    APIService,
    ProjectService,
    {provide: ToastOptions, useClass: CustomOption},
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
