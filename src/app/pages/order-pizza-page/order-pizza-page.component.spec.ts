import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPizzaPageComponent } from './order-pizza-page.component';

describe('OrderPizzaPageComponent', () => {
  let component: OrderPizzaPageComponent;
  let fixture: ComponentFixture<OrderPizzaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPizzaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPizzaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
