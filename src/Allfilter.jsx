import React, { useContext } from 'react';
import { Contextapi } from './AllContext/AllContext';
import getMobiledata from './Util/getMobiledata';

const Allfilter = () => {
    const [mobiles] = getMobiledata()
    const {  selectedOS, selectedProcessor, selectedPriceRange, selectedType, selectedmemory, handleMemoryChange, handleOSChange, handlePriceRangeChange, handleProcessorChange, handleTypeChange } = useContext(Contextapi)
    return (
        <div>
            <div className=" md:flex  gap-3 text-center justify-center">
                {/* filter by processor */}
                <div className=" mb-1">
                    <select
                        className="select select-info w-full max-w-xs rounded-xl shadow-md  "
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
                {/* filter by  memory */}
                <div className='mb-1'>
                    <select
                        className="select select-info w-full max-w-xs rounded-xl shadow-md"
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
                {/* filter by price */}
                <div className='mb-1'>
                    <select
                        className="select select-info w-full max-w-xs rounded-xl shadow-md"
                        value={selectedPriceRange}
                        onChange={(e) => handlePriceRangeChange(e.target.value)}
                    >
                        <option value="">All Prices</option>
                        <option className="font-semibold" value="0-500">0 - $500</option>
                        <option className="font-semibold" value="501-1000">$501 - $1000</option>
                        <option className="font-semibold" value="1001-1500">$1001 - $1500</option>
                    </select>
                </div>
                {/* filter by os */}
                <div className='mb-1'>
                    <select
                        className="select select-info w-full max-w-xs rounded-xl shadow-md"
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
                {/* filter by Type */}
                <div className='mb-1'>
                    <select
                        className="select select-info w-full max-w-xs rounded-xl shadow-md"
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
        </div>
    );
};

export default Allfilter;