import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {ArticlePo} from '../../../model/po/article.po';
import {JpaPageDto} from '../../../model/dto/jpa-page.dto';

@Injectable({providedIn: 'root'})
export class ArticleService {


  save(article: ArticlePo): Observable<ArticlePo> {
    return HttpPlusClient.builder()
      .url(`/api/articles`)
      .body(article)
      .post();
  }

  findPage(): Observable<JpaPageDto> {
    return HttpPlusClient.builder()
      .url(`/api/articles/page`)
      .body({})
      .post();
  }
}
