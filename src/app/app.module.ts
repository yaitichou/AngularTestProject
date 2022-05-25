import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { SpecsDetailsComponent } from './specs-details/specs-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    SpecsDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: CharacterListComponent },
      { path: 'character/:characterId', component: CharacterDetailsComponent },
      { path: 'specialization/:specializationName', component: SpecsDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
