import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDisplayableComponent } from './password-displayable.component';

describe('PasswordDisplayableComponent', () => {
  let component: PasswordDisplayableComponent;
  let fixture: ComponentFixture<PasswordDisplayableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordDisplayableComponent]
    });
    fixture = TestBed.createComponent(PasswordDisplayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
