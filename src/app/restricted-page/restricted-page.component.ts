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
  mlai: Profiles[];
  cc: Profiles[];
  wd: Profiles[];
  ad: Profiles[];
  ns: Profiles[];
  localItem: string;
  constructor(private authService: MsalService) {
    this.localItem = localStorage.getItem("profs");
    if(this.localItem == null)
    {
      this.all = [
      ]
      this.cp = [
      ]
      this.ds = [
      ]
      this.mlai = [
      ]
      this.cc = [
      ]
      this.wd = [
      ]
      this.ad = [
      ]
      this.ns = [
      ]
    }
    else
    {
      this.all = JSON.parse(this.localItem);
    }
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
  addingprof(prof: Profiles){
    console.log(prof);
    this.all.push(prof);
    localStorage.setItem("profs", JSON.stringify(this.all))
    if(prof.expertis=="Data Science")
    {
      console.log("yeah ds boie");
      this.ds.push(prof);
      localStorage.setItem("profs", JSON.stringify(this.ds))
    }
  }
}
