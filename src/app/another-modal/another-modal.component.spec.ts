import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherModalComponent } from './another-modal.component';

describe('AnotherModalComponent', () => {
  let component: AnotherModalComponent;
  let fixture: ComponentFixture<AnotherModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
