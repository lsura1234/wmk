import studentDataModel from './studentData.model'
import studentHistoryModel from '../studentHistory/studentData.model'

studentDataModel.addScope('studentData_studentHistory', {
    include: [
      {
        as: 'studentHistory',
        model: studentHistoryModel,
        require: true,
      },
    ],
  })
