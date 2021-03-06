import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SyncifySharedModule } from 'app/shared/shared.module';
import { SyncifyCoreModule } from 'app/core/core.module';
import { SyncifyAppRoutingModule } from './app-routing.module';
import { SyncifyHomeModule } from './home/home.module';
import { SyncifyEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
    BrowserModule,
    SyncifySharedModule,
    SyncifyCoreModule,
    SyncifyHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SyncifyEntityModule,
    SyncifyAppRoutingModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    FooterComponent,
    CreatePlaylistComponent,
    ViewPlaylistComponent,
    AboutUsComponent
  ],
  bootstrap: [MainComponent]
})
export class SyncifyAppModule {}
