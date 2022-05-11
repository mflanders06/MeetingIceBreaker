import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeTriviaComponent } from './joke-trivia.component';

describe('JokeTriviaComponent', () => {
  let component: JokeTriviaComponent;
  let fixture: ComponentFixture<JokeTriviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeTriviaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
