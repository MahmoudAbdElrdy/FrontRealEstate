import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraContrcatComponent } from './extra-contrcat/extra-contrcat.component';


const routes: Routes = [,
  {
    path: 'ExtraContrcat',
    component: ExtraContrcatComponent,
    data: {
        title: ' الملحقات',
        urls: [
            { title: 'الملحقات', url: '/Report' },
            { title: ' الملحقات', }
        ]
    }
  } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
