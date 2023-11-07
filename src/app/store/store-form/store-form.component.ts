import { Component } from '@angular/core';
import { IStore } from '../store.model';
import { StoreServiceService } from '../store-service.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css'],
})
export class StoreFormComponent {
  //declaracion de variable del formulario
  title: string = '';
  titleToUpdate: string = '';

  price: number = 0;
  priceToUpdate: number = 0;
  description: string = '';
  descriptionToUpdate: string = '';
  category: string = '';
  categoryToUpdate: string = '';
  image: string = '';
  imageToUpdate: string = '';
  createdStore: IStore | undefined;
  storeToUpdate: IStore | undefined;
  searchId: number= 0;
  updateMessage: string = '';

  constructor(private storeService: StoreServiceService) {}

  create(): void {
    let store: IStore = {
      id: undefined,
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image,
    };
    //llamada al servicio para crear el evento
    this.storeService
      .create(store)
      .subscribe(data => this.createdStore = data)
    this.title = '';
    this.price = 0;
    this.description = '';
    this.category = '';
    this.image = '';
  }
  loadStoreById(id: number): void {
    this.storeService.findById(id).subscribe(data => {
      this.storeToUpdate = data;
      this.titleToUpdate = data.title;
      this.priceToUpdate = data.price;
      this.descriptionToUpdate = data.description;
      this.categoryToUpdate = data.category;
      this.imageToUpdate = data.image;
    });
  }



  update(): void {
    if (!this.storeToUpdate) return
    this.storeToUpdate.title= this.titleToUpdate;
    this.storeToUpdate.price= this.priceToUpdate;
    this.storeToUpdate.description= this.descriptionToUpdate;
    this.storeToUpdate.category= this.categoryToUpdate;
    this.storeToUpdate.image= this.imageToUpdate;

    //llamada al servicio para actualizar el evento
    this.storeService.update(this.storeToUpdate).subscribe(data => console.log('Elemento actualizado', data));
    this.updateMessage = 'Elemento actualizado';

  }
}
