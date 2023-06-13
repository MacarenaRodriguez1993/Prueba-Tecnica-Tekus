import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddSubsComponent } from './form-add-subs.component';

describe('FormAddSubsComponent', () => {
  let component: FormAddSubsComponent;
  let fixture: ComponentFixture<FormAddSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddSubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
