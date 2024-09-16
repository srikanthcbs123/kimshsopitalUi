import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthroscopyCentreComponent } from './arthroscopy-centre.component';

describe('ArthroscopyCentreComponent', () => {
  let component: ArthroscopyCentreComponent;
  let fixture: ComponentFixture<ArthroscopyCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArthroscopyCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthroscopyCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
