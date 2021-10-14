import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityProductsComponent } from './opportunity-products.component';

describe('OpportunityProductsComponent', () => {
  let component: OpportunityProductsComponent;
  let fixture: ComponentFixture<OpportunityProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
