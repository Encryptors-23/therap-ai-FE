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
    this.dataService.preSelectedQuestion = true
    this.encryptedMsg = this.encryptionService.encryptQuestion(topic)
    // this.dataService.sendMessage(this.encryptedMsg).subscribe((encryption: string) => {
    //   this.encryptedMsg = encryption
    // })

    // console.log(this.encryptedMsg)

    this.decryptedMsg = this.encryptionService.decryptAnswer(this.encryptedMsg)
    // console.log(this.decryptedMsg)
    console.log(this.dataService.preSelectedQuestion)
  }

}
