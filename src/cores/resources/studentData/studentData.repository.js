import studentDataModel from './studentData.model'
import BaseRepository from '../base.repository'
class StudentDataRepository extends BaseRepository {}
export default new StudentDataRepository(studentDataModel, null)
