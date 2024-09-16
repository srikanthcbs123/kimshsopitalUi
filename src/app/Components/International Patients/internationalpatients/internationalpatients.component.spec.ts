import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalpatientsComponent } from './internationalpatients.component';

describe('InternationalpatientsComponent', () => {
  let component: InternationalpatientsComponent;
  let fixture: ComponentFixture<InternationalpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalpatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
