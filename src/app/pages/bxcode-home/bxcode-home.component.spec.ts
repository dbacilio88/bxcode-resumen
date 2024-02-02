import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxcodeHomeComponent } from './bxcode-home.component';

describe('BxcodeHomeComponent', () => {
  let component: BxcodeHomeComponent;
  let fixture: ComponentFixture<BxcodeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxcodeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxcodeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
