import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Joke {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  type: string;
}
