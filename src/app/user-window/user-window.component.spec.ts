import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWindowComponent } from './user-window.component';

describe('UserWindowComponent', () => {
  let component: UserWindowComponent;
  let fixture: ComponentFixture<UserWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserWindowComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
