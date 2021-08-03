import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {ArticleBriefDto} from '../../../../model/dto/article-brief.dto';
import {ArticleDetailDto} from '../../../../model/dto/article-detail.dto';

@Injectable({providedIn: 'root'})
export class PortalArticleService {


  findRecommendList(pageIndex = 0, pageSize = 20): Observable<ArticleBriefDto[]> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/articles/recommend`)
      .params({pageIndex: `${pageIndex}`, pageSize: `${pageSize}`})
      .get();
  }

  getDetailById(id: string): Observable<ArticleDetailDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/articles/${id}`)
      .get();
  }
}
