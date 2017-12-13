import {Item} from './item';

export interface Model {
  Nom: string,
  Contenu: string,
  iconLarge: string,
  show: boolean,
  items: Item[]
}
