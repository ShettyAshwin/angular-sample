import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './blog/editor/editor.component';
import { GridComponent } from './blog/grid/grid.component';

const routes: Routes = [
  { path: 'blog/grid', component: GridComponent },
  { path: 'blog/editor/:id', component: EditorComponent },
  { path: 'blog/editor', component: EditorComponent },
  { path: '/', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
