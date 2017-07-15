import fs from 'fs';
import os from 'os';

export default function log(level, msg) {
  const file = openFile();
  const formattedDate = formatDate(new Date());
  const formattedEntry = formatEntry(level, msg, formattedDate);
  writeToFile(file, formattedEntry);
}

export function formatDate(date) {
  const month = date.getMonth() + 1;
  const seconds = date.getSeconds();
  const formatMonth = month < 10 ? `0${month}` : month;
  const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formatDate = `[${date.getFullYear()}-${formatMonth}-${date.getDate()}] `;
  const formatTime = `${date.getHours()}:${date.getMinutes()}:${formatSeconds}`;
  return formatDate.concat(formatTime);
}

export function formatEntry(level, msg, date) {
  return `${date} [${level.toUpperCase()}] ${msg}${os.EOL}`;
}

function openFile() {
  asyncExists('logs', 484, error => {
    if (error) console.log('something went wrong creating directory: ', error);
  });
  return fs.openSync('logs/log.txt', 'a');
}

function writeToFile(file, message) {
  fs.write(file, message, (error, success) => {
    if (error) {
      console.log(
        'Something went wrong writing to file with message: ',
        file,
        message
      );
    }
  });
}

// method courtesy of https://stackoverflow.com/questions/21194934/node-how-to-create-a-directory-if-doesnt-exist
function asyncExists(path, mask, callBack) {
  if (typeof mask === 'function') {
    callBack = mask;
    mask = 484;
  }
  fs.mkdir(path, mask, error => {
    if (error) {
      if (error.code === 'EEXIST') callBack(null);
      else callBack(error);
    } else {
      callBack(null);
    }
  });
}
