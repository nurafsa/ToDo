import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteTodoComponent } from './execute-todo.component';

describe('ExecuteTodoComponent', () => {
  let component: ExecuteTodoComponent;
  let fixture: ComponentFixture<ExecuteTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
