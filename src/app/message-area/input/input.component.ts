import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { Component, EventEmitter, Output } from '@angular/core'

import { EncryptionService } from '../../shared/encryption-service.service'
import { DataService } from '../../shared/data-service.service'
import { ResponseParams } from '../../interface/response-params'
import { Prompt } from '../../interface/prompt'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  faArrow = faArrowRight
  inputValue = ''
  @Output() topicEvent: EventEmitter<Prompt> = new EventEmitter<Prompt>()
  @Output() responseEvent: EventEmitter<Prompt> = new EventEmitter<Prompt>()

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
      this.topicEvent.emit({ isResponse: false, isQuestion: true, prompt: this.inputValue })
      this.encryptionService.encryptQuestion(this.inputValue)
        .then((encrypted: string): void => {
          this.dataService.sendMessage(encrypted).subscribe((response: ResponseParams): void => {
            console.log('out', response)
            this.responseEvent.emit({ isResponse: true, isQuestion: false, prompt: response.response })
          })
        })
    }

  }
}
