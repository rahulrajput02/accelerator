import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  q1;
  q2;
  q3;
  q4;
  q5;
  submit;

  display = 'none';

  constructor() { }

  openModal() {
    this.display = 'block';
  }

  onCloseHandled() {
    this.display = 'none';
  }

  showY1(div) {
    document.getElementById(div).style.display = 'block';
  }

  showN1() {
    alert('You should not be using a blockchain!');
    window.location.href = environment.gotoHome;
  }

  showN2() {
    alert('You should be using a centralized database!');
    window.location.href = environment.gotoHome;
  }

  showN3() {
    alert('You should utilize multiple copies of centralized databases!');
    window.location.href = environment.gotoHome;
  }

  showN4() {
    alert('Use a third party or intermediary!');
    window.location.href = environment.gotoHome;
  }

  showY5() {
    alert('You should be using a blockchain!');
    window.location.href = environment.gotoHome;
  }

  showN5() {
    alert('Use a master/slave database!');
    window.location.href = environment.gotoHome;
  }

  nextStep() {
    const usecase = document.getElementById('usecase').value;

    if (usecase) {
      this.q1 = true;
    }
  }

  nextStep2() {
    const platform = document.getElementById('platform').value;

    if (platform == 'hyp') {
      this.q2 = true;
    } else {
      this.q3 = true;
    }
  }

  nextStep3() {
    const language = document.getElementById('language').value;
    if (language) {
      this.q4 = true;
    }
  }

  nextStep4() {
    this.q5 = true;
  }

  submit() {
    alert("Thankyou!");
    window.location.href =  environment.gotoHome;
  }
}
