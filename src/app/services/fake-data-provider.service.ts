import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { IEventData } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class FakeDataProviderService {
  constructor() {
  }

  getFakeData(): IEventData {
    const userName = faker.name.findName();
    const dateOfAction = new Date(faker.date.past());
    return {
      userName,
      dateOfAction
    };
  }

}
