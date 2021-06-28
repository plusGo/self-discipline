import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../core/service/biz/article.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pageIndex = 0;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(index = 0): void {
    this.articleService.findPage().subscribe(res => {
      debugger;
    })
  }

}
