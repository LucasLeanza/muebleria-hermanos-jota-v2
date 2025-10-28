import mongoose from 'mongoose'

export function handleMongooseError(res, error) {
  if (error instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({error: error.message})
  }
  if (error instanceof mongoose.Error.CastError){
    return res.status(400).json({error: 'ID Inválido'})
  }

  return res.status(500).json({error: 'Server Error'})
}