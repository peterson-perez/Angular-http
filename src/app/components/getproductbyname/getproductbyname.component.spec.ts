import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetproductbynameComponent } from './getproductbyname.component';

describe('GetproductbynameComponent', () => {
  let component: GetproductbynameComponent;
  let fixture: ComponentFixture<GetproductbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetproductbynameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetproductbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
