import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onClose(){
    this.closeSidenav.emit();
  }

}
