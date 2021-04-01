import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceInterceptor } from './service/ServiceInterceptor';
import { EditorComponent } from './editor/editor.component';
import { BlogRoutingModule } from './blog-routing.modules';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [GridComponent, EditorComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BlogRoutingModule
  ],
  providers : [
    { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true },
  ],
  exports : [
    GridComponent,
    EditorComponent
  ]
})
export class BlogModule {

 }
