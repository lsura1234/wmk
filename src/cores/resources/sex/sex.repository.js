import BaseRepository from '../base.repository'
import sexModel from './sex.model'
class SexRepository extends BaseRepository {}
export default new SexRepository(sexModel, null)
