import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddSubsComponent } from './dialog-add-subs.component';

describe('DialogAddSubsComponent', () => {
  let component: DialogAddSubsComponent;
  let fixture: ComponentFixture<DialogAddSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddSubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
