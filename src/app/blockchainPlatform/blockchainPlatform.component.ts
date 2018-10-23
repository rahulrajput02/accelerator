import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'blockchainPlatform-root',
  templateUrl: './blockchainPlatform.component.html',
  styleUrls: ['./blockchainPlatform.component.css']
})
export class blockchainPlatformComponent {

  constructor(private fb: FormBuilder, private httpClient: HttpClient, private routes: Router) {
  }

  showY1() {
    alert('You dont need a blockchain!');
    window.location.href = environment.gotoHome;
  }

  showN1() {
    document.getElementById('div3').style.display = 'block';
  }

  showY2() {
    document.getElementById('div6').style.display = 'block';
  }

  showY3() {
    document.getElementById('div4').style.display = 'block';
    document.getElementById('div6').style.display = 'none';
  }

  showY4() {
    document.getElementById('div2').style.display = 'block';
    document.getElementById('div5').style.display = 'none';
  }

  showN4() {
    document.getElementById('div5').style.display = 'block';
    document.getElementById('div2').style.display = 'none';
  }

  showN5() {
    document.getElementById('div6').style.display = 'block';
  }

  showN6() {
    document.getElementById('div7').style.display = 'block';
  }

  showY7() {
    alert('You might need a PUBLIC BLOCKCHAIN!');
    window.location.href = environment.gotoHome;
  }

  showN7() {
    alert('You might need a PERMISSIONED BLOCKCHAIN!');
    window.location.href = environment.gotoHome;
  }
}
