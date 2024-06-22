import React from 'react';
import Author from '../../interfaces/author';
// import Backlinks from '../misc/backlinks';
import PostBody from './post-body';
import PostMeta from './post-meta';

type Props = {
  title: string,
  content: string,
  date?: string,
  author?: Author,
  backlinks: { [k: string]: {
      title: string,
      excerpt: string,
    }
  }
}

function PostSingle({
  title,
  date,
  author,
  content,
  backlinks
}: Props) {
  return (
    
  <>
    {/* Article header */}
    <header>
      {/* Title */}
      <h1>{title}</h1>
    </header>

    {/* Article content */}
    <article>
      {/* Main content */}
      <h1>aaaaa aaa </h1>
      <div>
        {/* Article meta */}
        {(author || date) && (
          <>
          <h1>--------------------</h1>
            <PostMeta author={author} date={date} />
            <h1>--------------------</h1>
          </>
        )}

        {/* Article body */}
        <PostBody content={content} />
      </div>

      {/* Sidebar */}
      <hr />
      {/* <aside>
          <h4>Backlinks</h4>
          {Object.keys(backlinks).length > 0 && <Backlinks backlinks={backlinks} />}
      </aside> */}

    {/* Article footer */}

  </article>
  </>

  );
}

export default PostSingle;