import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-collection-details',
  templateUrl: './single-collection-details.component.html',
  styleUrls: ['./single-collection-details.component.css']
})
export class SingleCollectionDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isListingCollapsed = false;
  isListingArrowCollapsed = false;
  isOffersCollapsed = false;
  isAttributesCollapsed = false;
  isInformationCollapsed = false;
  isItemActivityCollapsed = false;
  isAboutCollapsed = false;

  toggleListing() {
    this.isListingCollapsed = !this.isListingCollapsed;
    this.isListingArrowCollapsed = !this.isListingArrowCollapsed;
  }
  toggleOffers() {
    this.isOffersCollapsed = !this.isOffersCollapsed;
  }
  toggleAttributes() {
    this.isAttributesCollapsed = !this.isAttributesCollapsed;
  }
  toggleInformation() {
    this.isInformationCollapsed = !this.isInformationCollapsed;
  }
  toggleItemActivity() {
    this.isItemActivityCollapsed = !this.isItemActivityCollapsed;
  }
  toggleAbout() {
    this.isAboutCollapsed = !this.isAboutCollapsed;
  }
 

}
