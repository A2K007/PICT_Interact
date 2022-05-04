import { Component, OnInit, Input } from '@angular/core';
import { Profiles } from '../Profiles';

@Component({
  selector: 'app-prof-item',
  templateUrl: './prof-item.component.html',
  styleUrls: ['./prof-item.component.css']
})
export class ProfItemComponent implements OnInit {
  @Input() prof: Profiles;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(prof: Profiles){
    
  }
}
