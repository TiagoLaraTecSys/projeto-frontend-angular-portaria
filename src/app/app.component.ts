import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/server/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'MyFirstAngularProject';

  constructor(private service: LoginService){
    
  }
  logging(){
    this.service.logging();
  };

  ngOnInit(): void {
    
    this.logging();
  }


}
