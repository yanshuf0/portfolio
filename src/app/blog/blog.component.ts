import { Router } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [FirebaseService]
})
export class BlogComponent implements OnInit {
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
