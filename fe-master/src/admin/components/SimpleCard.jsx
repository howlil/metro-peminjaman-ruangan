import React, { useState, useEffect } from 'react';

function SimpleCard({ dataCard }) {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (dataCard.length > 0) {
      setSelectedItem(dataCard[0]);
    }
  }, [dataCard]);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        {dataCard.map((item, index) => (
          <div 
            key={index} 
            onClick={() => handleClick(item)} 
            className={`mb-3 rounded-md border border-gray-300 p-4 cursor-pointer ${selectedItem === item ? 'bg-custom-100 text-white' : 'bg-white'}`}
          >
            <h2 className="text-xl font-semibold mb-2">{item.nama}</h2>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="right-0 top-0 h-full w-1/2 bg-gray-200 ml-3 rounded-md p-4 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Jadwal Peminjaman Hari Ini</h2>
          {Array.isArray(selectedItem.jadwal) ? (
            <div className="space-y-4">
              {selectedItem.jadwal.map((jadwal, index) => (
                <div key={index}>
                  <p className="text-lg font-semibold">{jadwal.mulai} - {jadwal.selesai}</p>
                  <p>{jadwal.kegiatan}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-lg font-semibold">{selectedItem.jadwal.mulai} - {selectedItem.jadwal.selesai}</p>
              <p>{selectedItem.jadwal.kegiatan}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SimpleCard;
