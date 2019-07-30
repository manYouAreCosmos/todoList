import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from './post-model';
import {Subject} from 'rxjs';
import { post } from 'selenium-webdriver/http';

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post [] = [];
    private postUpdated = new Subject<Post []>();

    constructor(
        private http: HttpClient) { }

    getPosts() {

        this.http.get<{message: string, post: Post[]}>('http://localhost:3000/data')
        .subscribe(
            res => {
                this.posts = res.post;
                this.postUpdated.next([...this.posts]);
            }
        );
 
    }
    deletePost(id: string){
        const post = {id};
        this.http.post('http://localhost:3000/delete', post).subscribe();

    }
    getPostUpdateListener(){
        return this.postUpdated.asObservable();
    }
    addPosts( title: string , content: string) {
        const post: Post = { id: null, title, content };
        this.http.post('http://localhost:3000/data', post).subscribe();
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
    }


}
