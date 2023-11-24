import * as crypto from 'crypto';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private secretKey: Buffer = Buffer.from(
    'vl/VxRuThkD+v+9S7twDR/eT9v+mye2EvaF4ojeRhTM=',
    'base64'
  );
  private iv: Buffer = Buffer.from('PynS/ydkhb2EUMzVty9sww==', 'base64');

  constructor() {}

  encryptQuestion(topic: string): string {
    // Promise<string> here? idk, I'm sure there's some minor changes to be made.
    const cipher = crypto.createCipheriv(
      'aes-256-cbc',
      this.secretKey,
      this.iv
    );
    let encrypted = cipher.update(topic, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
  }

  decryptAnswer(encryptedAnswer: string): string {
    const decipher = crypto.createDecipheriv(
      'aes-256-cbc',
      this.secretKey,
      this.iv
    );
    let decrypted = decipher.update(encryptedAnswer, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
