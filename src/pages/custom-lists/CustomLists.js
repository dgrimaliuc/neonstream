import './custom-lists.css';

import CustomList from '../../components/custom-list/custom-list';
import BookmarksHeader from '../../components/bookmarks-header/bookmarks-header';
import BookmarksWrapper from '../../components/bookmarks-wrapper/bookmarks-wrapper';

export default function CustomListsPage() {
  return (
    <BookmarksWrapper>
      <BookmarksHeader />
      <div className='custom-lists-box'>
        {Array.from({ length: 15 }).map((_, i) => (
          <CustomList key={i} />
        ))}
      </div>
    </BookmarksWrapper>
  );
}
