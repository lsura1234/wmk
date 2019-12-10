import brandModel from './brand.model'
import studentDataModel from '../studentData/studentData.model'

brandModel.hasMany(studentDataModel,{
    as:{ plural: 'studentData', singular: 'studentData' },
    foreignKey:'brandId'
})
