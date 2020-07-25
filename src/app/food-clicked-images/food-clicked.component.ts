import { Component, OnInit, Output } from '@angular/core';
import { StorageService } from '../storage.service';
import { Subscription } from 'rxjs';
import { FlickrService } from '../flickr.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-food-individual',
  templateUrl: './food-clicked.component.html',
  styleUrls: ['./food-clicked.component.css']
})
export class FoodClickedComponent implements OnInit {

  public subscriber: Subscription;
  public chosenFood: any = {};
  public rate: any = {};
  public initialStars: number = 0;

  constructor(private storageService: StorageService, private flickrService: FlickrService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('pid'+this.storageService.chosenFood.id)!=null) {
      this.rate = JSON.parse(localStorage.getItem('pid'+this.storageService.chosenFood.id));
      this.initialStars = this.rate.reviewStars;
    }
    this.flickrService.gettingClickedInfo(this.storageService.chosenFood.id).subscribe(result => {
      this.chosenFood = result.photo;
      console.log(this.chosenFood);
    },error => {
      console.log(error);
    });

  }
goBack(){
  this.router.navigate(['/images'])
}
  gettingLink() {
    return this.flickrService.formFlickrData(this.chosenFood);
  }

  forRating(stars:any) {
    this.rate.reviewStars = stars;
  }

  submit() {
    

    if(this.rate["reviewText"] || this.rate["reviewText"].length!==0) {
      localStorage.setItem('pid'+this.chosenFood.id,JSON.stringify(this.rate));

      this.router.navigate(['/images']);
    }
  
  }
}
