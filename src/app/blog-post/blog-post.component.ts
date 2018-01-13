import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Blog } from './../models/blog.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  blog: Blog = {title: '', body: '', date: ''};
  title: string;

  constructor(private route: ActivatedRoute, private fireBaseService: FirebaseService) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this.fireBaseService.getBlogs().subscribe(blogs => {
      this.blog = blogs.filter(blog => blog.title.toLowerCase() === this.title.replace(/-+/g, ' ').replace(/`+/g, '-'))[0];
    });
  }
}
