import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Carteirinha', url: '/folder/inbox', icon: 'wallet' },
    { title: 'Dependentes', url: '/folder/favorites', icon: 'people' },
    { title: 'Informações', url: '/folder/outbox', icon: 'information-circle' }
  ];
  constructor() {}
}
