import adminModel from './admin.model'
import BaseRepository from '../base.repository'
class AdminRepository extends BaseRepository {}
export default new AdminRepository(adminModel, null)
