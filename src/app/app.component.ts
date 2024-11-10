import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Vacinas', url: '/vacinas', icon: 'wallet' },
    { title: 'Cartão SUS', url: '/carteirinha', icon: 'wallet' },
    { title: 'Dependentes', url: '/folder/favorites', icon: 'people' },
    { title: 'Informações', url: '/folder/outbox', icon: 'information-circle' }
  ];
  constructor(private menuController: MenuController) {}

  closeMenu() {
    this.menuController.close();
  }

}
