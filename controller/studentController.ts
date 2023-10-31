import { Request, Response } from "express";
import { statuscode } from "../utils/statuscode";
import { client, db } from "../utils/dbconfig";
import { studentModel } from "../model/studentModel";

export const createData = async (req: Request, res: Response) => {
  try {
    await client.connect();

    const { name, course, score } = req.body;

    const student = new studentModel(name, course, score);

    await db.insertOne(student);

    res.status(statuscode.OK).json({
      message: "created",
      data: student,
    });
  } catch (error) {
    res.status(statuscode.BAD_REQUEST).json({
      message: "failed to create data",
    });
  }
};
