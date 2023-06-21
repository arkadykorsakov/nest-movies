import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Movie } from './schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Promise<Movie[]> {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Movie> {
    return this.moviesService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDtoMovie: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(createDtoMovie);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() UpdateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    return this.moviesService.update(id, UpdateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Movie> {
    return this.moviesService.remove(id);
  }
}
