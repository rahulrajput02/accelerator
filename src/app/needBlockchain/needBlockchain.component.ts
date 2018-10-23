import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'needBlockchain-root',
  templateUrl: './needBlockchain.component.html',
  styleUrls: ['./needBlockchain.component.css']
})
export class needBlockchainComponent {

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private routes: Router) {
  }

  showY1(div) {
    document.getElementById(div).style.display = 'block';
  }

  showN1() {
    alert('I should not be using a blockchain!');
    window.location.href = environment.gotoHome;
  }

  showN2() {
    alert('I should be using a centralized database!');
    window.location.href = environment.gotoHome;
  }

  showN3() {
    alert('I should utilize multiple copies of centralized databases!');
    window.location.href = environment.gotoHome;
  }

  showN4() {
    alert('Use a third party or intermediary!');
    window.location.href = environment.gotoHome;
  }

  showY5() {
    alert('I should be using a blockchain!');
    window.location.href = environment.gotoHome;
  }

  showN5() {
    alert('Use a master/slave database!');
    window.location.href = environment.gotoHome;
  }
}
