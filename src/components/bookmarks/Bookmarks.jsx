
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3  bg-gray-300 p-4 m-4 rounded-md">
            <h2 className="text-3xl text-center bg-gray-300">Bookmarked Blogs | {bookmarks.length}</h2>
        {


bookmarks.map(bookmark=><Bookmark key ={bookmark.id} bookmark ={bookmark}></Bookmark> )
        }
        </div>
    );
};

Bookmarks.prototypes={
bookmarks:PropTypes.array

}
export default Bookmarks;
