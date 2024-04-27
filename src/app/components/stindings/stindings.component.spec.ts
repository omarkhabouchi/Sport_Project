import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StindingsComponent } from './stindings.component';

describe('StindingsComponent', () => {
  let component: StindingsComponent;
  let fixture: ComponentFixture<StindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
