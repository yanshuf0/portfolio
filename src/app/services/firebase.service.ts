import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Blog } from '../models/blog.model';

@Injectable()
export class FirebaseService {
  blogs: Observable<any[]>;

  constructor(private db: AngularFirestore) {}

  getBlogs(): Observable<Blog[]> {
    this.blogs = this.db.collection('blogs').valueChanges();
    return this.blogs;
  }
}
