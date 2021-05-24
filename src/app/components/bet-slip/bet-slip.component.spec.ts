import { isDefined } from '@angular/compiler/src/util';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSlipComponent } from './bet-slip.component';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetSlipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // check result

  it('check result', () => {
    expect(component.result).toEqual(0);
  });

  // check bet

  it('check bet', () => {
    expect(component.bet).toEqual(0);
  });


  
});
