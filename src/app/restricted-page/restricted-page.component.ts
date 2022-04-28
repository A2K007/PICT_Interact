import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restricted-page',
  templateUrl: './restricted-page.component.html',
  styleUrls: ['./restricted-page.component.css']
})
export class RestrictedPageComponent implements OnInit {

  constructor(private authService: MsalService) { }

  getName () : string {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'unknown'
    }
    let txt = this.authService.instance.getActiveAccount().name
    txt = txt.slice(6,-6)
    txt = txt.toLowerCase()
    txt = txt[0].toUpperCase() + txt.substring(1)
    // return this.authService.instance.getActiveAccount().name
    return txt
  }
  getRoll () : string {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'unknown'
    }
    let txt = this.authService.instance.getActiveAccount().name
    txt = txt.slice(0,5)
    // return this.authService.instance.getActiveAccount().name
    return txt
  }
  getc2kid () : string {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'unknown'
    }
    let txt = this.authService.instance.getActiveAccount().username
    txt = txt.slice(0,11)
    // return this.authService.instance.getActiveAccount().name
    return txt
  }
  ngOnInit(): void {
  }

}
