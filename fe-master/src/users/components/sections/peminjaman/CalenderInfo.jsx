import React, { useEffect, useState, useRef } from "react";
import {
  ScheduleComponent,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import getDetailJadwal from "@/api/users/jadwal/getDetailJadwal";
import getDataRuanganUser from "@/api/users/beranda/getDataRuanganUser";
import getTampilJadwal from "@/api/users/jadwal/getTampilJadwal";
import { useLocation } from "react-router-dom";

const colorMap = {
  Diproses: "#FA973B",
  Ditolak: "#FF5050",
  Disetujui: "#4FB955",
  Selesai: "#C2DFFF",
};

const CalendarInfo = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const currentId = location.pathname.split("/").pop();
  const scheduleObj = useRef(null);
  useEffect(() => {
    const fetchEventsForCurrentRoom = async () => {
      const ruanganResponse = await getDataRuanganUser();
      const ruanganData = ruanganResponse.data.find(
        (room) => room.id_ruangan === currentId
      );
      const jadwalResponse = await getTampilJadwal();
      const filteredJadwalData = jadwalResponse.data.filter(
        (jadwal) => jadwal.dataRuangan.nama_ruangan === ruanganData.nama_ruangan
      );

      const detailedEvents = await Promise.all(
        filteredJadwalData.map(async (jadwal) => {
          const detailResponse = await getDetailJadwal(jadwal.id_peminjaman);
          if (detailResponse.success && detailResponse.data) {
            return {
              Id: jadwal.id_peminjaman,
              Subject: detailResponse.data.nama_kegiatan,
              StartTime: new Date(
                `${detailResponse.data.tanggal_peminjaman}T${detailResponse.data.jam_mulai_peminjaman}`
              ),
              EndTime: new Date(
                `${detailResponse.data.tanggal_peminjaman}T${detailResponse.data.jam_selesai_peminjaman}`
              ),
              CategoryColor: colorMap[detailResponse.data.status],
              Status: detailResponse.data.status,
              NamaPeminjam: detailResponse.data.nama_peminjam,
              NamaRuangan: detailResponse.data.dataRuangan.nama_ruangan,
              Location: detailResponse.data.dataRuangan.nama_ruangan,
              Description: `Peminjam: ${detailResponse.data.nama_peminjam}\n  Status: ${detailResponse.data.status}`,
            };
          }
        })
      );

      setEvents(detailedEvents.filter((event) => event));
    };

    fetchEventsForCurrentRoom();
  }, [currentId]);

  const eventSettings = {
    dataSource: events,
  };
  const onEventRendered = (args) => {
    const categoryColor = colorMap[args.data.Status];
    if (!args.element || !categoryColor) {
      return;
    }
    args.element.style.backgroundColor = categoryColor;
  };

  return (
    <div>
      <ScheduleComponent
        height="650px"
        eventSettings={eventSettings}
        eventRendered={onEventRendered}
        readonly
      >
        <ViewsDirective>
          <ViewDirective option="Month" />
        </ViewsDirective>
        <Inject services={[Month]} />
      </ScheduleComponent>
    </div>
  );
};

export default CalendarInfo;
