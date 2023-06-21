import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesModule } from './movies/movies.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MoviesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-movies'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
