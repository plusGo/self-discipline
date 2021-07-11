import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';
import {ArticleService} from '../../core/service/biz/article.service';
import {ArticleBriefDto} from '../../model/dto/article-brief.dto';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit,AfterViewInit {

  pageIndex = 0;
  articleBriefs: ArticleBriefDto[] = [];

  constructor(private articleService: ArticleService,
              private elementRef: ElementRef,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadMore();
  }

  ngAfterViewInit(): void {
    this.startListenScroll();
  }

  loadMore(index = 0): void {
    this.articleService.findBriefList(index).subscribe(res => {
      this.articleBriefs = res;
      this.changeDetectorRef.markForCheck();
    });
  }

  private startListenScroll(): void {
    fromEvent(this.elementRef.nativeElement, 'scroll').subscribe(e => {
      console.log(e);
    })
  }
}
