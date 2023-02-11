import { describe, expect, it, vi } from 'vitest';
import { writeData } from '../io';
import { promises as fs } from 'fs';

vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      }
    }
  }
});

describe("writeData", () => {
  it("should create a file with the name provided in the filesystem containing the content", () => {
    const content = 'WriteData';
    const filename = 'text.txt';
    const result = writeData(content, filename);
    expect(result).resolves.toBeUndefined();
    expect(fs.writeFile).toBeCalledWith(filename, content);
  });
});