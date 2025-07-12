import AppError from "@shared/errors/AppError";

export class ScriptureReference {
  private constructor(
    private readonly book: string,
    private readonly chapter: number,
    private readonly startVerse: number,
    private readonly endVerse?: number
  ) { }

  static create(reference: string): ScriptureReference {
    const patterns = [
      /^([1-3]?\s*[A-Za-z]+)\s+(\d+):(\d+)(?:-(\d+))?$/,
      /^([1-3]?\s*[A-Za-z]+)\s+(\d+):(\d+)$/,
      /^([1-3]?\s*[A-Za-z]+)\s+(\d+)$/,
    ];

    for (const pattern of patterns) {
      const match = reference.match(pattern);
      if (match) {
        const [book, chapter, verse, endVerse] = match;
        return new ScriptureReference(
          book.trim(),
          parseInt(chapter),
          verse ? parseInt(verse) : 1,
          endVerse ? parseInt(endVerse) : undefined
        );
      }
    }

    throw new AppError(`Formato de referência bíblica inválido: ${reference}`);
  }

  static fromParts(book: string, chapter: number, verse: number, endVerse?: number): ScriptureReference {
    return new ScriptureReference(book, chapter, verse, endVerse);
  }

  toString(): string {
    const baseRef = `${this.book} ${this.chapter}:${this.startVerse}`;
    return this.endVerse ? `${baseRef}-${this.endVerse}` : baseRef
  }

  toShortString(): string {
    return this.endVerse ? `${this.chapter}:${this.startVerse}-${this.endVerse}` : `${this.chapter}:${this.startVerse}`;
  }

  isRange(): boolean {
    return this.endVerse !== undefined;
  }

  getVerseCount(): number {
    return this.endVerse ? (this.endVerse - this.startVerse + 1) : 1
  }

  contains(verse: number): boolean {
    return verse >= this.startVerse && verse <= (this.endVerse || this.startVerse);
  }

  getBook(): string { return this.book; }
  getChapter(): number { return this.chapter; }
  getStartVerse(): number { return this.startVerse; }
  getEndVerse(): number | undefined { return this.endVerse; }
}
