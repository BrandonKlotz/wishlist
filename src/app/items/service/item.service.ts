import { Injectable } from '@angular/core';
import { newItem } from '../model/item';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ItemService {

  private items = new BehaviorSubject <newItem[]>([{
    id: 0,
    title: 'Item One',
    cost: 45
  }]);
  public items$ = this.items.asObservable();
  constructor() { }
}
