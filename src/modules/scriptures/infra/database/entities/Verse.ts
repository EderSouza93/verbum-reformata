import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Chapter } from "./Chapter";

@Entity('verses')
@Index(['bookId', 'chapterNumber', 'verseNumber'])
@Index(['reference'])
export class Verse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'smallint' })
  verseNumber: number;

  @Column({ type: 'smallint' })
  chapterNumber: number;

  @Column()
  bookId: string;

  @Column()
  chapterId: string;

  @ManyToOne(() => Chapter, chapter => chapter.verses)
  @JoinColumn({ name: 'chapterId' })
  chapter: Chapter;

  @Column({ length: 20 })
  reference: string;

  @Column('text')
  textACF: string;

  @Column('text')
  textNVI?: string;

  @Column('text')
  textKJV?: string;

  @Column('text')
  originalText?: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
