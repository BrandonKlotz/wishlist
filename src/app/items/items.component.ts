import { Component, OnInit } from '@angular/core';
import { newItem } from './model/item';
import { ItemService } from './service/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: newItem[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.items$.subscribe(items => this.items = items)
  }

}
