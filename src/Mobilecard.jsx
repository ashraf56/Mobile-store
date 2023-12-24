import React from 'react';

const Mobilecard = ({m}) => {
    return (
        <div>
            <div className=" max-w-md rounded-md shadow-xl mt-10 card bg-base-200 h-full hover:bg-slate-500 hover:text-white" key={m.id}>
                <div className='card-body'>
                      <h1 className="text-sm text-left">  {m.id}</h1>
                <h1 className="text-3xl font-bold " > {m.name}</h1>
                <h1 className="  font-bold"> $ {m.price}</h1>
                <h1 className="  font-bold">
                   {m.processor}
                </h1>
                <h1 className=" font-bold">  {m.memory}</h1>
                <h1 className="  font-bold">  {m.os}</h1>
                <h1 className=" font-bold">  {m.type}</h1>
                </div>
              
              </div>
        </div>
    );
};

export default Mobilecard;