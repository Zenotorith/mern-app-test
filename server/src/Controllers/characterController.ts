import { Request, Response } from 'express'
import Character from '../Models/Character'

class characterController {

    public async characterGet(req: Request, res: Response) {
        try {

            const characters = await Character.find({})
            res.status(200).json(characters)

        } catch (error) {
            res.status(500)
        }
    }

    public async characterGetDetail(req: Request, res: Response) {
        try {

            const { id } = req.params
            const character = await Character.findById(id)
            res.status(200).json(character)

        } catch (error) {
            res.status(500)
        }
    }

    public async characterPost(req: Request, res: Response) {
        try {

            const character = await Character.create(req.body)
            res.status(200).json(character)

        } catch (error) {
            res.status(500)
        }
    }

    public async characterUpdate(req: Request, res: Response) {
        try {

            const { id } = req.params
            const character = await Character.findByIdAndUpdate(id, req.body)

            if (!character) {
                return res.status(404).json({
                    message: `cannot find any with ID ${id}`
                })
            }
            const updateCharacter = await Character.findById(id)
            res.status(200).json(updateCharacter)

        } catch (error) {
            res.status(500)
        }
    }

    public async characterDelete(req: Request, res: Response) {
        try {

            const { id } = req.params
            const character = await Character.findByIdAndDelete(id)
            if (!character) {
                return res.status(404).json({
                    message: `cannot find any with ID ${id}`
                })
            }
            res.status(200).json(character)

        } catch (error) {
            res.status(500)
        }
    }
}

export default new characterController