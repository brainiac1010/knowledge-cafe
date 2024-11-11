import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} =bookmark
    return (
        <div className="bg-white p-4 m-4 rounded-md">
            <h3 className="text text-2xl">{title} </h3>
        </div>
    );
};

Bookmark.prototype = {
    bookmark:PropTypes.object
}
export default Bookmark;