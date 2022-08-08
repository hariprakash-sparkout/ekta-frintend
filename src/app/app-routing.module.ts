import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverNftComponent } from './components/discover-nft/discover-nft.component';
import { ExploreCollectionsComponent } from './components/discover-nft/explore-collections/explore-collections.component';
import { SingleCollectionDetailsComponent } from './components/discover-nft/single-collection-details/single-collection-details.component';
import { SingleCollectionComponent } from './components/discover-nft/single-collection/single-collection.component';
import { HomeComponent } from './components/home/home.component';
import { HowToRegisterComponent } from './components/home/how-to-register/how-to-register.component';
import { FeaturedPartnerComponent } from './components/home/featured-partner/featured-partner.component';
import { WhatIsEktaComponent } from './components/home/what-is-ekta/what-is-ekta.component';
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'discover-nft', component:DiscoverNftComponent,children:[
    {path: '', component:ExploreCollectionsComponent},
    {path: 'single-collection', component:SingleCollectionComponent},
    {path: 'single-collection-details', component:SingleCollectionDetailsComponent}
  ]},
  {path: 'partner',component:FeaturedPartnerComponent},
  {path:'help',component:HowToRegisterComponent},
  {path:'ekta',component:WhatIsEktaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
