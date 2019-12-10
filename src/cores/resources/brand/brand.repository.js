import BaseRepository from '../base.repository'
import brandModel from './brand.model'
class BrandRepository extends BaseRepository {}
export default new BrandRepository(brandModel, null)
