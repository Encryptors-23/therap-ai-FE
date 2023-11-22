import * as CryptoJS from 'crypto-js'
import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private secretKey: string = 'vl/VxRuThkD+v+9S7twDR/eT9v+mye2EvaF4ojeRhTM='

  constructor() {
  }

  async encryptQuestion(topic: string): Promise<string> {
    const encrypted: CryptoJS.lib.CipherParams = CryptoJS.AES.encrypt(topic, this.secretKey, { iv: CryptoJS.enc.Utf8.parse('PynS/ydkhb2EUMzVty9sww==') })
    return encrypted.toString()
  }

  decryptAnswer(hash: string): string {
    const decrypted: CryptoJS.lib.WordArray = CryptoJS.AES.decrypt(hash, this.secretKey)
    return decrypted.toString(CryptoJS.enc.Utf8)
  }
}
