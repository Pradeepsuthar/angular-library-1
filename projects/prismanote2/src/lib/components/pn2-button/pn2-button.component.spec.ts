import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pn2ButtonComponent } from './pn2-button.component';

describe('Pn2ButtonComponent', () => {
  let component: Pn2ButtonComponent;
  let fixture: ComponentFixture<Pn2ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pn2ButtonComponent]
    });
    fixture = TestBed.createComponent(Pn2ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
