import 'egg';
import './typings/ets';
import { Application } from 'egg';

declare module 'egg' {
  // add your special declarations
  interface Application {}
}
