import './custom-lists.css';

import { BookmarksTabs } from '../../components/bookmarks-tabs';
import { BookmarksWrapper } from '../../components/bookmarks-wrapper';
import { BookmarksEmptyContainer } from '../../components/bookmarks-empty-container';

export default function CustomListsPage() {
  return (
    <BookmarksWrapper>
      <BookmarksTabs />
      <div className='custom-lists-box'>{/* <CustomList/> */}</div>
      <BookmarksEmptyContainer />
    </BookmarksWrapper>
  );
}
