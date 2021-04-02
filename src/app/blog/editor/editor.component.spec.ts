import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import {  of } from 'rxjs';
import { ModalService } from 'src/app/common/modal.service';
import { Blog } from '../class/blog';
import { BlogService } from '../service/blog.service';

import { EditorComponent } from './editor.component';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;
  let service: BlogService;
  let router: Router;
  let modal: ModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule, NgbModule, HttpClientModule, BrowserAnimationsModule, FormsModule, ToastrModule.forRoot()],
      declarations: [ EditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    service = TestBed.get(BlogService);
    router = TestBed.get(Router);
    modal = TestBed.get(ModalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeDefined();
  });

  it('should load blog data when Id is passed', () => {
    const detail = {} as Blog;
    detail.id = 100;
    detail.title = 'Hello';
    component.id = detail.id;
    spyOn(service, 'detail').and.returnValue(of(detail));
    component.ngOnInit();
    expect(service.detail).toHaveBeenCalled();
    expect(component.detail.title).toBe(detail.title);
  });

  it('should redirct if no details are found', () => {
    const detail = {} as Blog;
    detail.id = 100;
    detail.title = 'Hello';
    component.id = detail.id;
    spyOn(service, 'detail').and.returnValue(of({} as Blog));
    spyOn(router, 'navigateByUrl').and.callThrough();
    component.ngOnInit();
    expect(service.detail).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalled();
    expect(component.detail.title).not.toBe(detail.title);
  });

  it('should delete record after confirmation (false)', () => {
    const detail = {} as Blog;
    detail.id = 100;
    detail.title = 'Hello';
    component.id = detail.id;
    spyOn(service, 'detail').and.returnValue(of(detail));
    spyOn(modal, 'confirm').and.returnValue(Promise.resolve(false));
    component.ngOnInit();
    component.onDelete();
    expect(modal.confirm).toHaveBeenCalled();
  });

  it('should delete record after confirmation (true)', () => {
    const detail = {} as Blog;
    detail.id = 100;
    detail.title = 'Hello';
    component.id = detail.id;
    spyOn(service, 'detail').and.returnValue(of(detail));
    spyOn(modal, 'confirm').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    spyOn(service, 'delete').and.returnValue(of(detail));
    spyOn(router, 'navigateByUrl').and.callThrough();
    component.onDelete();
    expect(modal.confirm).toHaveBeenCalled();
  });

  it('Should call add when Id is not avilable', () => {
    const detail = {} as Blog;
    spyOn(service, 'add').and.returnValue(of(detail));
    spyOn(service, 'update').and.returnValue(of(detail));
    spyOn(router, 'navigateByUrl').and.callThrough();
    component.onSave();
    expect(service.add).toHaveBeenCalled();
    expect(service.update).not.toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalled();
  });

  it('Should call update when Id is avilable', () => {
    const detail = {} as Blog;
    component.id = 100;
    spyOn(service, 'add').and.returnValue(of(detail));
    spyOn(service, 'update').and.returnValue(of(detail));
    spyOn(router, 'navigateByUrl').and.callThrough();
    component.onSave();
    expect(service.add).not.toHaveBeenCalled();
    expect(service.update).toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalled();
  });
});
