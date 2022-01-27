import { Test, TestingModule } from '@nestjs/testing';
import { Product1Controller } from './product1.controller';

describe('Product1Controller', () => {
  let controller: Product1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Product1Controller],
    }).compile();

    controller = module.get<Product1Controller>(Product1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
