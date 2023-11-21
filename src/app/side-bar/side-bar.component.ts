import { Component } from '@angular/core'

import { EncryptionService } from '../shared/encryption-service.service'
import { DataService } from '../shared/data-service.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  encryptedMsg = ''
  decryptedMsg = ''

  constructor(private encryptionService: EncryptionService, private dataService: DataService) {
  }

  HandleQuestion(topic: string): void {
    this.dataService.preSelectedQuestion = topic
  }

}
