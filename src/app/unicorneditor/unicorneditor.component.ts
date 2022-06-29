import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Gender } from '../model/Gender';
import { Unicorn } from '../model/Unicorn';
import { UnicornService } from '../services/unicorn.service';

@Component({
  selector: 'app-unicorneditor',
  templateUrl: './unicorneditor.component.html',
  styleUrls: ['./unicorneditor.component.sass']
})
export class UnicorneditorComponent implements OnInit, OnChanges {

  currentUnicorn?: Unicorn;
  availableGenders = Object.keys(Gender).filter(v => isNaN(Number(v)));

  constructor(private unicornService:UnicornService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes"); 
    console.log(changes);
  }

  ngOnInit(): void {
    this.currentUnicorn = new Unicorn()
  }
  onGenderChange(event: Event)
  {
    
    console.log((event.target as HTMLInputElement).value +" selected");
  }
  onSave(event?: Event) {
    console.log(this.currentUnicorn);
    if(this.currentUnicorn)
      this.unicornService.saveUnicorn(this.currentUnicorn);
  }


}
