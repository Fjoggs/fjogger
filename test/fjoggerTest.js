import { formatDate, formatEntry } from '../src/fjogger';
import os from 'os';

describe('flog', () => {
  it('should format date', () => {
    const date = new Date(1999, 11, 31, 23, 59, 59);
    const actual = formatDate(date);
    const expected = '[1999-12-31] 23:59:59';
    expect(actual).toEqual(expected);
  });

  it('should add zero if month is less than 10', () => {
    const date = new Date(1999, 7, 31, 23, 59, 59);
    const actual = formatDate(date);
    const expected = '[1999-08-31] 23:59:59';
    expect(actual).toEqual(expected);
  });

  it('should add zero if seconds is less than 10', () => {
    const date = new Date(1999, 11, 31, 23, 59, 1);
    const actual = formatDate(date);
    const expected = '[1999-12-31] 23:59:01';
    expect(actual).toEqual(expected);
  });

  it('should format log entry', () => {
    const date = new Date(1999, 11, 31, 23, 59, 59);
    const formattedDate = formatDate(date);
    const actual = formatEntry('info', 'test entry', formattedDate);
    const expected = `[1999-12-31] 23:59:59 [INFO] test entry${os.EOL}`;
    expect(actual).toEqual(expected);
  });
});
