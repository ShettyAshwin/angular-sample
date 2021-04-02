import { TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';

describe('ModalService', () => {
  let service: ModalService;
  let modal : NgbModal;
  let modalCom:ModalComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports : [NgbModule], providers : [ ModalComponent, NgbActiveModal]});
    service = TestBed.inject(ModalService);
    modal = TestBed.get(NgbModal)
    modalCom = TestBed.get(ModalComponent)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(modal).toBeDefined()
    expect(modalCom).toBeDefined()
  });

  it('should open confirmation modal', ()=>{
    service.confirm("")
    expect(modalCom.msglabel).toBe("Are you sure")
  })
});
