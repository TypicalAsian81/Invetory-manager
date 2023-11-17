// BookSearch.jsx

import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import '../styles/search.css';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSearch = () => {
    setLoading(true);
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    axios
      .get(`http://localhost:5555/books/search?term=${encodedSearchTerm}`)
      .then((response) => {
        setLoading(false);
        setSearchResult(response.data);
        enqueueSnackbar('Search successful', { variant: 'success' });
      })
      .catch((error) => {
        setLoading(false);
        setSearchResult(null);
        enqueueSnackbar('No books found', { variant: 'warning' });
        console.log(error);
      });
  };

  return (
    <div className='book-search-container'>
      <BackButton />
      <h1 className='search-title'>Search Item</h1>
      <div className='search-box'>
        <div className='search-input'>
          <label className='label-text'>Search Term</label>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='input-field'
          />
        </div>
        <button className='search-button' onClick={handleSearch}>
          Search
        </button>
        {loading && <p>Loading...</p>}
        {searchResult && (
          <div>
            <h2>Search Results:</h2>
            <ul>
              {searchResult.map((book) => (
                <li key={book.id}>{book.title} - {book.author}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSearch;








// // BookSearch.jsx

// import React, { useState } from 'react';
// import BackButton from '../components/BackButton';
// import axios from 'axios';
// import { useSnackbar } from 'notistack';
// import '../styles/search.css';

// const BookSearch = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResult, setSearchResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { enqueueSnackbar } = useSnackbar();

//   const handleSearch = () => {
//     setLoading(true);
//     const encodedSearchTerm = encodeURIComponent(searchTerm);
//     axios
//       .get(`http://localhost:5555/books/search?term=${encodedSearchTerm}`)
//       .then((response) => {
//         setLoading(false);
//         setSearchResult(response.data);
//         enqueueSnackbar('Search successful', { variant: 'success' });
//       })
//       .catch((error) => {
//         setLoading(false);
//         setSearchResult(null);
//         enqueueSnackbar('No books found', { variant: 'warning' });
//         console.log(error);
//       });
//   };
  
  

//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl my-4'>Search Books</h1>
//       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
//         <div className='my-4'>
//           <label className='text-xl mr-4 text-gray-500'>Search Term</label>
//           <input
//             type='text'
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className='border-2 border-gray-500 px-4 py-2 w-full'
//           />
//         </div>
//         <button className='p-2 bg-sky-300 m-8' onClick={handleSearch}>
//           Search
//         </button>
//         {loading && <p>Loading...</p>}
//         {searchResult && (
//           <div>
//             <h2>Search Results:</h2>
//             <ul>
//               {searchResult.map((book) => (
//                 <li key={book.id}>{book.title} by {book.author}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookSearch;
