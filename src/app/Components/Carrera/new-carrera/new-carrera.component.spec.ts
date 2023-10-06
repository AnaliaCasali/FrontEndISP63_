import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarreraComponent } from './new-carrera.component';

describe('NewCarreraComponent', () => {
  let component: NewCarreraComponent;
  let fixture: ComponentFixture<NewCarreraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCarreraComponent]
    });
    fixture = TestBed.createComponent(NewCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
