//import { TestScheduler } from 'jest';
import Haiku from './../src/haiku.js';

describe('Haiku', () => {
  test('It should create a Haiku object with three inputs', () => {
    const haiku = new Haiku('line1', 'line2', 'line3');
    expect(haiku.line1).toEqual('line1');
    expect(haiku.line2).toEqual('line2');
    expect(haiku.line3).toEqual('line3');
  });
  test('should correctly determine input consists of three lines', () => {
    const notHaiku = new Haiku('line1', 'line2', '');
    expect(notHaiku.checklines()).toEqual('should be three lines!');
  });






});