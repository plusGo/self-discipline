import {Component, HostBinding, OnInit} from '@angular/core';
import {ArticleService} from '../../core/service/biz/article.service';
import {ActivatedRoute} from '@angular/router';
import {ArticleDetailDto} from '../../model/dto/article-detail.dto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  articleDetail: ArticleDetailDto;

  loadingState = {
    loadingArticle: true
  };

  @HostBinding('class.portal-content-container') classBiding = true;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) {
    this.route.paramMap.subscribe(map => {
      const id = map.get('id');
      if (id) {
        this.loadData(id);
      }
    })
  }

  ngOnInit(): void {
  }

  loadData(id: string) {
    this.loadingState.loadingArticle = true;
    this.articleService.findDetail(id).subscribe(res => {
      this.articleDetail = res;
      this.loadingState.loadingArticle = false;
    }, () => {
      this.loadingState.loadingArticle = false;
    })
  }

}
