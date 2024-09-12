import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: any): Promise<any[]> {
    const { name, float, price, category, orderBy, order } = query;


    const where = {
      ...(name && { name: { contains: name } }),
      ...(price && {
        price: {
          gte: parseInt(price.split('-')[0]),
          lte: parseInt(price.split('-')[1])
        }
      }),
      ...(category && { category }),
    };


    if (float) {
      const [minFloat, maxFloat] = float.split('-').map((value) => parseFloat(value).toFixed(2)); // Formata os floats como strings com 2 casas decimais
      where['float'] = {
        gte: minFloat,
        lte: maxFloat,
      };
    }


    let orderByParsed;
    try {
      orderByParsed = orderBy ? JSON.parse(orderBy) : undefined;
    } catch (error) {
      console.error('Error parsing orderBy:', error);
      orderByParsed = orderBy ? { [orderBy]: order } : undefined;
    }


    return this.prisma.item.findMany({
      where: where,
      orderBy: orderByParsed,
    });
  }
}
  
