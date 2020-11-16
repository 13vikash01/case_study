import { Component, OnInit } from '@angular/core';
import {PatientRegistrationService} from '../patient-registration.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  public isfalse = false ;
  id: any;
  message: any ;
  public updatedDetails: any ;

  constructor(private service: PatientRegistrationService) { }
  ngOnInit(): void {
    // this.service.getLoggedId.subscribe(data => this.updatedDetails = data) ;
    this.service.getLoggedId.subscribe(loginId => this.id = loginId );
  }
  // tslint:disable-next-line:typedef
  public updateDetailsPatient(){
    const response = this.service.updatePatient(this.updatedDetails);
    response.subscribe(data => this.message = data);
  }
  // tslint:disable-next-line:typedef
  editProfileClicked(){
    const res = this.service.getPatient(this.id);
    res.subscribe(dataobj => this.updatedDetails = dataobj);
    this.isfalse = true ;
  }

}
