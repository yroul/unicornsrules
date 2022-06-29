import { Component, OnInit } from '@angular/core';
import { UnicornStateInterface } from 'src/ngrx/unicorn.reducer';
import { Unicorn } from '../model/Unicorn';
import { UnicornService } from '../services/unicorn.service';

@Component({
  selector: 'app-unicornlist',
  templateUrl: './unicornlist.component.html',
  styleUrls: ['./unicornlist.component.sass']
})
export class UnicornlistComponent implements OnInit {

  list?: Unicorn[];
  constructor(private unicornService: UnicornService) {}

  ngOnInit(): void {
      this.unicornService.fetchUnicorns().subscribe((data:Unicorn[]) => {
       this.list = data;
      })
  }

}
