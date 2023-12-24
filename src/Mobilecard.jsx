import React from 'react';

const Mobilecard = ({m}) => {
    return (
        <div>
            <div className=" max-w-md rounded-lg shadow-xl mt-10 card transition duration-300 ease-in-out transform  bg-base-100 h-full hover:bg-blue-600 hover:text-white" key={m.id}>
                <div className='card-body'>
                      <h1 className="text-sm text-left">  {m.id}</h1>
                <h1 className="text-2xl font-extrabold " > {m.name}</h1>
                <h1 className="  font-semibold"> ${m.price}</h1>
                <h1 className="  font-semibold">
                   {m.processor}
                </h1>
                <h1 className=" font-semibold">  {m.memory}</h1>
                <h1 className="  font-semibold">  {m.os}</h1>
                <h1 className=" font-semibold ">  {m.type}</h1>
                </div>
              
              </div>
        </div>
    );
};

export default Mobilecard;