import {Item} from './item';

export interface Model {
  title: string,
  description: string,
  image: string,
  show: boolean,
  items: Item[]
}
