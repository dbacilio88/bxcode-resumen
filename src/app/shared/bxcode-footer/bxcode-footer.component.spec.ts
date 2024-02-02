import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxcodeFooterComponent } from './bxcode-footer.component';

describe('BxcodeFooterComponent', () => {
  let component: BxcodeFooterComponent;
  let fixture: ComponentFixture<BxcodeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxcodeFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxcodeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
