import {Item} from './item';

export interface CatModel {
  title: string,
  description: string,
  image: string,
  show: boolean,
  link: string,
  items: Item[]
}
