import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArticleService} from '../../core/service/biz/article.service';
import {ArticleBriefDto} from '../../model/dto/article-brief.dto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  pageIndex = 0;
  articleBriefs: ArticleBriefDto[] = [];

  constructor(private articleService: ArticleService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(index = 0): void {
    this.articleService.findBriefList(index).subscribe(res => {
      this.articleBriefs = res;
      this.changeDetectorRef.markForCheck();
    });
  }

}
