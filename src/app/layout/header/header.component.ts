import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onToggleSideNav(){
    this.sidenavToggle.emit();
  }

}
