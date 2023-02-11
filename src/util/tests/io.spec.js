import { describe, expect, it, vi } from 'vitest';
import { writeData } from '../io';
import { promises as fs } from 'fs';

vi.mock('fs');

describe("writeData", () => {
  it("should create a file with the name provided in the filesystem containing the content", () => {
    const content = 'WriteData';
    const filename = 'text.txt';
    writeData(content, filename);
    expect(fs.writeFile).toBeCalled();
  });
});