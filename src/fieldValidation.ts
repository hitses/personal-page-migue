import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const fieldValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      data: { ok: false, errors: errors.mapped() }
    })
  }

  next()
}
