import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientRegistrationComponent} from './patient-registration/patient-registration.component';
import {HomeComponent} from './home/home.component';
import {isWildcardReexportStatement} from '@angular/compiler-cli/ngcc/src/host/commonjs_umd_utils';
import {ShowPatientsComponent} from './show-patients/show-patients.component';
import {PatientDashboardComponent} from './patient-dashboard/patient-dashboard.component';
import {PatientLoginComponent} from './patient-login/patient-login.component';
import {DoctorLoginComponent} from './doctor-login/doctor-login.component';
import {DoctorDashboardComponent} from './doctor-dashboard/doctor-dashboard.component';

const routes: Routes = [
  {path: '' , redirectTo: '//home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'patient-registration', component: PatientRegistrationComponent},
  {path: 'show-patients', component: ShowPatientsComponent},
  {path: 'patient-dashboard', component: PatientDashboardComponent},
  {path: 'patient-login', component: PatientLoginComponent},
  {path: 'doctor-login', component: DoctorLoginComponent},
  {path: 'doctor-dashboard', component: DoctorDashboardComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routingComponent = [PatientRegistrationComponent, HomeComponent, ShowPatientsComponent, PatientDashboardComponent, DoctorLoginComponent, DoctorDashboardComponent];
