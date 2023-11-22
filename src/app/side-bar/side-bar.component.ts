import { Component } from '@angular/core'

import { EncryptionService } from '../shared/encryption-service.service'
import { DataService } from '../shared/data-service.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  constructor(private dataService: DataService) {
  }

  HandleQuestion(topic: any): void {
    this.dataService.preSelectedQuestion = topic
  }

}
