import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccidentComponent } from './Components/Departments/accident/accident.component';
import { ArthroscopyCentreComponent } from './Components/Departments/arthroscopy-centre/arthroscopy-centre.component';
import { BariatricSurgeryComponent } from './Components/Departments/bariatric-surgery/bariatric-surgery.component';
import { BiochemistryComponent } from './Components/Departments/biochemistry/biochemistry.component';
import { CancerRehabilitationCentreComponent } from './Components/Departments/cancer-rehabilitation-centre/cancer-rehabilitation-centre.component';
import { InstituteOfCardiacSciencesComponent } from './Components/Institue/institute-of-cardiac-sciences/institute-of-cardiac-sciences.component';
import { InstituteOfDentalScienceComponent } from './Components/Institue/institute-of-dental-science/institute-of-dental-science.component';
import { InstituteOfGastroenterologyHepatologyComponent } from './Components/Institue/institute-of-gastroenterology-hepatology/institute-of-gastroenterology-hepatology.component';
import { InstituteOfHeartLungTransplantationComponent } from './Components/Institue/institute-of-heart-lung-transplantation/institute-of-heart-lung-transplantation.component';
import { InstituteOfNeuroSciencesComponent } from './Components/Institue/institute-of-neuro-sciences/institute-of-neuro-sciences.component';
import { AnteriorResectionComponent } from './Components/Procedures/anterior-resection/anterior-resection.component';
import { AorticAnuerysmComponent } from './Components/Procedures/aortic-anuerysm/aortic-anuerysm.component';
import { AorticStentGraftComponent } from './Components/Procedures/aortic-stent-graft/aortic-stent-graft.component';
import { ArthroscopyComponent } from './Components/Procedures/arthroscopy/arthroscopy.component';
import { BrainCancerComponent } from './Components/Procedures/brain-cancer/brain-cancer.component';
import { LocationsComponent } from './Components/International Patients/locations/locations.component';
import { SpecialtiesComponent } from './Components/International Patients/specialties/specialties.component';
import { KeySpecialtiesComponent } from './Components/International Patients/key-specialties/key-specialties.component';
import { PatientTestimonialsComponent } from './Components/International Patients/patient-testimonials/patient-testimonials.component';
import { TechnologyAndInnovationComponent } from './Components/International Patients/technology-and-innovation/technology-and-innovation.component';
import { SecundrabadComponent } from './Components/Online Lab Reports/secundrabad/secundrabad.component';
import { RagamendryComponent } from './Components/Online Lab Reports/ragamendry/ragamendry.component';
import { NelloreComponent } from './Components/Online Lab Reports/nellore/nellore.component';
import { KurnoolComponent } from './Components/Online Lab Reports/kurnool/kurnool.component';
import { AnantapurComponent } from './Components/Online Lab Reports/anantapur/anantapur.component';
import { DepartmentComponent } from './Components/Departments/department/department.component';
import { InstitueComponent } from './Components/Institue/institue/institue.component';
import { ProcedureComponent } from './Components/Procedures/procedure/procedure.component';
import { InternationalpatientsComponent } from './Components/International Patients/internationalpatients/internationalpatients.component';
import { OnlinelabreportsComponent } from './Components/Online Lab Reports/onlinelabreports/onlinelabreports.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccidentComponent,
    ArthroscopyCentreComponent,
    BariatricSurgeryComponent,
    BiochemistryComponent,
    CancerRehabilitationCentreComponent,
    InstituteOfCardiacSciencesComponent,
    InstituteOfDentalScienceComponent,
    InstituteOfGastroenterologyHepatologyComponent,
    InstituteOfHeartLungTransplantationComponent,
    InstituteOfNeuroSciencesComponent,
    AnteriorResectionComponent,
    AorticAnuerysmComponent,
    AorticStentGraftComponent,
    ArthroscopyComponent,
    BrainCancerComponent,
    LocationsComponent,
    SpecialtiesComponent,
    KeySpecialtiesComponent,
    PatientTestimonialsComponent,
    TechnologyAndInnovationComponent,
    SecundrabadComponent,
    RagamendryComponent,
    NelloreComponent,
    KurnoolComponent,
    AnantapurComponent,
    DepartmentComponent,
    InstitueComponent,
    ProcedureComponent,
    InternationalpatientsComponent,
    OnlinelabreportsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
