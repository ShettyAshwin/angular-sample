import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { blog } from '../class/blog';
import { BlogService } from '../service/blog.service';
import {  of } from 'rxjs';

import { GridComponent } from './grid.component';
import { ModalService } from 'src/app/common/modal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let service : BlogService
  let modal : ModalService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule, NgbModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ToastrModule.forRoot()],
      declarations: [ GridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BlogService)
    modal = TestBed.get(ModalService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data on page load', ()=>{
    spyOn(service,'list').and.returnValue(of([<blog>{}, <blog>{}]))
    component.ngOnInit()
    expect(service.list).toHaveBeenCalled()
    expect(component.blogs.length).toBe(2)
  })

  it('should delete record after confirmation (false)', ()=>{
    const detail = <blog>{}
    detail.id = 100
    detail.title = "Hello"
    spyOn(modal, 'confirm').and.returnValue(Promise.resolve(false))
    component.ngOnInit()
    component.onDelete(100)
    expect(modal.confirm).toHaveBeenCalled()
  })

    it('should delete record after confirmation (true)', ()=>{
    const detail = <blog>{}
    detail.id = 100
    detail.title = "Hello"
    spyOn(service, 'delete').and.returnValue(of(detail))
    spyOn(modal, 'confirm').and.returnValue(Promise.resolve(true))
    component.ngOnInit()
    
    component.onDelete(100)
    expect(modal.confirm).toHaveBeenCalled() 
  })
});
