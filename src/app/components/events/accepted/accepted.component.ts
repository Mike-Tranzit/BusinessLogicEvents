import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {
  IEventData,
  IEventInputData
} from '@models/index';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcceptedComponent implements OnInit, IEventInputData {
  @Input('data') data: IEventData;
  constructor() { }

  ngOnInit(): void {
  }

}
