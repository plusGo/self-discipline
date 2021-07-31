import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';
import {ArticleService} from '../../core/service/biz/article.service';
import {ArticleBriefDto} from '../../model/dto/article-brief.dto';
import {fromEvent} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

  pageIndex = 0;
  articleBriefs: ArticleBriefDto[] = [];
  loadingState = {
    initial: true,
    loadingMore: false
  };

  constructor(private articleService: ArticleService,
              private changeDetectorRef: ChangeDetectorRef,
              private router: Router,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.loadMore();
  }

  ngAfterViewInit(): void {
    this.startListenScroll();
  }

  loadMore(index = 0): void {
    this.loadingState.loadingMore = true;
    this.articleService.findBriefList(index).subscribe(res => {
      this.articleBriefs = res;
      this.loadingState.initial = false;
      this.loadingState.loadingMore = true;
    });
  }

  private startListenScroll(): void {
    fromEvent(this.elementRef.nativeElement, 'scroll').subscribe(e => {
      console.log(e);
    })
  }

  goToDetail(articleBrief: ArticleBriefDto): void {
    this.router.navigate([`/detail/${articleBrief.articleId}`])
  }
}
