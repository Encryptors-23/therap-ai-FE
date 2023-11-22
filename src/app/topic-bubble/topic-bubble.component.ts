import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-topic-bubble',
  templateUrl: './topic-bubble.component.html',
  styleUrls: ['./topic-bubble.component.css'],
})
export class TopicBubbleComponent {
  @Input() topic: string = ''
  @Input() isResponse: boolean = false
  @Input() isQuestion: boolean = false
  @Output() sendTopicEvent: EventEmitter<string> = new EventEmitter<string>()


  constructor() {
  }

  sendTopic(topic: string): void {
    this.sendTopicEvent.emit(topic)
  }

}
