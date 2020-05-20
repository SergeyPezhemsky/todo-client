import {Tasks} from './tasks.interface';

export interface Person {
  id: string;
  name: string;
  birthDate: string;
  tasks: Tasks[];
}
