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
import React, { useEffect, useState, useRef } from "react";

import { Internationalization } from "@syncfusion/ej2-base";

const colorMap = {
  Diproses: "#262830",
  Ditolak: "#F10707",
  Disetujui: "#574FF0",
  Selesai: "#E9FFEA",
};

const CalendarInfo = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const currentId = location.pathname.split("/").pop();
  const scheduleObj = useRef(null);
  const instance = new Internationalization();
  const getTimeString = (value) => {
    return instance.formatDate(value, { skeleton: "hm" });
  };
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


  const onEventRendered = (args) => {
    const categoryColor = args.data.CategoryColor;
    const solidCol = args.data.SolidCol;

    if (!args.element) return;

    args.element.style.height = "48px";
    args.element.style.backgroundColor = categoryColor;

    args.element.style.borderLeft = `4px solid ${solidCol}`;

    const subjectElement =
      args.element.querySelector(".e-subject") || args.element;
    if (subjectElement) {
      subjectElement.style.color = "#333";
    }
  };
  const eventTemplate = (props) => {
    return (
      <div style={{ marginLeft: "6px" }}>
        <div className="subject" style={{ color: "#fff" }}>
          {props.Subject}
        </div>
        <div className="time" style={{ color: "#fff" }}>
          {getTimeString(props.StartTime)} - {getTimeString(props.EndTime)}
        </div>
      </div>
    );
  };

  const eventSettings = {
    dataSource: events,
    template: eventTemplate,

  };
  return (
    <div>
      <ScheduleComponent
        height="650px"
        eventSettings={eventSettings}
        eventRendered={onEventRendered}
        readonly
        ref={scheduleObj}

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
