import { load } from '@spksoft/koa-decorator'
import path from 'path'
const loader = () => {
  load(path.resolve('src/cores', 'resources'), '.scope.js')
  load(path.resolve('src/cores', 'resources'), '.associate.js')
  load(path.resolve('src/cores', 'resources'), 'model')

}
export default loader
