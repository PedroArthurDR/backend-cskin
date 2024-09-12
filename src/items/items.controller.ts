import { Controller, Get, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '@prisma/client';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(@Query() query: any): Promise<Item[]> {
    return this.itemsService.findAll(query);
  }
}