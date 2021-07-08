import {ENUM_DATA} from './enum.data';

export enum ArticleCategoryEnum {
  FRONT = "FRONT",
  BACKEND = "BACKEND",
}

export const ArticleCategoryData = [
  {label: '前端', value: 'FRONT'},
  {label: '后端', value: 'BACKEND'},
];

ENUM_DATA['ArticleCategoryEnum'] = ArticleCategoryData;
