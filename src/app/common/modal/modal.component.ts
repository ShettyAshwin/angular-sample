import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() msglabel: string = 'Are you sure';

  constructor(private modal: NgbActiveModal) { }

  ngOnInit(): void {

  }

  onCancel(){
    this.modal.close(false);
  }

  onConfirm(){
    this.modal.close(true);
  }

}
