import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
    { path: 'grid', component: GridComponent },
    { path: 'editor/:id', component: EditorComponent },
    { path: 'editor', component: EditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
