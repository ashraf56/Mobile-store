import { useContext, useEffect, useState } from "react";
import Mobilecard from "./Mobilecard";
import Search from "./Search";
import { Contextapi } from "./AllContext/AllContext";
import Allfilter from "./Allfilter";
import Header from "./Header";
import getMobiledata from "./Util/getMobiledata";
import Topnav from "./Topnav";
function App() {
  //get Mobile data from getMobiledata
  const [mobiles] = getMobiledata()
  const { search, selectedOS, selectedProcessor, selectedPriceRange, selectedType, selectedmemory } = useContext(Contextapi)

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
    <Topnav></Topnav>
      {/* "default search feild" */}
    <Header></Header>

      <div>
        {/* All filter option */}
       

        {/* all Mobiles Data */}
        <div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-5 py-10 justify-center container">
            { !filterMobile.length === 0 ? <span className="loading loading-ring loading-lg"></span> : filterMobile.map((m) => (
              <Mobilecard  m={m} key={m.id}></Mobilecard>
            ))}
          </div>
        </div> </div>
    </>
  );
}
export default App;
