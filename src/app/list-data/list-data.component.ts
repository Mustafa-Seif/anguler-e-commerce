import { Component, OnInit } from '@angular/core';
import { ProData } from '../interface/pro-data';
import { ProductAPIService } from '../service/product-api.service';


@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {
  listData:Array<ProData>=[];
   
  

  constructor(private http:ProductAPIService) { }

  ngOnInit(): void {
   this.http.getProductList().subscribe((val)=>{
      // console.log(val)
      this.listData=val;
    })
  }

}
