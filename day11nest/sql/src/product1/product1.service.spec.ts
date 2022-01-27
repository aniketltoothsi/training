import { Test, TestingModule } from '@nestjs/testing';
import { Product1Service } from './product1.service';

describe('Product1Service', () => {
  let service: Product1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Product1Service],
    }).compile();

    service = module.get<Product1Service>(Product1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
