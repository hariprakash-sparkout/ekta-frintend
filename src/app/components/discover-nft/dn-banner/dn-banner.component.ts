import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dn-banner',
  templateUrl: './dn-banner.component.html',
  styleUrls: ['./dn-banner.component.css']
})
export class DnBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [{
    image: 'assets/images/discover-nft/explore-collection/banner-bg-1.png',
    thumbImage: 'assets/images/discover-nft/explore-collection/banner-bg-1.png',
    // title: 'Hummingbirds are amazing creatures'
}, {
    image: 'assets/images/discover-nft/explore-collection/banner-bg-1.png',
    thumbImage: 'assets/images/discover-nft/explore-collection/banner-bg-1.png'
}, {
    image: 'assets/images/discover-nft/explore-collection/banner-bg-1.png',
    thumbImage: 'assets/images/discover-nft/explore-collection/banner-bg-1.png',
    // title: 'Example with title.'
},{
    image: 'assets/images/discover-nft/explore-collection/banner-bg-1.png',
    thumbImage: 'assets/images/discover-nft/explore-collection/banner-bg-1.png',
    // title: 'Hummingbirds are amazing creatures'
}, {
    image: 'assets/images/discover-nft/explore-collection/banner-bg-1.png',
    thumbImage: 'assets/images/discover-nft/explore-collection/banner-bg-1.png'
}];
  

}
