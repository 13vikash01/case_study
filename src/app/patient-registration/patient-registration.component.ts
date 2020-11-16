import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient';
import {PatientRegistrationService} from '../patient-registration.service';
import {PatientLoginData} from '../patientLoginData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

 public patient = new Patient(  '', '', '', '', '', '', '', '', +91, '');
  public patientLoginData = new PatientLoginData('', '');
 message: any;
  constructor(private service: PatientRegistrationService , private router: Router) {}

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public registerPatient(value: any) {
    const response = this.service.doRegistration(this.patient);
    response.subscribe(data => this.message = data);
    console.log(value);
  }
  // tslint:disable-next-line:typedef
  public loginPatient(value: any){
    const res = this.service.login(this.patientLoginData);
    res.subscribe(data => this.message = data,
      error => console.log('Exception occoured'));
    res.subscribe(data => this.service.setLoggedId(data));
  }

}
