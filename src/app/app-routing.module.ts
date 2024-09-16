import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './Components/Departments/department/department.component';
import { AccidentComponent } from './Components/Departments/accident/accident.component';
import { ArthroscopyComponent } from './Components/Procedures/arthroscopy/arthroscopy.component';
import { BariatricSurgeryComponent } from './Components/Departments/bariatric-surgery/bariatric-surgery.component';
import { BiochemistryComponent } from './Components/Departments/biochemistry/biochemistry.component';
import { CancerRehabilitationCentreComponent } from './Components/Departments/cancer-rehabilitation-centre/cancer-rehabilitation-centre.component';
import { InstitueComponent } from './Components/Institue/institue/institue.component';
import { InternationalpatientsComponent } from './Components/International Patients/internationalpatients/internationalpatients.component';
import { OnlinelabreportsComponent } from './Components/Online Lab Reports/onlinelabreports/onlinelabreports.component';
import { ProcedureComponent } from './Components/Procedures/procedure/procedure.component';
import { InstituteOfCardiacSciencesComponent } from './Components/Institue/institute-of-cardiac-sciences/institute-of-cardiac-sciences.component';
import { InstituteOfDentalScienceComponent } from './Components/Institue/institute-of-dental-science/institute-of-dental-science.component';
import { InstituteOfGastroenterologyHepatologyComponent } from './Components/Institue/institute-of-gastroenterology-hepatology/institute-of-gastroenterology-hepatology.component';
import { InstituteOfHeartLungTransplantationComponent } from './Components/Institue/institute-of-heart-lung-transplantation/institute-of-heart-lung-transplantation.component';
import { InstituteOfNeuroSciencesComponent } from './Components/Institue/institute-of-neuro-sciences/institute-of-neuro-sciences.component';
import { KeySpecialtiesComponent } from './Components/International Patients/key-specialties/key-specialties.component';
import { LocationsComponent } from './Components/International Patients/locations/locations.component';
import { PatientTestimonialsComponent } from './Components/International Patients/patient-testimonials/patient-testimonials.component';
import { SpecialtiesComponent } from './Components/International Patients/specialties/specialties.component';
import { TechnologyAndInnovationComponent } from './Components/International Patients/technology-and-innovation/technology-and-innovation.component';
import { AnantapurComponent } from './Components/Online Lab Reports/anantapur/anantapur.component';
import { KurnoolComponent } from './Components/Online Lab Reports/kurnool/kurnool.component';
import { NelloreComponent } from './Components/Online Lab Reports/nellore/nellore.component';
import { SecundrabadComponent } from './Components/Online Lab Reports/secundrabad/secundrabad.component';
import { AnteriorResectionComponent } from './Components/Procedures/anterior-resection/anterior-resection.component';
import { AorticAnuerysmComponent } from './Components/Procedures/aortic-anuerysm/aortic-anuerysm.component';
import { AorticStentGraftComponent } from './Components/Procedures/aortic-stent-graft/aortic-stent-graft.component';
import { BrainCancerComponent } from './Components/Procedures/brain-cancer/brain-cancer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  //EACH ROUTE OBJECT IS A COMBINATION OF PATH AND COMPONENT.
  //EACH OBJECT REPRESENTS ONE ROUTE.cd
  { path: '', component: HomeComponent }, //default component display  purpose we mentoned here
  {
    path: 'Deapartments',
    component: DepartmentComponent,
    children: [
      { path: 'accident', component: AccidentComponent },
      { path: 'arthoscopycenter', component: ArthroscopyComponent },
      { path: 'BariatricSurgery', component: BariatricSurgeryComponent },
      { path: 'Biochemistry', component: BiochemistryComponent },
      {
        path: 'CancerRehabilitationCentre',
        component: CancerRehabilitationCentreComponent,
      },
    ],
  },
  {
    path: 'Institue',
    component: InstitueComponent,
    children: [
      {
        path: 'InstituteOfCardiacSciences',
        component: InstituteOfCardiacSciencesComponent,
      },
      {
        path: 'InstituteOfDentalScience',
        component: InstituteOfDentalScienceComponent,
      },
      {
        path: 'InstituteOfGastroenterologyHepatology',
        component: InstituteOfGastroenterologyHepatologyComponent,
      },
      {
        path: 'InstituteOfHeartLungTransplantation',
        component: InstituteOfHeartLungTransplantationComponent,
      },
      {
        path: 'InstituteOfNeuroSciences',
        component: InstituteOfNeuroSciencesComponent,
      },
    ],
  },
  {
    path: 'InternationalPatients',
    component: InternationalpatientsComponent,
    children: [
      { path: 'KeySpecialties', component: KeySpecialtiesComponent },
      { path: 'Locations', component: LocationsComponent },
      { path: 'PatientTestimonials', component: PatientTestimonialsComponent },
      { path: 'Specialties', component: SpecialtiesComponent },
      {
        path: 'TechnologyAndInnovation',
        component: TechnologyAndInnovationComponent,
      },
    ],
  },
  {
    path: 'OnlineLabReports',
    component: OnlinelabreportsComponent,
    children: [
      { path: 'Anantapur', component: AnantapurComponent },
      { path: 'Kurnool', component: KurnoolComponent },
      { path: 'nellore', component: NelloreComponent },
      { path: 'Secundrabad', component: SecundrabadComponent },
      {
        path: 'Anantapur',
        component: AnantapurComponent,
      },
    ],
  },
  {
    path: 'Procedures',
    component: ProcedureComponent,
    children: [
      { path: 'AnteriorResection', component: AnteriorResectionComponent },
      { path: 'AorticAnuerysm', component: AorticAnuerysmComponent },
      { path: 'AorticStentGraft', component: AorticStentGraftComponent },
      { path: 'Arthroscopy', component: ArthroscopyComponent },
      {
        path: 'BrainCancer',
        component: BrainCancerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
