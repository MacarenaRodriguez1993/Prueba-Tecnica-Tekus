import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateSubsComponent } from './dialog-update-subs.component';

describe('DialogUpdateSubsComponent', () => {
  let component: DialogUpdateSubsComponent;
  let fixture: ComponentFixture<DialogUpdateSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateSubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
