import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Seite4Page } from './seite4.page';

describe('Seite4Page', () => {
  let component: Seite4Page;
  let fixture: ComponentFixture<Seite4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Seite4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
