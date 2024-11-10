import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NotificationModalComponent } from '../componentes/notification-modal/notification-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public folder!: string;

  private activatedRoute = inject(ActivatedRoute);
  constructor( private modalController: ModalController ) {}
  unreadNotifications = 3;
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: NotificationModalComponent
    });
    return await modal.present();  
  }

}
