import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogPosts: any;

    constructor(private fireBaseService: FirebaseService, private router: Router) {}

    ngOnInit() {
      this.fireBaseService.getBlogs().subscribe(blogPosts => {
        this.blogPosts = blogPosts;
      });
    }

  openFullBlog (blogPost) {
    localStorage.setItem('blog', JSON.stringify(blogPost));
    this.router.navigate(['/blog-post']);
  }
}
