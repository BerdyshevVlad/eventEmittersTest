import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagManagerComponent } from './tag-manager/tag-manager.component';
import { ForthComponent } from './forth/forth.component';
import { FifthComponent } from './fifth/fifth.component';


const routes: Routes =[
  { path: 'forth', component: ForthComponent},
  { path: '', component: TagManagerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
