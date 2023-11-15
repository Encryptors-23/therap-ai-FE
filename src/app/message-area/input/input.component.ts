import { Component } from '@angular/core'

import { DataService } from '../../shared/data-service.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  pre : boolean= false

  constructor(public dataService: DataService) {
    console.log(dataService.preSelectedQuestion)

  }


}
