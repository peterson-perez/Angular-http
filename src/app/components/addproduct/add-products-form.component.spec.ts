import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsComponent } from './add-products-form.component';

describe('AddproductComponent', () => {
  let component: AddProductsComponent;
  let fixture: ComponentFixture<AddProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
