import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  blog: any;

  constructor() { }

  ngOnInit() {
    this.blog = JSON.parse(localStorage.getItem('blog'));
  }

}
