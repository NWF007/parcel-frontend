import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Accounting } from 'src/app/models/accounting.model';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-accounting-list',
  templateUrl: './accounting-list.component.html',
  styleUrls: ['./accounting-list.component.css']
})
export class AccountingListComponent implements OnInit {
  private accountings: Accounting[]; //normal array for table

  displayedColumns = ["Statement Id", "Income", "Expense","Budget","Income Transaction Id","Expense Transaction Id", "Action"];
  dataSource = new MatTableDataSource<Accounting>();

  constructor(private accountingService: AccountingService, private router: Router) { }

  ngOnInit(): void {
    this.getAccounting();
  }

  getAccounting(){
    this.accountingService.getAll().subscribe(acc => {
      this.dataSource.data = acc;
      console.log(acc);
    });
  }

  deleteAccounting(id: string){
    this.accountingService.deleteAccounting(id).subscribe(acc => {
      console.log(acc);
      this.getAccounting();
    });
  }

  editAccounting(id: string){
    this.accountingService.saveId(id);
    this.router.navigate(['/accounting/update']);
  }

}
