import { it, expect, describe, vi } from 'vitest';
import { generateReportData, spiedFunction } from '../data';
import { dummyMethod } from '../dummy';

vi.mock('../dummy', () => {
  return {
    dummyMethod: vi.fn().mockImplementation(() => 'dummy'), // fazemos o mock aqui
  }
});

describe("generateReportData", () => {
  it('should return a string when called', () => {
    const logger = vi.fn(); 
    const result = generateReportData(logger);
    expect(result).toBe('Some dummy data for this demo app');
    expect(logger).toBeCalledTimes(1);
  });
});

describe("spiedFunction", () => {
  it("should call dummyMethod", () => {
    const result = spiedFunction();
    expect(result).toBe('spied execution complete');
    expect(dummyMethod).toHaveBeenCalledTimes(1);
  });
});