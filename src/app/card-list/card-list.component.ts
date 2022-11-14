import { Component, Input, OnInit } from '@angular/core';
import { ProData } from '../interface/pro-data';
import { Router } from '@angular/router';
import { CounterService } from '../service/counter.service';
import { Store } from '@ngrx/store';
import { decreaseFavorites, increaseFavorites } from '../store/favorites/favorites.action';
import { addProductList } from '../store/products/product.action';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() item :ProData = {
    createdAt:"",
    name:"",
    image:"",
    rate:0,
    count:0,
    description:"",
    price:"",
    review:[],
    id:"",
  }

  wishlistItems: any = [];


  constructor(private router:Router, private store:Store<any>) {}
  favorite:number = 0;
  addedToFav=false;
  favoriteList:any=[];


  ngOnInit(): void {
    this.store.select('products').subscribe((res) => {
      this.favoriteList = [...res.items];
    });
  }

  
    

  handleShowDetails(){
    this.router.navigate(["/product",this.item.id])
    // anthor syntax 
    // this.router.navigate([`/product/${this.item.id}`])
  }


  handlefavorite(item:any){
    // this.addedToFav = true;
    if (this.addedToFav === false) {
      this.store.dispatch(increaseFavorites({favorites:this.favorite }))
      this.addedToFav = true;
      // this.favoriteList.push(this.item)
      this.favoriteList.indexOf(item) === -1 ? this.favoriteList.push(item) : 0;
    this.store.dispatch(addProductList({ products: this.favoriteList }));
    }else if(this.addedToFav === true){
      this.store.dispatch(decreaseFavorites({favorites:this.favorite }))
      this.addedToFav = false;
    }
    
  }

}
// function favorites(favorites: any, arg1: number): { favorites: number; } & import("@ngrx/store/src/models").TypedAction<"[favorites page]increase favorites "> {
//   throw new Error('Function not implemented.');
// }

