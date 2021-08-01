import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-comment-editor',
  templateUrl: './article-comment-editor.component.html',
  styleUrls: ['./article-comment-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class ArticleCommentEditorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
