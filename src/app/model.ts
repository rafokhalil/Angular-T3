import { User } from './user';

export class Model {
  items: User[];
  constructor() {
    this.items = [
      new User(1, 'Rafael', 'Xelilzade', 18, new Date('2021-06-21')),
      new User(2, 'Ali', 'Huseynov', 17, new Date('2019-10-30')),
      new User(3, 'Farid', 'Ismayilov', 24, new Date('2022-06-21')),
      new User(4, 'Nadir', 'Vahabov', 18, new Date('2020-12-21')),
    ];
  }
}
