import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounting } from 'src/app/models/accounting.model';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-update-accounting',
  templateUrl: './update-accounting.component.html',
  styleUrls: ['./update-accounting.component.css']
})
export class UpdateAccountingComponent implements OnInit {

  accounting: Accounting;
  id: string;

  _accounting: Accounting = new Accounting();
  submitted = false;

  constructor(private accountingService: AccountingService, private router: Router) { }

  ngOnInit(): void {
    this.getAccounting();
  }
  
  getAccounting() {
    this.id = this.accountingService.getStatementId();
    this.accountingService.searchFor(this.id).subscribe(acc => {
      this.accounting = acc;
      console.log(this.accounting);
      console.log(this.id);
    });
  }

  update(){
    this.accountingService.updateAccounting(this.accounting).subscribe(acc => {
      console.log(acc);
    }
    );
    this.router.navigate(['/accounting']);
  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  cancel(){
    this.router.navigate(['/accounting']);
  }
}
