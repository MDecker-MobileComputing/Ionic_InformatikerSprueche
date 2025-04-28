import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Seite3Page } from './seite3.page';

describe('Seite3Page', () => {
  let component: Seite3Page;
  let fixture: ComponentFixture<Seite3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Seite3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
