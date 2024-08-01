import { HttpService } from "@nestjs/axios";
import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { firstValueFrom } from "rxjs";
import { CreateJokeDto } from "src/jokes/dtos/CreateUser.dto";
import { CreateJokeParams } from "src/jokes/utils/types";
import { Joke } from "src/typeorm/entities/Joke";
import { Repository } from "typeorm";

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(Joke)
    private jokeRepository: Repository<Joke>,
    private readonly httpService: HttpService,
  ) {}

  async getJokeTypes() {
    try {
      const jokeTypeData = await firstValueFrom(
        this.httpService.get("http://localhost:3002/api/joke-types"),
      );
      console.log("jokeTypeData", jokeTypeData?.data);
      return jokeTypeData?.data;
    } catch (error) {
      console.error("Error fetching joke types:", error);
      throw new HttpException(
        "Failed to fetch joke types",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getRandomJoke() {
    console.log("getRandomJoke");
    try {
      const jokes = await this.jokeRepository.find();
      console.log("jokes in getRandomJoke", jokes);
      if (jokes.length === 0) {
        throw new HttpException("No jokes found", HttpStatus.NOT_FOUND);
      }
      const randomIndex = Math.floor(Math.random() * jokes.length);
      return jokes[randomIndex];
    } catch (error) {
      console.error("Error fetching random joke:", error);
      throw new HttpException(
        "Failed to fetch random joke",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  createJoke(jokeDetails: CreateJokeParams) {
    const newJoke = this.jokeRepository.create({
      ...jokeDetails,
    });
    return this.jokeRepository.save(newJoke);
  }
}
