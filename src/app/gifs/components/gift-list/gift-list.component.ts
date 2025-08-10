import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";

@Component({
  selector: 'gift-list',
  imports: [GifListItemComponent],
  templateUrl: './gift-list.component.html',
})
export default class GiftListComponent { 
  gifs = input.required<string[]>();
}
