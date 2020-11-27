import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounting } from 'src/app/models/accounting.model';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-create-accounting',
  templateUrl: './create-accounting.component.html',
  styleUrls: ['./create-accounting.component.css']
})
export class CreateAccountingComponent implements OnInit {
  accounting: Accounting = new Accounting();
  submitted = false;

  constructor(private accountingService: AccountingService, private router: Router) { }

  ngOnInit() {
  }

  newAccounting() : void{
    this.submitted = false;
    this.accounting = new Accounting();
  }

  save(){
    this.accountingService.createNewAccounting(this.accounting)
    .subscribe(data => console.log(data), error => console.log(error));

    this.accounting = new Accounting();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
    this.router.navigate(['/accounting']);
  }

  cancel(){
    this.router.navigate(['/accounting']);
  }
}
