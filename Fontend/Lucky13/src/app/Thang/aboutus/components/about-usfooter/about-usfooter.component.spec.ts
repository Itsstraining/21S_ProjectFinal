import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsfooterComponent } from './about-usfooter.component';

describe('AboutUsfooterComponent', () => {
  let component: AboutUsfooterComponent;
  let fixture: ComponentFixture<AboutUsfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
