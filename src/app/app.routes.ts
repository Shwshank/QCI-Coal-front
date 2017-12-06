import { Routes } from '@angular/router';

import { AuthGuard } from './service/ZauthGuard';
import { HomeComponent } from './home/home.component';
import { TheTableComponent } from './home/the-table/the-table.component';
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

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'/login' },
  { path: 'login', component: LoginComponent },
  { path: 'd3-sun-brust', component: D3SunBrustComponent },
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', pathMatch: 'full', component: InfoPageComponent, canActivate: [AuthGuard]},
      { path: 'tracker', component: TheTableComponent, canActivate: [AuthGuard]},
      { path: 'contract', component: TheContractComponent, canActivate: [AuthGuard]},
      { path: 'upload', component: TheUploadComponent, canActivate: [AuthGuard]},
      { path: 'summary', component: TheSummaryComponent, canActivate: [AuthGuard],
        children: [
          { path: 'psusummary', component: SummaryContentComponent, children: [
            { path: 'sm1', component: Sm1Component, canActivate: [AuthGuard] },
            { path: 'sm2', component: Sm2Component, canActivate: [AuthGuard] },
            { path: 'sm3', component: Sm3Component, canActivate: [AuthGuard] },
            { path: 'sm4', component: Sm4Component, canActivate: [AuthGuard] },
            { path: 'sm5', component: Sm5Component, canActivate: [AuthGuard] },
          ]
          }
        ]
      },
      { path: '**', component: InfoPageComponent , canActivate: [AuthGuard]}
    ]
  },
  { path: '**', redirectTo:'/login' }
];
