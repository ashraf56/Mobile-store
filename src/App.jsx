import { useEffect, useState } from "react"



function App() {

let [mobiles, setmobile]= useState([])
const [search, setSearch] = useState('');
const [selectedProcessor, setSelectedProcessor] = useState('');
const [selectedmemory, setSelectedmemory] = useState('');

useEffect(()=>{
fetch('http://localhost:3000/user')
.then(res=>res.json())
.then(data => {
  console.log(data);

  setmobile(data)
})

},[])
const handleProcessorChange = (processor) => {
  setSelectedProcessor(processor);
};
const handleMemoryChange = (memory) => {
  setSelectedmemory(memory);
};



  return (
    <>
<div className="mx-auto w-full text-center mt-4">
  <input type="text" className="w-48 border-2 rounded-lg p-2" placeholder="search now" onChange={(e)=> setSearch(e.target.value)} />
</div>
<div>
        <label htmlFor="processor">Select Processor:</label>
        <select
          
          value={selectedProcessor}
          onChange={(e) => handleProcessorChange(e.target.value)}
        >
          <option value="">All Processors</option>
          {Array.from(new Set(mobiles.map((m) => m.processor))).map((processor) => (
  <option key={processor} value={processor}>
    {processor}
  </option>
))}
        </select>
      </div>
<div>
        <label >Select memory:</label>
        <select
         
          value={selectedmemory}
          onChange={(e) => handleMemoryChange(e.target.value)}
        >
          <option value="">All Memory</option>
          {Array.from(new Set(mobiles.map((m) => m.memory))).map((memory) => (
  <option key={memory} value={memory}>
    {memory}
  </option>
))}
        </select>
      </div>
<div className="grid grid-cols-3 gap-3 mx-5 px-5 justify-center text-center container">


   {
    mobiles.filter((m) => {
      const lowerCaseSearch = search.toLowerCase();
    
      const processorMatch = !selectedProcessor || m.processor === selectedProcessor;
      const memoryMatch = !selectedmemory || m.memory === selectedmemory;
      return (
        (!search || (m.name.toLowerCase().includes(lowerCaseSearch)|| m.type.toLowerCase().includes(lowerCaseSearch) || m.memory.toLowerCase().includes(lowerCaseSearch)  )  ) && processorMatch && memoryMatch
      );
    }).map(m => (
    <div className=" w-96 rounded-md shadow-2xl p-4 mt-10" key={m.id}>
      <h1> title {m.name}</h1>
      <h1> title {m.id}</h1>
      <h1 className=" text-red-600 font-bold"> brand {m.type}</h1>
      <h1 className=" text-green-600 font-bold"> price {m.price}</h1>
      <h1 className=" text-blue-600 font-bold"> category {m.processor}</h1>
      <h1 className=" text-blue-600 font-bold"> category {m.memory}</h1>
      <h1 className=" text-blue-600 font-bold"> category {m.os}</h1>
    </div>  
    ))
   }</div>
    </>
  )
}

export default App
