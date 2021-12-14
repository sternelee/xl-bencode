import { wrap } from 'comlink'
import WebWorker from 'web-worker:./Worker.ts';
import { CODE_TYPE } from './Worker'


async function decode(buf: ArrayBuffer, codeType: CODE_TYPE = '40'): Promise<string> {
  const Worker = new WebWorker()
  const decodeWrap: any = wrap(Worker)
  let result = await decodeWrap.decode(buf, codeType)
  return `magnet:?xt=urn:btih:${result}`
}

export default decode
