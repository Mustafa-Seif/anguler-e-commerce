import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProData } from '../interface/pro-data';


@Injectable({
  providedIn: 'root'
})
export class CartService {
 private arrPro = new BehaviorSubject<any[]>([]);
  productVal = this.arrPro.asObservable();

  constructor() { }

  arrayProducts(val:any):void{
     this.arrPro.next(val)
    //  console.log(val)
  }

  removeItem(item:any){
    

  }
}




// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   arrPro = new BehaviorSubject([]);
//   arrList:any = [];
//   constructor() { }

//   arrayProducts(val:any){
//     this.arrList.push(...val)
//     console.log(val)
//     console.log(this.arrList)

//     return this.arrPro.next(this.arrList)
//   }

//   removeItem(item:any){
//     this.arrList.map((e:any,i:any)=>{
//       if(this.arrList.id === e.id){
//         this.arrList.splice(i,1)

//       }
//     })

//   }
// }