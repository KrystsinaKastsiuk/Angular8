import { TestBed } from '@angular/core/testing';
import { OrderComponent } from './order.component';
import { OrderService } from '../../../../orders/services/order.service';
import { Order } from '../../../../orders/models/order.model';

const orderServiceStub = {
  getOrders: () => [
    new Order(new Date('2019-11-01'), 'Krystsina', 'Kastsiuk', 'krystsina.kastsiuk@epam.com', [80296358333, 80296221444], false,  '', 5, 2)
  ]
};

describe('OrderComponent', () => {
  let component: OrderComponent;
  let orderService: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderComponent,
        { provide: OrderService, useValue: orderServiceStub }
      ]
    });
    component = TestBed.get(OrderComponent);
    orderService = TestBed.get(OrderService);
  });

  it('should not have orders after construction', () => {
    expect(component.orders).toBeUndefined();
  });

  it('should have orders after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.orders).toEqual(orderServiceStub.getOrders());
  });
});
