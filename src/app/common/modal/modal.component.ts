import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() msglabel = 'Are you sure';

  constructor(private modal: NgbActiveModal) { }

  ngOnInit(): void {

  }

  onCancel(): void{
    this.modal.close(false);
  }

  onConfirm(): void{
    this.modal.close(true);
  }

}
