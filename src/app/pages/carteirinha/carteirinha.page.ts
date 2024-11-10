import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationModalComponent } from 'src/app/componentes/notification-modal/notification-modal.component';

@Component({
  selector: 'app-carteirinha',
  templateUrl: './carteirinha.page.html',
  styleUrls: ['./carteirinha.page.scss'],
})
export class CarteirinhaPage implements OnInit {
  unreadNotifications = 3;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: NotificationModalComponent
    });
    return await modal.present();  
  }

}
