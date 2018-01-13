import { Router } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [FirebaseService]
})
export class BlogComponent implements OnInit {
  blogPosts: Blog[];

  constructor(private fireBaseService: FirebaseService, private router: Router) {}

  ngOnInit() {
    this.fireBaseService.getBlogs().subscribe(blogPosts => {
      this.blogPosts = blogPosts;
    });
  }

  openFullBlog (blogPost: Blog) {
    this.router.navigate(['/blog-post', blogPost.title.replace(/-+/g, '`').replace(/\s+/g, '-')]);
  }

}
