import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualQuestionTimeComponent } from './individual-question-time.component';

describe('IndividualQuestionTimeComponent', () => {
  let component: IndividualQuestionTimeComponent;
  let fixture: ComponentFixture<IndividualQuestionTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualQuestionTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualQuestionTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
