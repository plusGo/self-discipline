import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-article-tag-render',
  templateUrl: './article-tag-render.component.html',
  styleUrls: ['./article-tag-render.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class ArticleTagRenderComponent implements OnInit, OnChanges {
  @Input()
  mode: 'text' | 'tag' = 'text';

  @Input()
  tagCodes: string[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }

  ngOnInit(): void {
  }

}
