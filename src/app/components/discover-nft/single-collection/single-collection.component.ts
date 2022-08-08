import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-collection',
  templateUrl: './single-collection.component.html',
  styleUrls: ['./single-collection.component.css']
})
export class SingleCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // debugger;
  }
  isStatusCollapsed = false;
  isPriceCollapsed = false;
  isBackgroundCollapsed = false;
  isClothingCollapsed = false;
  isEyebrowCollapsed = false;
  isEyesCollapsed = false;
  isFaceCollapsed = false;
  isHandCollapsed = false;
  isMouthCollapsed = false;
  isOffHandCollapsed = false;
  isShoeCollapsed = false;
  isSpecialCollapsed = false;
  isTypeCollapsed = false;
  isDownArrowCollapsed = false;
  isAttributeInfoShown = false;
  isHeadgearCollapsed = false;
  isAttributeInputClicked = false;
  isSalesDropdownCollapsed = false;
  placeholderText: string = "Please enter new value";
  isExist = false;
  existPlaceHolderText = "Attributes"

  toggleStatusItem() {
    this.isStatusCollapsed = !this.isStatusCollapsed;
    this.isDownArrowCollapsed = !this.isDownArrowCollapsed;
  }
  togglePriceItem() {
    this.isPriceCollapsed = !this.isPriceCollapsed;
  }
  toggleBackgroundItem() {
    this.isBackgroundCollapsed = !this.isBackgroundCollapsed;
  }
  toggleClothingItem() {
    this.isClothingCollapsed = !this.isClothingCollapsed;
  }
  toggleEyebrowItem() {
    this.isEyebrowCollapsed = !this.isEyebrowCollapsed;
  }
  toggleEyesItem() {
    this.isEyesCollapsed = !this.isEyesCollapsed;
  }
  toggleFaceItem() {
    this.isFaceCollapsed = !this.isFaceCollapsed;
  }
  toggleHandItem() {
    this.isHandCollapsed = !this.isHandCollapsed;
  }
  toggleOffhandItem() {
    this.isOffHandCollapsed = !this.isOffHandCollapsed;
  }
  toggleMouthItem() {
    this.isMouthCollapsed = !this.isMouthCollapsed
  }
  toggleShoeItem() {
    this.isShoeCollapsed = !this.isShoeCollapsed;
  }
  toggleSpecialItem(){
    this.isSpecialCollapsed = !this.isSpecialCollapsed;
  }
  toggleTypeItem(){
    this.isTypeCollapsed = !this.isTypeCollapsed;
  }
  toggleHeadGearItem() {
    this.isHeadgearCollapsed = !this.isHeadgearCollapsed;
  }
  showAttributeInfo(){
    this.isAttributeInfoShown = true;
    this.isAttributeInputClicked = false;
  }
  hideAttributeInfo() {
    this.isAttributeInfoShown = false;
  }
  showSalesDropdown() {
      this.isSalesDropdownCollapsed = !this.isSalesDropdownCollapsed;
    }
}
