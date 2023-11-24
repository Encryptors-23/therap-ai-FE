import * as CryptoJS from 'crypto-js'
import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private secretKey = CryptoJS.enc.Base64.parse(environment.key)
  private iv = CryptoJS.enc.Base64.parse(environment.iv)

  encryptQuestion(topic: string): string {
    const plaintext = CryptoJS.enc.Utf8.parse(topic);
    const cipherText = CryptoJS.AES.encrypt(plaintext, this.secretKey, { iv: this.iv })
    return cipherText.toString()
  }

  decryptAnswer(encryptedAnswer: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedAnswer, this.secretKey, { iv: this.iv })
    return bytes.toString(CryptoJS.enc.Utf8)
  }
}
