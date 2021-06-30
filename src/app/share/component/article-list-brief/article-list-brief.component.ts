import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ArticleBriefDto} from '../../../model/dto/article-brief.dto';

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
