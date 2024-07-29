import { ZodSchema } from "zod/lib"
import { CreateSubmissionDto } from "../dtos/createSubmissionDto"
import { NextFunction } from "express"

export const validateCreateSubmissionDTO = (schema: ZodSchema<CreateSubmissionDto>) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            ...req.body
        })
    } catch (error) {
        
    }
}