import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicorneditorComponent } from './unicorneditor/unicorneditor.component';
import { UnicornlistComponent } from './unicornlist/unicornlist.component';
import { BabyfactoryComponent } from './babyfactory/babyfactory.component';

const routes: Routes = [
  {
    path: '',
    component: UnicornlistComponent,
  },
  {
    path: 'edit',
    component: UnicorneditorComponent,
  },
  {
    path: 'edit/:id',
    component: UnicorneditorComponent,
  },
  {
    path: 'babyfactory',
    component: BabyfactoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
