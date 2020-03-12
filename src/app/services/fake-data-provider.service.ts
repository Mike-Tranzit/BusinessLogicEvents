import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { IEventData } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class FakeDataProviderService {
  private eventNames = ['accepted', 'done', 'changed'];
  constructor() {
  }

  getFakeData(): IEventData {
    const userName = faker.name.findName();
    const dateOfAction = new Date(faker.date.past());
    const eventName = this.eventNames[Math.floor(Math.random() * Math.floor(3))];
    return {
      userName,
      dateOfAction,
      eventName
    };
  }

}
