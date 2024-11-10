import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacinasPage } from './vacinas.page';

describe('VacinasPage', () => {
  let component: VacinasPage;
  let fixture: ComponentFixture<VacinasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
