import studentHistoryModel from './studentData.model'
import BaseRepository from '../base.repository'
class StudentHistoryRepository extends BaseRepository {}
export default new StudentHistoryRepository(studentHistoryModel, null)
