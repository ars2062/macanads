import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-newads',
  templateUrl: './newads.page.html',
  styleUrls: ['./newads.page.scss'],
})
export class NewadsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items = [
    {
      image: '#',
      title: 'تیتر تبلیغات'
    },
    {
      image: '#',
      title: 'تیتر تبلیغات'
    },
    {
      image: '#',
      title: 'تیتر تبلیغات'
    },
    {
      image: '#',
      title: 'تیتر تبلیغات'
    },
    {
      image: '#',
      title: 'تیتر تبلیغات'
    },
    {
      image: '#',
      title: 'تیتر تبلیغات'
    },
    {
      image: '#',
      title: 'تیتر تبلیغات'
    },
  ];
  constructor(private navCtrl: NavController) {
    console.log(localStorage.getItem('user'));
    if (!localStorage.getItem('user')) {
      navCtrl.navigateForward('/login');
    }
  }

  loadData(event) {
  }

  ngOnInit() {
  }

  detail(item) {
    this.navCtrl.navigateRoot('detail', { animated: true });
  }

}
