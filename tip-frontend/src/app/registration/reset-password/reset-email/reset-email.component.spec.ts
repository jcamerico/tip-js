import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetEmailComponent } from './reset-email.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ResetEmailComponent', () => {
  let component: ResetEmailComponent;
  let fixture: ComponentFixture<ResetEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetEmailComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ResetEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
