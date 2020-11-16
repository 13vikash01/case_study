import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PatientRegistrationService} from '../patient-registration.service';
import {reduce} from 'rxjs/operators';

@Component({
  selector: 'app-show-patients',
  templateUrl: './show-patients.component.html',
  styleUrls: ['./show-patients.component.css']
})
export class ShowPatientsComponent implements OnInit {
  patients: any = [];
  constructor( private http: HttpClient, private service: PatientRegistrationService) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    const response = this.http.get('http://localhost:8080/getAllPatients');
    response.subscribe(data => this.patients = data);
  }

  // tslint:disable-next-line:typedef
  public removePatient(id: number){
    const resp = this.service.deletePatient(id);
    resp.subscribe(resdata => this.patients = resdata);
  }

}
