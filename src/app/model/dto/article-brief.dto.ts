import {NzSafeAny} from 'ng-zorro-antd/core/types';

export class ArticleBriefDto {
  articleId?: string;
  articleTitle?: string;
  tags?: string[];
  briefContent?: string;
  headImageId?: string;
  category?: string;
  likeCount?: number;
  commentCount?: number;
  isLiked?: boolean;
  authorName?: string;
  modifiedTime?: NzSafeAny;
}
