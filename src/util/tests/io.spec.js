import { it, expect, describe } from 'vitest';
import { writeData } from '../io';

describe("writeData", () => {
  it("should execute the writeFile method", () => {
    const testData = 'test';
    const testFileName = 'test.txt';
    expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  });
})