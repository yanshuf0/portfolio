import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from './../models/blog.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
