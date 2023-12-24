import { useEffect, useState } from "react";
import Mobilecard from "./Mobilecard";
import Search from "./Search";
function App() {
  const [mobiles, setmobile] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProcessor, setSelectedProcessor] = useState("");
  const [selectedmemory, setSelectedmemory] = useState("");
  const [selectedOS, setSelectedOS] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  useEffect(() => {
    fetch("https://mobile-store-server.onrender.com/user")
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

  //  filter operation
  let fltermobile = ((m) => {
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
        m.name.toLowerCase().includes(lowerCaseSearch)) &&
      processorMatch &&
      memoryMatch &&
      osMatch && typeMatch && priceRangeMatch
    );
  })

  const filterMobile = mobiles.filter(fltermobile)
  return (
    <>
      {/* "default search feild" */}
     <Search setSearch={setSearch}  ></Search>

      <div className="">
        <div className=" flex  gap-3 text-center justify-center">
          <div className=" rounded-xl shadow-md ">
            <select
              className="select select-info w-full max-w-xs  "
              value={selectedProcessor}
              onChange={(e) => handleProcessorChange(e.target.value)}
            >
              <option value="">All Processors</option>
              {Array.from(new Set(mobiles.map((m) => m.processor))).map(
                (processor) => (
                  <option className="text-lg font-semibold" key={processor} value={processor}>
                    {processor}
                  </option>
                )
              )}
            </select>
          </div>
          <div>
            <select
              className="select select-info w-full max-w-xs"
              value={selectedmemory}
              onChange={(e) => handleMemoryChange(e.target.value)}
            >
              <option value="">All Memory</option>
              {Array.from(new Set(mobiles.map((m) => m.memory))).map((memory) => (
                <option className="font-semibold" key={memory} value={memory}>
                  {memory}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="select select-info w-full max-w-xs"
              value={selectedPriceRange}
              onChange={(e) => handlePriceRangeChange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option className="font-semibold" value="0-500">0 - $500</option>
              <option className="font-semibold" value="501-1000">$501 - $1000</option>
              <option className="font-semibold" value="1001-1500">$1001 - $1500</option>
            </select>
          </div>
          <div>
            <select
              className="select select-info w-full max-w-xs"
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
            <select
              className="select select-info w-full max-w-xs"
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
        </div>
        <div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 mx-5 px-5 justify-center container">
            {filterMobile.map((m) => (
              <Mobilecard m={m} key={m.id}></Mobilecard>
            ))}
          </div>
        </div> </div>
    </>
  );
}
export default App;
