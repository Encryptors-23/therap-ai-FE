import * as CryptoJS from 'crypto-js'
import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private secretKey: string = environment.key

  constructor() {
  }

  async encryptQuestion(topic: string): Promise<string> {
    const encrypted: CryptoJS.lib.CipherParams = CryptoJS.AES.encrypt(topic, this.secretKey)
    return encrypted.toString()
  }

  decryptAnswer(hash: string): string {
    const decrypted: CryptoJS.lib.WordArray = CryptoJS.AES.decrypt(hash, this.secretKey)
    return decrypted.toString(CryptoJS.enc.Utf8)
  }
}
