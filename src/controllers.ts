import { Request, Response } from 'express'
import { contact as logicContact } from './logic'

export const contact = async (req: Request, res: Response) => {
  const { status, data } = await logicContact(req.body)
  return res.status(status).send(data)
}
