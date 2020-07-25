import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';
import { StorageService } from "../storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-images.component.html',
  styleUrls: ['./food-images.component.css']
})
export class FoodImagesComponent implements OnInit {

  public foodList: any = [];
  public pageNumber: number = 1;


  constructor(private flickrService: FlickrService,private storageService: StorageService,private router: Router) { }

  ngOnInit() {
    this.gettingFoodImages();
  }

  gettingFoodImages() {
   
    this.flickrService.gettingImages(this.pageNumber).subscribe(result => {
      this.foodList = result.photos.photo;

    })
  }

  gettingLink(food:any): string {
    return this.flickrService.formFlickrData(food);
  }

  checkAlreadyReviewed(id:string): number {
    return this.storageService.getInitialStars(id);
  }

  foodSelected(food:any) {
    this.storageService.updateChosenFood(food);
    this.router.navigate(['/onclick']);
  }

}
