import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfItemComponent } from './prof-item.component';

describe('ProfItemComponent', () => {
  let component: ProfItemComponent;
  let fixture: ComponentFixture<ProfItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
