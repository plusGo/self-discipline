import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-list-brief',
  templateUrl: './article-list-brief.component.html',
  styleUrls: ['./article-list-brief.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class ArticleListBriefComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
