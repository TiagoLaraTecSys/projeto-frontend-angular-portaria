import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Logger } from '../services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'MyFirstAngularProject';

  message= 'I\'m read only';
  canEdit = false;
  count = 0;

  onEditClick(){
    this.canEdit = !this.canEdit;

    this.message = this.canEdit ? "You can edit me!" : "I'm read only!"
  }

  constructor(){
    
  }

  ngOnInit(): void {

    throw new Error("Method not implemented.");
  }
  sayHello(){
    console.log('Olá console')
  }


}
