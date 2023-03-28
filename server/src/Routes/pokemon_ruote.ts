import { Router } from 'express'
import characterController from '../Controllers/characterController'

const router = Router()

router.get('/', characterController.characterGet)
router.get('/:id', characterController.characterGetDetail)
router.post('/', characterController.characterPost)
router.put('/:id', characterController.characterUpdate)
router.delete('/:id', characterController.characterDelete)

export default router