import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcarduserComponent } from './showcarduser.component';

describe('ShowcarduserComponent', () => {
  let component: ShowcarduserComponent;
  let fixture: ComponentFixture<ShowcarduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcarduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcarduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
