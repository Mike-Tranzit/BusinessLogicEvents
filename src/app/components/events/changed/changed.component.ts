import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {
  IEventData,
  IEventInputData
} from '@models/index';

@Component({
  selector: 'app-changed',
  templateUrl: './changed.component.html',
  styleUrls: ['./changed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangedComponent implements OnInit, IEventInputData {
  @Input('data') data: IEventData;
  constructor() { }

  ngOnInit(): void {
  }

}
