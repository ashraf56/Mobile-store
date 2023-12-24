import React, { createContext, useState } from 'react';

export let Contextapi = createContext();

const AllContext = ({ children }) => {
  const [selectedProcessor, setSelectedProcessor] = useState("");
  const [selectedmemory, setSelectedmemory] = useState("");
  const [selectedOS, setSelectedOS] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [search, setSearch] = useState("");

  const handleProcessorChange = (processor) => {
    return setSelectedProcessor(processor);
  };
  const handleMemoryChange = (memory) => {
    return setSelectedmemory(memory);
  };
  const handleOSChange = (OS) => {
    return setSelectedOS(OS);
  };
  const handleTypeChange = (type) => {
    return setSelectedType(type);
  };
  const handlePriceRangeChange = (priceRange) => {
    return setSelectedPriceRange(priceRange);
  };

  const value = {
    selectedOS, selectedProcessor, selectedPriceRange, selectedType, selectedmemory, handleMemoryChange, handleOSChange, handlePriceRangeChange, handleProcessorChange, handleTypeChange, search, setSearch
  }

  return (
    <Contextapi.Provider value={value} >
      {children}
    </Contextapi.Provider>
  )
};

export default AllContext;