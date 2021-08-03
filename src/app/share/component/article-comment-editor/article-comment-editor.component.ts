import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {PortalCommentService} from '../../../core/service/biz/portal/portal-comment.service';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-article-comment-editor',
  templateUrl: './article-comment-editor.component.html',
  styleUrls: ['./article-comment-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class ArticleCommentEditorComponent implements OnInit {
  loading = false;
  commentVal: string;

  @Input()
  targetId: string;

  @Input()
  repliedUsersId: string;

  @Input()
  repliedTargetId: string;

  constructor(private portalCommentService: PortalCommentService,
              private changeDetectorRef: ChangeDetectorRef,
              private messageService: NzMessageService) {
  }

  ngOnInit(): void {
  }

  doComment(): void {
    this.loading = true;
    this.portalCommentService.comment({
      content: this.commentVal,
      targetId: this.targetId
    }).subscribe(() => {
      this.loading = false;
      this.messageService.success('评论成功');
      this.changeDetectorRef.markForCheck();
    }, () => this.loading = false);
  }
}
