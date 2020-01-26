import { Component, OnInit } from '@angular/core';
import { Preferences } from '../../enums/preferences';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  userName: string;
  userSurname: string;
  email: string;
  age: number;
  active: boolean;
  preferences: Object;

  constructor() {
    this.userName = 'Krystsina';
    this.userSurname = 'Kastsiuk';
    this.email = 'Krystsina_Kastsiuk@epam.com';
    this.age = 29;
    this.active = false;
    this.preferences = Preferences;
  }

  ngOnInit() {
  }

}
