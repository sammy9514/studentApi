import { ObjectId } from "mongodb";

export class studentModel {
  _Id: ObjectId;
  name: string;
  course: string;
  score: number;

  constructor(name: string, course: string, score: number) {
    this.name = name;
    this.course = course;
    this.score = score;
  }
}
