import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrRanksComponent } from './wr-ranks.component';

describe('WrRanksComponent', () => {
  let component: WrRanksComponent;
  let fixture: ComponentFixture<WrRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrRanksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
