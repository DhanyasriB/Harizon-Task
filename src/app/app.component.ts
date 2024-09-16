import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  title = 'Horizon';
  tiles = [
   { text: 'All', textcontent: ''},
    { text: 'Peo-1', textcontent: 'Employability' },
    { text: 'Peo-2', textcontent: 'Enterprenour'},
    { text: 'Peo-3', textcontent: 'Research'},
    { text: 'Peo-4', textcontent: 'businessworld'},
    { text: 'Peo-5', textcontent: 'Society'},
    // { text: 'Peo-6', textcontent: 'Contribution to Society1'},
  ];

  toggleSidenav() {
    // Logic to open or close the sidenav
    const sidenav = document.querySelector('mat-sidenav');
    if (sidenav) {
      (sidenav as any).toggle();
    }
  }
}
