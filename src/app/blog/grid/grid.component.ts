import { Component, OnInit } from '@angular/core';
import { blog } from '../class/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  blogs : Array<blog> = <blog[]>[]
  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.service.list().subscribe((resp)=>{
      this.blogs = resp
    })
  }

}
