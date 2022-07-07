import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UnicornEffects } from 'src/ngrx/unicorns.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicorneditorComponent } from './unicorneditor/unicorneditor.component';
import { UnicornlistComponent } from './unicornlist/unicornlist.component';
import { unicornReducer } from '../ngrx/unicorn.reducer';
import { BabyfactoryComponent } from './babyfactory/babyfactory.component';
import { environment } from '../environments/environment';
import { UnicornListItemComponent } from './unicornlist/unicorn-list-item/unicorn-list-item.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { GenderifyPipe } from './pipe/genderify.pipe';
import { SanitizeAgePipe } from './pipe/sanitize-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UnicorneditorComponent,
    UnicornlistComponent,
    BabyfactoryComponent,
    UnicornListItemComponent,
    CapitalizePipe,
    GenderifyPipe,
    SanitizeAgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(
      {
        unicorns: unicornReducer,
      },
      {}
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([UnicornEffects]),
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
