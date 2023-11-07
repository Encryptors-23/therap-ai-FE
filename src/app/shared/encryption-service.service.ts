import * as CryptoJS from 'crypto-js';
import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private secretKey: string = 'YourSecretKey123'

  constructor() {
  }

  encryptQuestion(topic: string): string {
    const encrypted = CryptoJS.AES.encrypt(topic, this.secretKey);
    return encrypted.toString();
  }

  decryptAnswer(hash: string): string{
    const decrypted = CryptoJS.AES.decrypt(hash, this.secretKey);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
