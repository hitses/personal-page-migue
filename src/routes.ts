import { Router } from 'express'
import { check } from 'express-validator'
import { contact } from './controllers'
import { fieldValidation } from './fieldValidation'

const router = Router()

router.post(
  '/contact',
  [
    check('name', 'Name required').not().isEmpty(),
    check('email', 'Email required').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('subject', 'Subject required').not().isEmpty(),
    check('message', 'Message required').not().isEmpty(),
    fieldValidation
  ],
  contact
)

export default router
