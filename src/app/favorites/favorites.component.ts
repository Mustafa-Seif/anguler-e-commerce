import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreaseFavorites } from '../store/favorites/favorites.action';
import { removeProductList } from '../store/products/product.action';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorite:number=0;

  constructor( private store: Store<any>) { }
  items: any = [];
  ngOnInit(): void {
    this.store.select('products').subscribe((val) => {
      this.items = [...val.items];
    });

    console.log(this.items)
  }

  removeFavorite(item:number){
    this.items.splice(item, 1);
    this.store.dispatch(removeProductList({ products: this.items }));
    this.store.dispatch(decreaseFavorites({favorites:this.favorite -1 }))
  }

}
