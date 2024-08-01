import { Module } from "@nestjs/common";
import { JokesController } from "./controllers/jokes/jokes.controller";
import { JokesService } from "./services/jokes/jokes.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Joke } from "src/typeorm/entities/Joke";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [TypeOrmModule.forFeature([Joke]), HttpModule],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
