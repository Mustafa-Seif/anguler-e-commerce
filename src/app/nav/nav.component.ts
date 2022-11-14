import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CounterService } from '../service/counter.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
   countVal:number=0;
   countFav:number=0;
   

  constructor(private counterService:CounterService, private isloged:AuthService ,private store:Store<any> ) { }

  loged:boolean=false;
  ngOnInit(): void {

    this.counterService.count.subscribe((val)=>{
      this.countVal=val;
    })

    // check login 
    this.isloged.loged.subscribe((val)=>{
      this.loged = val;
      // console.log(this.loged)
    })

    this.store.select("favoritesPro").subscribe((val)=>{
      this.countFav = val.favorites;
    })
   


  }
  
  clickCart(){
    if (!this.loged) {
      let notifi =false;
    
      
    }else{
      let notifi =true;



    }
  }
  

}
