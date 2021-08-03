import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ArticleBriefDto} from '../../../model/dto/article-brief.dto';
import {NzMessageService} from 'ng-zorro-antd/message';
import {LikeService} from '../../../core/service/biz/like.service';
import {LikeTypeEnum} from '../../../model/enum/like-type.enum';

@Component({
  selector: 'app-article-list-brief',
  templateUrl: './article-list-brief.component.html',
  styleUrls: ['./article-list-brief.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class ArticleListBriefComponent implements OnInit {
  @Input()
  articleBrief: ArticleBriefDto;

  loadingState = {
    likeLoading: false
  };

  constructor(private messageService: NzMessageService,
              private changeDetectorRef: ChangeDetectorRef,
              private likeService: LikeService) {
  }

  ngOnInit(): void {
  }

  toggleLike(): void {
    if (this.loadingState.likeLoading) {
      return;
    }
    this.loadingState.likeLoading = true;

    if (this.articleBrief.isLiked) {
      this.likeService.unLikeByCurrentUser(this.articleBrief.id, LikeTypeEnum.ARTICLE).subscribe(() => {
        this.loadingState.likeLoading = false;
        this.articleBrief.isLiked = false;
        this.articleBrief.likeCount--;
        this.changeDetectorRef.markForCheck();
      }, () => this.loadingState.likeLoading = false)
    } else {
      this.likeService.likeByCurrentUser(this.articleBrief.id, LikeTypeEnum.ARTICLE).subscribe(() => {
        this.loadingState.likeLoading = false;
        this.articleBrief.isLiked = true;
        this.articleBrief.likeCount++;
        this.changeDetectorRef.markForCheck();
      }, () => this.loadingState.likeLoading = false)
    }
  }
}
