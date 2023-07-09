import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './models/cat.schema';

@Injectable()
export class DatabaseService {
  @InjectModel(Cat.name)
  catModel: Model<CatDocument>;
}
