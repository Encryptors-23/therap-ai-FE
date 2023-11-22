import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core'

import { Prompt } from '../interface/prompt'

@Component({
  selector: 'app-message-area',
  templateUrl: './message-area.component.html',
  styleUrls: ['./message-area.component.css'],
})
export class MessageAreaComponent implements AfterViewChecked {
  messageList: Prompt[] = []
  @ViewChild('container', { static: false }) container!: ElementRef

  constructor() {
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom()
  }

  private scrollToBottom():void {
    const container = this.container.nativeElement;
    container.scrollTop = container.scrollHeight;
  }

  onEvent(message: Prompt): void {
    this.messageList.push(message)
    console.log(message)
    this.scrollToBottom()
  }

}
