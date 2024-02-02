import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxcodeSearchComponent } from './bxcode-search.component';

describe('BxcodeSearchComponent', () => {
  let component: BxcodeSearchComponent;
  let fixture: ComponentFixture<BxcodeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxcodeSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxcodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
