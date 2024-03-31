import React, { useState, useEffect } from 'react';
import dataRuangan from '@/api/admin/ruangan/dataRuangan';
import dataJadwal from '@/api/admin/dashboard/dataJadwal';
import { Skeleton } from './Skeleton';

function SimpleCard({ dataCard }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [getRuangan, setRuangan] = useState(null);
  const [jadwal, setJadwal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingJadwal, setLoadingJadwal] = useState(false); 

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await dataRuangan();
        setRuangan(data.data);
        setLoading(false);
        if (data.data.length > 0) { 
          setSelectedItem(data.data[0]); 
        }
      } catch (error){
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, [dataCard]);

  useEffect(() => {
    const fetchDataJadwal = async () => {
      if (selectedItem) {
        setLoadingJadwal(true);
        try {
          const jadwalData = await dataJadwal(selectedItem.id_ruangan);
          setJadwal(jadwalData.data);
        } catch (error) {
          console.error(error);
          setJadwal(null);
        } finally {
          setLoadingJadwal(false); 
        }
      }
    };

    fetchDataJadwal();
  }, [selectedItem]);

  const handleClick = (ruang) => {
    setSelectedItem(ruang);
  };

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : getRuangan ? (
        <div className="flex">
          <div className="w-1/2">
            {getRuangan.map((ruang, index) => (
              <div 
                key={index} 
                onClick={() => handleClick(ruang)} 
                className={`mb-3 rounded-md border border-gray-300 p-4 cursor-pointer ${selectedItem === ruang ? 'bg-custom-100 text-white' : 'bg-white'}`}
              >
                <h2 className="text-xl font-semibold mb-2">{ruang.nama_ruangan}</h2>
              </div>
            ))}
          </div>
          {selectedItem && (
            <div className="right-0 top-0 h-full w-1/2 bg-gray-200 ml-3 rounded-md p-4 overflow-y-auto">
              <h2 className="text-2xl font-semibold mb-4">Jadwal Peminjaman Hari Ini</h2>
              {loadingJadwal ? ( 
                <Skeleton />
              ) : jadwal ? (
                <div className="space-y-4">
                  {jadwal.map((jadwalItem, index) => (
                    <div key={index}>
                      {jadwalItem.dataPeminjaman.map((item, innerIndex) => (
                        <div key={innerIndex}>
                          <p className="text-lg font-semibold">{item.jam_mulai_peminjaman} - {item.jam_selesai_peminjaman}</p>
                          <p>{item.nama_kegiatan}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <p>Data Jadwal tidak tersedia</p>
              )}
            </div>
          )}
        </div>
      ) : (
        <p>Data Tidak Tersedia</p>
      )}
    </>
  );
}

export default SimpleCard;
