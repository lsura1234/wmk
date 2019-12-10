import yearModel from './year.model'
import BaseRepository from '../base.repository'
class YearRepository extends BaseRepository {}
export default new YearRepository(yearModel, null)
