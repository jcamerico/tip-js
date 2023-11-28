import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDisplayableComponent } from './password-displayable.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PasswordDisplayableComponent', () => {
  let component: PasswordDisplayableComponent;
  let fixture: ComponentFixture<PasswordDisplayableComponent>;
  const name = "password"
  const formGroup = new FormGroup({
    password: new FormControl('', []),
  });
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordDisplayableComponent],
      imports: [TranslateModule.forRoot(), FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(PasswordDisplayableComponent);
    component = fixture.componentInstance;
    component.formGroup = formGroup
    component.name = "password";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
