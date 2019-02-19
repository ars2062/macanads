import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {};

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
    localStorage.setItem('user', 'ششششش');
    this.navCtrl.navigateForward('tabs');
  }

}
