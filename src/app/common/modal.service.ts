import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  confirm(label: string): Promise<boolean>{
    const modalRef = this.modalService.open(ModalComponent, {size: 'sm', centered: true});
    return new Promise((resolve, reject) => {
      modalRef.componentInstance.msglabel = label;
      modalRef.result.then((resp) => {
        resolve(resp);
      });
    });

  }
}
