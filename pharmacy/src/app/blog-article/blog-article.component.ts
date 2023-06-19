import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent implements OnInit {

  fullData:any="";
  searchData:any="";
  matchedData:any="";

  constructor(private data:ProductdataService, private route:ActivatedRoute){
    this.data.blogData().subscribe(data=>{this.fullData=data

   this.route.params.subscribe(paramdata=>
   {
     this.searchData=paramdata['article'];
     for(let pro of this.fullData)
     {
      if(pro.title==this.searchData){
       this.matchedData=pro;
       break;
      }
     }
   })
  });
}

   ngOnInit() {

   }

  }

