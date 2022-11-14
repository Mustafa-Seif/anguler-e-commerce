import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from '../service/counter.service';
import { ProductAPIService } from '../service/product-api.service';
import { ProData } from '../interface/pro-data';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-pro-details',
  templateUrl: './pro-details.component.html',
  styleUrls: ['./pro-details.component.scss']
})
export class ProDetailsComponent implements OnInit {
  arrDetails: Array<any> = [];

  countVal: number = 0;
  details: ProData={
    createdAt: '',
    name: '',
    image: '',
    rate: 0,
    count: 0,
    description: '',
    price: '',
    review: [],
    id: ''
  }
  
  // ArrDetails: Array<ProData> = [];
  countStatus: boolean = false;

  constructor(private route: ActivatedRoute, private counterService: CounterService, private proDetails: ProductAPIService,
    private arrProductsSer: CartService,) { }

  ngOnInit(): void {
    // to get id route 
    const id = this.route.snapshot.params['id'];

    this.counterService.count.subscribe((val) => {
      this.countVal = val;
    })
    this.proDetails.getProductDetails(id).subscribe((val) => {
      this.details=val
    })


    

  


  }

  handleCountIncrease() {
    this.countStatus = true;
    this.counterService.changeCounter(++this.countVal)
    this.arrDetails.push({...this.details});
    console.log(this.arrDetails)
    // ?????????????????


    // add to cart service
    this.arrProductsSer.arrayProducts([...this.arrDetails])
  }


  handleCountDecrease() {
    this.countStatus = false;
    this.counterService.changeCounter(--this.countVal)
    // this.arrDetails.pop(this.details);
    
  }










}
