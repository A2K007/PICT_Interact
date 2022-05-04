import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { Profiles } from '../Profiles';

@Component({
  selector: 'app-restricted-page',
  templateUrl: './restricted-page.component.html',
  styleUrls: ['./restricted-page.component.css']
})
export class RestrictedPageComponent implements OnInit {
  all: Profiles[];
  cp: Profiles[];
  ds: Profiles[];
  constructor(private authService: MsalService) {
    this.all = [
      {
        name: "Avishkar Kakade",
        expertis: "CP",
        contact: 737902951,
      },
      {
        name: "Ashutosh Rokade",
        expertis: "DS",
        contact: 9845612456,
      },
      {
        name: "Ashutosh Rokade",
        expertis: "DS",
        contact: 9845612456,
      },
      {
        name: "Ashutosh Rokade",
        expertis: "DS",
        contact: 9845612456,
      },
      {
        name: "Ashutosh Rokade",
        expertis: "DS",
        contact: 9845612456,
      },
      {
        name: "Ashutosh Rokade",
        expertis: "DS",
        contact: 9845612456,
      },
      {
        name: "Ashutosh Rokade",
        expertis: "DS",
        contact: 9845612456,
      }
    ]
    this.cp = [
      {
        name: "Avishkar Kakade",
        expertis: "CP",
        contact: 737902951,
      }
    ]
    this.ds = [
      {
        name: "Ashutosh Rokade",
        expertis: "DS",
        contact: 9845612456,
      }
    ]
  }

  getName(): string {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'unknown'
    }
    let txt = this.authService.instance.getActiveAccount().name
    txt = txt.slice(6, -6)
    txt = txt.toLowerCase()
    txt = txt[0].toUpperCase() + txt.substring(1)
    // return this.authService.instance.getActiveAccount().name
    return txt
  }
  getRoll(): string {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'unknown'
    }
    let txt = this.authService.instance.getActiveAccount().name
    txt = txt.slice(0, 5)
    // return this.authService.instance.getActiveAccount().name
    return txt
  }
  getc2kid(): string {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'unknown'
    }
    let txt = this.authService.instance.getActiveAccount().username
    txt = txt.slice(0, 11)
    // return this.authService.instance.getActiveAccount().name
    return txt
  }
  ngOnInit(): void {
  }

}
