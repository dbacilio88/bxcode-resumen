import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxcodeItemComponent } from './bxcode-item.component';

describe('BxcodeItemComponent', () => {
  let component: BxcodeItemComponent;
  let fixture: ComponentFixture<BxcodeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxcodeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxcodeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
