import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profiles } from '../Profiles';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {
  studname: string;
  sel: string;
  studcontact: number;
  @Output() addProfile: EventEmitter<Profiles> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const prof = {
      name: this.studname,
      expertis: this.sel,
      contact: this.studcontact,
      active: true
    }
    this.addProfile.emit(prof);
  }

}
