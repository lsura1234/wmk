import yearModel from './year.model'
import studentDataModel from '../studentData/studentData.model'

yearModel.hasMany(studentDataModel,{
    as:{ plural: 'studentData', singular: 'studentData' },
    foreignKey:'yearId'
})
