import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbRanksComponent } from './rb-ranks.component';

describe('RbRanksComponent', () => {
  let component: RbRanksComponent;
  let fixture: ComponentFixture<RbRanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RbRanksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RbRanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
