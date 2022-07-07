import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UnicornEffects } from 'src/ngrx/unicorns.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicorneditorComponent } from './unicorneditor/unicorneditor.component';
import { UnicornlistComponent } from './unicornlist/unicornlist.component';
import { unicornReducer } from '../ngrx/unicorn.reducer';
import { BabyfactoryComponent } from './babyfactory/babyfactory.component';

@NgModule({
  declarations: [
    AppComponent,
    UnicorneditorComponent,
    UnicornlistComponent,
    BabyfactoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      unicorns: unicornReducer,
    }, {}),
    EffectsModule.forRoot([UnicornEffects]),
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
