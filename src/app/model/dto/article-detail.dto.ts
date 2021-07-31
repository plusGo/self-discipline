import {NzSafeAny} from 'ng-zorro-antd/core/types';

export class ArticleDetailDto {
  articleId?: string;
  articleTitle?: string;
  tags?: string[];
  markContent?: string;
  headImageId?: string;
  category?: string;
  likeCount?: number;
  commentCount?: number;
  isLiked?: boolean;
  authorName?: string;
  modifiedTime?: NzSafeAny;
}
