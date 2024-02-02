import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxcodeAboutComponent } from './bxcode-about.component';

describe('BxcodeAboutComponent', () => {
  let component: BxcodeAboutComponent;
  let fixture: ComponentFixture<BxcodeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxcodeAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxcodeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
