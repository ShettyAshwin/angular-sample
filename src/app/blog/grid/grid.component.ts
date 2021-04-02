import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from 'src/app/common/modal.service';
import { blog } from '../class/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  blogs : Array<blog> = <blog[]>[]
  constructor(private service: BlogService, private modal : ModalService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.list().subscribe((resp)=>{
      this.blogs = resp
    })
  }

  onDelete(id: Number){
    this.modal.confirm("Are you sure, this cant be reverted").then((resp)=>{
      if(resp){
        this.service.delete(id).subscribe((resp)=>{
          this.toastr.success("Record Deleted")
          this.ngOnInit()
        }, (e)=>{
          console.log(e)
          this.toastr.warning("Oops something went wrong")
        })
      }
    })    
  }

}
