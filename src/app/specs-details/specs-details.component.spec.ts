import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsDetailsComponent } from './specs-details.component';

describe('SpecsDetailsComponent', () => {
  let component: SpecsDetailsComponent;
  let fixture: ComponentFixture<SpecsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
