import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  loggedIn = false;

  constructor(public router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onToggleSideNav(){
    this.sidenavToggle.emit();
  }

  getLogInState(){
    this.loggedIn = this.loginService.checkIfLoggedIn();
  }

  logout(){
    this.loginService.logOut();
  }

}
