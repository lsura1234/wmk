import sexModel from './sex.model'
import studentDataModel from '../studentData/studentData.model'

sexModel.hasMany(studentDataModel,{
    as:{ plural: 'studentData', singular: 'studentData' },
    foreignKey:'sexId'
})
