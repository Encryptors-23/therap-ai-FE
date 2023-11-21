import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { Component, EventEmitter, Output } from '@angular/core'

import { EncryptionService } from '../../shared/encryption-service.service';
import { DataService } from '../../shared/data-service.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  faArrow = faArrowRight;
  inputValue = ''
  @Output() topicEvent: EventEmitter<string> = new EventEmitter<string>()

  constructor(public dataService: DataService, private encryptionService: EncryptionService) {
  }

  change(event: any): void {
    this.inputValue = event.target.value
    event.target.value = ''
  }

  onSubmit(): any {
    if (this.dataService.preSelectedQuestion !== '') {
      this.inputValue = this.dataService.preSelectedQuestion
      this.dataService.preSelectedQuestion = ''
    }
    if (this.inputValue !== '') {
      this.topicEvent.emit(this.inputValue)
      this.encryptionService.encryptQuestion(this.inputValue).then((encrypted: string) => {
        this.dataService.sendMessage(encrypted).subscribe((out: string) => {
          console.log(out)
        })
      })
    }
  }
}
