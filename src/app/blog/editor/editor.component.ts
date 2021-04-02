import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from 'src/app/common/modal.service';
import { Blog } from '../class/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  id = 0;
  detail: Blog = {} as Blog;
  isLoading = false;

  constructor(private service: BlogService,
              private actRoute: ActivatedRoute,
              private router: Router,
              private modal: ModalService,
              private toastr: ToastrService) {
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.id){
      this.isLoading = true;
      this.service.detail(this.id).subscribe((resp) => {
        this.detail = resp;
        if (!this.detail.id) { this.router.navigateByUrl('/blog/grid'); }
        this.isLoading = false;
      });
    }
  }

  onSave(): void{
    this.isLoading = true;
    if (this.id){
      this.service.update(this.detail).subscribe(() => {
        this.toastr.success('Record updated');
        this.router.navigateByUrl('/blog/grid');
        this.isLoading = false;
      }, () => {
        this.toastr.warning('Oops something went wrong');
      });
    } else {
      this.service.add(this.detail).subscribe(() => {
        this.isLoading = false;
        this.toastr.success('Record Added');
        this.router.navigateByUrl('/blog/grid');
      }, () => {
        this.toastr.warning('Oops something went wrong');
      });
    }
  }

  onDelete(): void{
    this.isLoading = true;
    this.modal.confirm('Are you sure, this cant be reverted').then((resp) => {
      if (resp){
        this.service.delete(this.detail.id).subscribe(() => {
          this.toastr.success('Record Deleted');
          this.isLoading = false;
          this.router.navigateByUrl('/blog/grid');
        }, () => {
          this.toastr.warning('Oops something went wrong');
        });
      }else {
        this.isLoading = false;
      }
    });
  }

}
