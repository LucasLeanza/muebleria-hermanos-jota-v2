import mongoose from 'mongoose'

export function ensureValidId(res, id){
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).json({error: 'ID Inválido'})
    return false
  }

  return true
}