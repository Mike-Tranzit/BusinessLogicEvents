import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  IEventData,
  IEventInputData
} from '@models/index';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoneComponent implements OnInit, IEventInputData {
  @Input('data') data: IEventData;
  constructor() { }

  ngOnInit(): void {
  }
}
