import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallproductsComponent } from './listallproducts.component';

describe('ListallproductsComponent', () => {
  let component: ListallproductsComponent;
  let fixture: ComponentFixture<ListallproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListallproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
