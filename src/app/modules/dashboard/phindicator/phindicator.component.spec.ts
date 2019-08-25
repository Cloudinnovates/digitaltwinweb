import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PHIndicatorComponent } from './phindicator.component';

describe('PHIndicatorComponent', () => {
  let component: PHIndicatorComponent;
  let fixture: ComponentFixture<PHIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PHIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PHIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
