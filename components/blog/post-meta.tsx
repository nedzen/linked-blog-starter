import Author from "../../interfaces/author"
import DateFormatter from "../misc/date-formatter"

type Props = {
  author?: Author,
  date?: string,
}

const PostMeta = ({
  author,
  date
}: Props) => {
  if (!(author || date)) return null;
  return (
    <mark>
      {author && (
        <div>
          <a href="#0">
            <span aria-hidden="true">
              <span>META META</span>
            </span>
            <img src={author.picture} width="32" height="32" alt="Author" />
          </a>
        </div>
      )}
      <div>
        {author && (
          <>
            <span>By </span>
            <a href="#0">{author.name}</a>
          </>
        )}
        {(author && date) && <span> · </span>}
        {date && (<span><DateFormatter dateString={date} /></span>)}
      </div>
    </mark>
  )
}

export default PostMeta;