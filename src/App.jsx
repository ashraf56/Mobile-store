import { useContext, useEffect, useState } from "react";
import Mobilecard from "./Mobilecard";
import Search from "./Search";
import { Contextapi } from "./AllContext/AllContext";
import Allfilter from "./Allfilter";
function App() {
  const [mobiles, setmobile] = useState([]);

  const { search, selectedOS, selectedProcessor, selectedPriceRange, selectedType, selectedmemory } = useContext(Contextapi)

  useEffect(() => {
    fetch("https://mobile-store-server.onrender.com/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setmobile(data);
      });
  }, []);


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
      <Search ></Search>

      <div>
        {/* All filter option */}
        <Allfilter mobiles={mobiles} ></Allfilter>

        {/* all Mobiles Data */}
        <div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-5 py-10 justify-center container">
            {filterMobile.map((m) => (
              <Mobilecard m={m} key={m.id}></Mobilecard>
            ))}
          </div>
        </div> </div>
    </>
  );
}
export default App;
