import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicorneditorComponent } from './unicorneditor/unicorneditor.component';
import { UnicornlistComponent } from './unicornlist/unicornlist.component';
import { StoreModule } from '@ngrx/store';
import { unicornReducer } from '../ngrx/unicorn.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UnicornEffects } from 'src/ngrx/unicorns.effects';
import { BabyfactoryComponent } from './babyfactory/babyfactory.component';

@NgModule({
  declarations: [
    AppComponent,
    UnicorneditorComponent,
    UnicornlistComponent,
    BabyfactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      unicorns: unicornReducer
    }, {}),
    EffectsModule.forRoot([UnicornEffects]),
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
