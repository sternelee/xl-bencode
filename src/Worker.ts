import { expose } from 'comlink'
import Bencode from './bencode.js' // from : https://cdn.skypack.dev/bencode
import cryptoJs from 'crypto-js'

export type CODE_TYPE = '32' | '40'

function decode (buf: ArrayBuffer, codeType: CODE_TYPE = '40') {
    const buffer = new Uint8Array(buf);
		const { info } = Bencode.decode(buffer);
		const encodeInfo = Bencode.encode(info);
		const wordArray = cryptoJs.lib.WordArray.create(encodeInfo);
		let hash = cryptoJs.SHA1(wordArray).toString(cryptoJs.enc.Hex);
    if (codeType === '32') {
      // TODO： 转成32位
      // 40位是十六进制字符串, 32位时base32字符串
    }
    return hash
}

expose({
  decode
})
