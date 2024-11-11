import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDepotComponent } from './check-depot.component';

describe('CheckDepotComponent', () => {
  let component: CheckDepotComponent;
  let fixture: ComponentFixture<CheckDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckDepotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
