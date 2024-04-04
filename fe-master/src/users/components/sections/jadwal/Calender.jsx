import React, { useEffect, useState, useRef } from "react";
import {
  ScheduleComponent,
  Month,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { Internationalization } from "@syncfusion/ej2-base";

import getTampilJadwal from "@/api/users/jadwal/getTampilJadwal";
import getDetailJadwal from "@/api/users/jadwal/getDetailJadwal";

const roomColorMap = {
  "Ruang Alpha": "#C2DFFF",
  "Ruang Omega": "#E9FFEA",
  "Ruang Delta": "#F8EDC8",
  "Ruang Beta": "#D6C2FF",
};
const col = {
  "Ruang Alpha": "#71AFF2",
  "Ruang Omega": "#4FB955",
  "Ruang Delta": "#FA973B",
  "Ruang Beta": "#9863FF",
};

const Calender = () => {
  const instance = new Internationalization();
  const getTimeString = (value) => {
    return instance.formatDate(value, { skeleton: "hm" });
  };
  const [events, setEvents] = useState([]);
  const scheduleObj = useRef(null);
  useEffect(() => {
    const fetchEventsDetails = async () => {
      const response = await getTampilJadwal();
      if (response.success) {
        const eventsDetails = await Promise.all(
          response.data.map(async (item) => {
            const detailResponse = await getDetailJadwal(item.id_peminjaman);
            if (detailResponse.success) {
              return {
                Id: item.id_peminjaman,
                Subject: item.dataRuangan.nama_ruangan,
                StartTime: new Date(
                  `${detailResponse.data.tanggal_peminjaman}T${detailResponse.data.jam_mulai_peminjaman}`
                ),
                EndTime: new Date(
                  `${detailResponse.data.tanggal_peminjaman}T${detailResponse.data.jam_selesai_peminjaman}`
                ),
                CategoryColor:
                  roomColorMap[item.dataRuangan.nama_ruangan] || "#333",
                Description: `Peminjam: ${detailResponse.data.nama_peminjam}\nRuangan: ${item.dataRuangan.nama_ruangan}\nStatus: ${detailResponse.data.status}`,
                SolidCol: col[item.dataRuangan.nama_ruangan] || "#333",
              };
            }
            return null;
          })
        );
        setEvents(eventsDetails.filter(Boolean));
      }
    };

    fetchEventsDetails();
  }, []);

  const tooltipTemplate = (props) => {
    const primaryColor = "#ffff";
    return (
      <div>
        <div className="subject" style={{ color: primaryColor }}>
          {props.Subject}
        </div>
        <div className="time" style={{ color: primaryColor }}>
          Time: {getTimeString(props.StartTime)} -{" "}
          {getTimeString(props.EndTime)}
        </div>
      </div>
    );
  };

  const eventTemplate = (props) => {
    return (
      <div style={{ marginLeft: "6px" }}>
        <div className="subject" style={{ color: "#333" }}>
          {props.Subject}
        </div>
        <div className="time" style={{ color: "#333" }}>
          {getTimeString(props.StartTime)} - {getTimeString(props.EndTime)}
        </div>
      </div>
    );
  };

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
  const eventSettings = {
    tooltipTemplate: tooltipTemplate,
    dataSource: events,
    enableTooltip: true,
    template: eventTemplate,
    fields: {
      id: "Id",
      subject: { name: "Subject" },
      startTime: { name: "StartTime" },
      endTime: { name: "EndTime" },
      description: { name: "Description" },
      color: { name: "CategoryColor", name: "SolidCol" },
    },
  };

  return (
    <div>
      <ScheduleComponent
        eventRendered={onEventRendered}
        height="650px"
        ref={scheduleObj}
        readonly
        eventSettings={eventSettings}
      >
        <ViewsDirective>
          <ViewDirective option="Month" />
        </ViewsDirective>
        <Inject services={[Month]} />
      </ScheduleComponent>
    </div>
  );
};

export default Calender;
