import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  article:any="";
  constructor(private data:ProductdataService) {
    this.data.blogData().subscribe((data)=> (this.article=data));
  }

  fullArticle:any="";
  read(read:any){
   this.fullArticle=read;
   this.data.fullStory=this.fullArticle;
  }
  ngOnInit() {
  }

}
