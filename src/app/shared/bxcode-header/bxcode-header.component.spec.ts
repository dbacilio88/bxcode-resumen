import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxcodeHeaderComponent } from './bxcode-header.component';

describe('BxcodeHeaderComponent', () => {
  let component: BxcodeHeaderComponent;
  let fixture: ComponentFixture<BxcodeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxcodeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxcodeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
