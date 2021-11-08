import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractComponent } from './contract/contract.component';



const routes: Routes = [ {
  path: '',
  children: [
      {
          path: 'Contract',
          component: ContractListComponent,
          data: {
              title: ' التعاقدات',
              urls: [
                  { title: 'التعاقدات', url: '/Contracts' },
                  { title: ' التعاقدات', }
              ]
          }
      }
  ]
}];

///Contracts/contract
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
