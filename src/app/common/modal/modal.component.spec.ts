import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let modal: NgbActiveModal

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [NgbModule],
      declarations: [ ModalComponent ],
      providers : [NgbActiveModal]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    modal = TestBed.get(NgbActiveModal)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(modal).toBeDefined()
  });

  it('should return false on cancel', ()=>{
    let resp
    spyOn(modal,'close').and.callFake((p)=> { resp = p})
    component.onCancel()
    expect(resp).toBeFalse()
  })

  it('should return true on OK', ()=>{
    let resp
    spyOn(modal,'close').and.callFake((p)=> { resp = p})
    component.onConfirm()
    expect(resp).toBeTrue()
  })
});
