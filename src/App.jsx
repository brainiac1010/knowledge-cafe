import './App.css';
import Header from './components/header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';


function App() {
  const [bookmarks, setBookmarks] = useState([]);

  
  const handleAddToBookmark = (blog) => {
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks);
    
  };

  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} /> 
        <Bookmarks bookmarks={bookmarks} />
        
      </div>
    </>
  );
}

export default App;
