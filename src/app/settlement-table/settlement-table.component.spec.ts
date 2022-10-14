import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementTableComponent } from './settlement-table.component';

describe('SettlementTableComponent', () => {
  let component: SettlementTableComponent;
  let fixture: ComponentFixture<SettlementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
