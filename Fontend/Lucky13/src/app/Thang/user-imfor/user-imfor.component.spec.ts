import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImforComponent } from './user-imfor.component';

describe('UserImforComponent', () => {
  let component: UserImforComponent;
  let fixture: ComponentFixture<UserImforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserImforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
