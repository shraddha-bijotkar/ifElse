import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceGraphsComponent } from './performance-graphs.component';

describe('PerformanceGraphsComponent', () => {
  let component: PerformanceGraphsComponent;
  let fixture: ComponentFixture<PerformanceGraphsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceGraphsComponent]
    });
    fixture = TestBed.createComponent(PerformanceGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
