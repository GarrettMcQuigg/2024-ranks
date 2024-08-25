import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QbRanksComponent } from './qb-ranks.component';

describe('QbRanksComponent', () => {
  let component: QbRanksComponent;
  let fixture: ComponentFixture<QbRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QbRanksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QbRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
