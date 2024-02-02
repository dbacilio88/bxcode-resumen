import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bxcode404Component } from './bxcode-404.component';

describe('Bxcode404Component', () => {
  let component: Bxcode404Component;
  let fixture: ComponentFixture<Bxcode404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bxcode404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bxcode404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
