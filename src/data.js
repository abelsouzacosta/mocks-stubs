import { dummyMethod } from './dummy.js';
import { writeData } from './util/io.js';

export function generateReportData(logFn) {
  const data = 'Some dummy data for this demo app';
  if (logFn) {
    logFn(data);
  }
  return data;
}

export async function storeData(data) {
  if (!data) {
    throw new Error('No data received!');
  }
  await writeData(data, 'data.txt');
}

export function spiedFunction() {
  dummyMethod();
  return 'spied execution complete';
}