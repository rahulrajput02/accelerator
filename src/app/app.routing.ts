import { RouterModule, Routes } from '@angular/router';
import { needBlockchainComponent } from './needBlockchain/needBlockchain.component';
import { HomeComponent } from './home/home.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { blockchainPlatformComponent } from './blockchainPlatform/blockchainPlatform.component';


export const appRoutes: Routes = [

  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'needblockchain', component: needBlockchainComponent, pathMatch: "full" },
  { path: 'blockchainplatform', component: blockchainPlatformComponent, pathMatch: "full" }
];

export const routing = RouterModule.forRoot(appRoutes);
