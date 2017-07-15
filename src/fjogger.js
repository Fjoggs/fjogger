import fs from 'fs';
import os from 'os';

export default function log(level, msg) {
  const file = openFile();
  const formattedDate = formatDate(new Date());
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
  return fs.openSync(__dirname + '/logs/log.txt', 'a');
}

function writeToFile(file, message) {
  fs.writeSync(file, message);
}
