import PropTypes from "prop-types";
import Bookmark from "../Bookmark/bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 p-4 m-4 rounded-md">
        
            <div className="mb-5 ">
                <h4 className="text-2xl">Total reading time: {readingTime}</h4>
            </div>
            <hr />
            <h2 className="text-3xl text-center pt-4 bg-gray-300">Bookmarked Blogs | {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
};

export default Bookmarks;
