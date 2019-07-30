import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import {Post} from '../post-model';
import {Subscription} from 'rxjs';
@Component({
    selector:'app-post-list',
    templateUrl:'post-list.component.html',
    styleUrls:['post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{

    posts: Post [] = [];
    private postSub: Subscription;

    constructor(public postService: PostService) {}

    ngOnInit() {
        this.postService.getPosts();
        this.postSub = this.postService.getPostUpdateListener()
        .subscribe((posts: Post[] ) => {
            this.posts = posts;
        });
    }
    ngOnDestroy() {
        this.postSub.unsubscribe();
    }
    onDelete(id){
        this.postService.deletePost(id);
    }
}