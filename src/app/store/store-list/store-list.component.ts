import { StoreServiceService } from './../store-service.service';
import { Component, OnInit } from '@angular/core';
import { IStore } from '../store.model';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  
  stores: IStore[] = [];
  
  constructor(private StoreService: StoreServiceService) {}
  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.StoreService.findAll().subscribe(data => {this.stores = data});
  }


}
