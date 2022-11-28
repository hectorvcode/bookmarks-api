import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from '../../src/auth/guard';
import { BookmarkService } from './bookmark.service';

@UseGuards(JwtGuard)
@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  getBookmarks(@GetUser('id') userId: number) {}

  @Get()
  getBookmarkById(@GetUser('id') userId: number) {}

  @Post()
  createBookmark(@GetUser('id') userId: number) {}

  @Patch()
  editBookmarkById(@GetUser('id') userId: number) {}

  @Delete()
  deleteBookmarkById(@GetUser('id') userId: number) {}
}
 // 3:16:44
