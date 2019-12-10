import studentHistoryModel from './studentData.model'
import studentDataModel from '../studentData/studentData.model'

studentHistoryModel.belongsTo(studentDataModel,{
    as:'studentData',
    foreignKey:'studentDataId'
})
