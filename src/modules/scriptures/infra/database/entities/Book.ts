import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Chapter } from "./Chapter";

export enum Testament {
  OLD = 'old',
  NEW = 'new'
}

export enum BookGenre {
  LAW = 'law',
  HISTORY = 'history',
  WISDOM = 'wisdom',
  PROPHECY = 'prophecy',
  GOSPEL = 'gospel',
  EPISTLE = 'espistle',
  APOCALYPTIC = 'apocalyptic'
}

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ length: 20, unique: true })
  abbreviation: string;

  @Column({ type: 'smallint' })
  bookNumber: number;

  @Column({ type: 'enum', enum: Testament })
  testament: Testament;

  @Column({ type: 'enum', enum: BookGenre })
  genre: BookGenre;

  @Column({ length: 100 })
  hebrewName?: string;

  @Column({ length: 100 })
  greekName?: string;

  @Column({ length: 100 })
  author?: string;

  @Column({ length: 20 })
  approximateDate?: string;

  @Column({ type: 'smallint' })
  totalChapters: number;

  @Column({ type: 'smallint' })
  totalVerses: number;

  @Column('text')
  historicalContext?: string;

  @Column('text')
  theologicalThemes?: string;

  @Column('json')
  reformedInterpretation?: Record<string, any>;

  @OneToMany(() => Chapter, chapter => chapter.book)
  chapters: Chapter[];

  @Column({ default: true })
  isCanonical: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
