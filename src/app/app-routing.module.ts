import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DownloadComponent } from './download/download.component';

const appRoutes: Routes = [
  { path: '', component: DownloadComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
