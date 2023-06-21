import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Movie, MovieSchema } from './schemas/movie.schema';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
})
export class MoviesModule {}
