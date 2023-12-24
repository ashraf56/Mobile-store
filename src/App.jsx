import { useEffect, useState } from "react";

function App() {
  const [mobiles, setmobile] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProcessor, setSelectedProcessor] = useState("");
  const [selectedmemory, setSelectedmemory] = useState("");
  const [selectedOS, setSelectedOS] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setmobile(data);
      });
  }, []);
  const handleProcessorChange = (processor) => {
    setSelectedProcessor(processor);
  };
  const handleMemoryChange = (memory) => {
    setSelectedmemory(memory);
  };
  const handleOSChange = (OS) => {
    setSelectedOS(OS);
  };
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  const handlePriceRangeChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  return (
    <>
      <div className="mx-auto w-full text-center mt-4">
        <input
          type="text"
          className="w-48 border-2 rounded-lg p-2"
          placeholder="search now"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="processor">Select Processor:</label>
        <select
          value={selectedProcessor}
          onChange={(e) => handleProcessorChange(e.target.value)}
        >
          <option value="">All Processors</option>
          {Array.from(new Set(mobiles.map((m) => m.processor))).map(
            (processor) => (
              <option key={processor} value={processor}>
                {processor}
              </option>
            )
          )}
        </select>
      </div>
      <div>
        <label>Select memory:</label>
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
      <div>
        <label htmlFor="priceRange">Select Price Range:</label>
        <select
         
          value={selectedPriceRange}
          onChange={(e) => handlePriceRangeChange(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="0-500">0 - $500</option>
          <option value="501-1000">$501 - $1000</option>
          <option value="1001-1500">$1001 - $1500</option>
        </select>
      </div>
      <div>
        <label>Select OS:</label>
        <select
          value={selectedOS}
          onChange={(e) => handleOSChange(e.target.value)}
        >
          <option value="">All OS</option>
          {Array.from(new Set(mobiles.map((m) => m.os))).map((os) => (
            <option key={os} value={os}>
              {os}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Type:</label>
        <select
          value={selectedType}
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          <option value="">All type</option>
          {Array.from(new Set(mobiles.map((m) => m.type))).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-3 gap-3 mx-5 px-5 justify-center text-center container">
        {mobiles
          .filter((m) => {
            const lowerCaseSearch = search.toLowerCase();

            const processorMatch = !selectedProcessor || m.processor === selectedProcessor;
            const memoryMatch = !selectedmemory || m.memory === selectedmemory;
            const osMatch = !selectedOS || m.os === selectedOS;
            const typeMatch = !selectedType || m.type === selectedType;
            const priceRangeMatch =
            !selectedPriceRange ||
            (m.price >= Number(selectedPriceRange.split('-')[0]) &&
              m.price <= Number(selectedPriceRange.split('-')[1]));

            return (
              (!search ||
                m.name.toLowerCase().includes(lowerCaseSearch) ||
                m.type.toLowerCase().includes(lowerCaseSearch) ||
                m.memory.toLowerCase().includes(lowerCaseSearch)) &&
              processorMatch &&
              memoryMatch &&
              osMatch && typeMatch && priceRangeMatch
            );
          })
          .map((m) => (
            <div className=" w-96 rounded-md shadow-2xl p-4 mt-10" key={m.id}>
              <h1 className="text-3xl font-bold " > {m.name}</h1>
              <h1 className="text-7xl">  {m.id}</h1>
              <h1 className=" text-red-600 font-bold"> brand {m.type}</h1>
              <h1 className=" text-green-600 font-bold"> $ {m.price}</h1>
              <h1 className=" text-blue-600 font-bold">

                category {m.processor}
              </h1>
              <h1 className=" text-blue-600 font-bold">  {m.memory}</h1>
              <h1 className="  font-bold"> OS {m.os}</h1>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
