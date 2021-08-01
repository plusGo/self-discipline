import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpPlusClient} from 'ng-http-plus';
import {ArticlePo} from '../../../model/po/article.po';
import {JpaPageDto} from '../../../model/dto/jpa-page.dto';
import {ArticleBriefDto} from '../../../model/dto/article-brief.dto';
import {ArticleDetailDto} from '../../../model/dto/article-detail.dto';
import {UserInfoDto} from '../../../../model/dto/user-info.dto';

@Injectable({providedIn: 'root'})
export class PortalUserService {


  getUserInfo(userId: string): Observable<UserInfoDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/users/${userId}/info`)
      .get();
  }

  updateUserInfo(userInfo:UserInfoDto): Observable<void> {
    return HttpPlusClient.builder()
      .url(`/article-server/portal/users/info`)
      .body({})
      .post();
  }

  findDetail(id: string): Observable<ArticleDetailDto> {
    return HttpPlusClient.builder()
      .url(`/article-server/articles/${id}`)
      .get();
  }

  findBriefList(pageIndex = 0, pageSize = 20): Observable<ArticleBriefDto[]> {
    return HttpPlusClient.builder()
      .url(`/article-server/articles/recommend`)
      .params({pageIndex: `${pageIndex}`, pageSize: `${pageSize}`})
      .get();
  }
}
