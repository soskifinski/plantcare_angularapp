import { Component } from '@angular/core';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'PlantCare';
 isLoggedIn = false;  
  constructor(private accountService: AccountService) {


    this.isLoggedIn = this.accountService.getCurrentAccount() !== null;
  }

  ngOnInit(): void {
    
  }
}