import React from 'react';

const Search = ({setSearch}) => {
    return (
        <div>
             <div className="mx-auto w-full text-center mt-4 py-5 ">
        <input
          type="text"
          className="input input-bordered rounded-xl input-info w-full max-w-xs"
          placeholder="search by name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
        </div>
    );
};

export default Search;