import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'apiconnection';
  galleryOptions?: NgxGalleryOptions[];
  galleryImages?: NgxGalleryImage[];

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/nature_1.jpeg',
        medium: 'assets/nature_2.jpeg',
        big: 'assets/nature_3.jpeg'
      },
      {
        small: 'assets/cars_1.jpeg',
        medium: 'assets/cars_2.jpeg',
        big: 'assets/cars_3.jpeg'
      },
      {
        small: 'assets/people_1.jpeg',
        medium: 'assets/people_2.jpeg',
        big: 'assets/people_3.jpeg'
      }
    ];
  }


}
