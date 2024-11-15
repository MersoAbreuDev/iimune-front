import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationModalComponent } from 'src/app/componentes/notification-modal/notification-modal.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  unreadNotifications = 3;
  constructor( private modalController: ModalController ) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: NotificationModalComponent
    });
    return await modal.present();  
  }

}
