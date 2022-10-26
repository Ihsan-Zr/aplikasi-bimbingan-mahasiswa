import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public myAngularxQrCode: string = null;
  
  constructor(private route: Router) {
    // https://openbase.com/js/angularx-qrcode 
    this.myAngularxQrCode = 'Hutao Wangy Wangy';
  }

  logout() {
    this.route.navigate(['/login']);
  }
  ngOnInit() {
    
  }
}
