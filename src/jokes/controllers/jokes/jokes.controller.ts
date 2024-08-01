import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateJokeDto } from "src/jokes/dtos/CreateUser.dto";
import { JokesService } from "src/jokes/services/jokes/jokes.service";

@Controller("jokes")
export class JokesController {
  constructor(private jokeService: JokesService) {}

  @Get("random-joke")
  getJoke() {
    return this.jokeService.getRandomJoke();
  }

  @Get("joke-types")
  async getJokeTypes() {
    const jokeTypes = await this.jokeService.getJokeTypes();
    console.log(jokeTypes);
    return jokeTypes;
  }

  @Post()
  createJoke(@Body() createJokeDto: CreateJokeDto) {
    this.jokeService.createJoke(createJokeDto);
  }
}
