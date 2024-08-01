import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Joke } from "./typeorm/entities/Joke";
import { JokesModule } from "./jokes/jokes.module";
import * as dotenv from "dotenv";

dotenv.config();
console.log(process.env.DB_USERNAME);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as "mssql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Joke],
      synchronize: true,
      options: {
        encrypt: true,
        trustServerCertificate: false,
      },
    }),
    JokesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
