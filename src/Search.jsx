import React, { useContext } from 'react';
import { Contextapi } from './AllContext/AllContext';

const Search = () => {
  const {setSearch}=useContext(Contextapi)
    return (
        <div className='my-5'>
             
        <input
          type="text"
          className="input input-bordered rounded-full input-info w-full max-w-xl"
          placeholder="search by name"
          onChange={(e) => setSearch(e.target.value)}
        />
      
        </div>
    );
};

export default Search;