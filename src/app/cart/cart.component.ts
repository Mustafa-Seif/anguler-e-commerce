import { Component, OnInit } from '@angular/core';
import { ProData } from '../interface/pro-data';
import { CartService } from '../service/cart.service';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quantity:number=1;
  price:number=0;
  counter:number=0;
  

  constructor(private arrPro:CartService,private count:CounterService) { }
   arrayProducts:any;

  ngOnInit(): void {
    this.arrPro.productVal.subscribe((val)=>{
      this.arrayProducts = val;
    })
    this.arrayProducts.map((e:any)=>{
      this.price = parseInt( e.price);
    })
    
  }





  handleCuantIncrease(){
    if (this.quantity>= 0) {
     ++this.quantity
     this.arrayProducts.map((e:any)=>{
       this.price +=  parseInt( e.price)
     })
    }
  }

  handleCuantDecrease(){
    if (this.quantity > 1) {
      --this.quantity
      this.arrayProducts.map((e:any)=>{
        this.price -=  parseInt( e.price)
      })
     } 
  }


  handleRemoveItem(item:any){
    this.arrayProducts=[]
    this.price =0;
    this.count.count.subscribe((val)=>{
      this.counter = val ;
    })
    this.count.changeCounter(--this.counter)
  }
}
