import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { HowDoIMintComponent } from './components/home/how-do-i-mint/how-do-i-mint.component';
import { NewsBlogComponent } from './components/home/news-blog/news-blog.component';
import { LatestEktaNftComponent } from './components/home/latest-ekta-nft/latest-ekta-nft.component';
import { TrendingNftComponent } from './components/home/trending-nft/trending-nft.component';
import { WhatIsEktaComponent } from './components/home/what-is-ekta/what-is-ekta.component';
import { WhyTheBuzzComponent } from './components/home/why-the-buzz/why-the-buzz.component';
import { HowToRegisterComponent } from './components/home/how-to-register/how-to-register.component';
import { FeaturedPartnerComponent } from './components/home/featured-partner/featured-partner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DiscoverNftComponent } from './components/discover-nft/discover-nft.component';
import { ExploreCollectionsComponent } from './components/discover-nft/explore-collections/explore-collections.component';
import { DnBannerComponent } from './components/discover-nft/dn-banner/dn-banner.component';
import { SingleCollectionComponent } from './components/discover-nft/single-collection/single-collection.component';
import { SingleCollectionDetailsComponent } from './components/discover-nft/single-collection-details/single-collection-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HowDoIMintComponent,
    NewsBlogComponent,
    LatestEktaNftComponent,
    TrendingNftComponent,
    WhatIsEktaComponent,
    WhyTheBuzzComponent,
    HowToRegisterComponent,
    FeaturedPartnerComponent,
    FooterComponent,
    HomeComponent,
    DiscoverNftComponent,
    ExploreCollectionsComponent,
    DnBannerComponent,
    SingleCollectionComponent,
    SingleCollectionDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
