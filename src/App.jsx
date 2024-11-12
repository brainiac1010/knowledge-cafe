import './App.css';
import Header from './components/header/Header';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';


function App() {

 


  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] =useState(0)


  const handelMarkAsRead = (time)=>{

    const  newReadinTime= readingTime+time;
setReadingTime(newReadinTime);
  }
  
  const handleAddToBookmark = (blog) => {
    const newBookmarks=[...bookmarks,blog]
    setBookmarks(newBookmarks);
    
  };

  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handelMarkAsRead={handelMarkAsRead}  handleAddToBookmark={handleAddToBookmark} /> 
        <Bookmarks   bookmarks={bookmarks}  readingTime={readingTime}/>
        
      </div>
    </>
  );
}

export default App;
