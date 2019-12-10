import studentDataModel from'./studentData.model'
import brandModel from '../brand/brand.model'
import yearModel from '../year/year.model'
import sexModel from '../sex/sex.model'
import studentHistoryModel from '../studentHistory/studentData.model'

studentDataModel.belongsTo(brandModel,{
    as:'brand',
    foreignKey:'brandId'
})
studentDataModel.belongsTo(yearModel,{
    as:'year',
    foreignKey:'yearId'
})
studentDataModel.belongsTo(sexModel,{
    as:'sex',
    foreignKey:'sexId'
})
studentDataModel.hasMany(studentHistoryModel,{
    as:{ plural: 'studentHistory', singular: 'studentHistory' },
    foreignKey:'studentDataId'
})
