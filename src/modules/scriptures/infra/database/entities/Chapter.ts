import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";
import { Verse } from "./Verse";

@Entity('chapters')
export class Chapter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'smallint' })
  chapterNumber: Number

  @Column()
  bookId: string;

  @ManyToOne(() => Book, book => book.chapters)
  @JoinColumn({ name: 'bookId ' })
  book: Book

  @OneToMany(() => Verse, verse => verse.chapter )
  verses: Verse[]

  @Column({ type: 'smallint' })
  totalVerses: number;

  @Column('text')
  summary?: string;

  @Column('text')
  theologicalOutline?: string;

  @Column('json')
  keyThemes?: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
