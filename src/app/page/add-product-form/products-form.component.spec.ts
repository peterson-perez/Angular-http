import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFormComponent } from './products-form.component';

describe('AddProductFormComponent', () => {
  let component: ProductsFormComponent;
  let fixture: ComponentFixture<ProductsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
