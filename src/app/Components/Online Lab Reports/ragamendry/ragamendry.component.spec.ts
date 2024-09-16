import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagamendryComponent } from './ragamendry.component';

describe('RagamendryComponent', () => {
  let component: RagamendryComponent;
  let fixture: ComponentFixture<RagamendryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagamendryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RagamendryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
