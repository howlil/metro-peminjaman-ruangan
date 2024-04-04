import React, { useEffect, useState } from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-react-schedule/styles/material.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as MuiButton,
} from "@mui/material";
import getTampilJadwal from "@/api/users/jadwal/getTampilJadwal";
import getDetailJadwal from "@/api/users/jadwal/getDetailJadwal";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [eventDetail, setEventDetail] = useState(null);

  const colorMap = {
    Diproses: "#FA973B",
    Ditolak: "#FF5050",
    Disetujui: "#4FB955",
    Selesai: "#C2DFFF",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTampilJadwal();
        if (res.success) {
          const transformedEvents = res.data.map((item) => ({
            Id: item.id_peminjaman,
            Subject: item.dataRuangan.nama_ruangan,
            StartTime: new Date(
              item.tanggal_peminjaman + "T" + item.jam_mulai_peminjaman
            ),
            EndTime: new Date(
              item.tanggal_peminjaman + "T" + item.jam_selesai_peminjaman
            ),
            CategoryColor: roomColors[item.dataRuangan.nama_ruangan] || "#999", // Default color
            RoomId: item.id_peminjaman,
          }));

          setEvents(transformedEvents);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchData();
  }, []);

  const handleEventClick = async (args) => {
    const { RoomId } = args.event;
    try {
      const detailRes = await getDetailJadwal(RoomId);
      console.log("====================================");
      console.log(detailRes);
      console.log("====================================");
      if (detailRes.success) {
        setEventDetail(detailRes.data);
        setOpenDialog(true);
      }
    } catch (error) {
      console.error("Error fetching room details:", error);
    }
  };

  return (
    <div>
      <ScheduleComponent
        height="650px"
        selectedDate={new Date()}
        eventSettings={{
          dataSource: events,
          categoryColorField: "CategoryColor",
        }}
        eventClick={handleEventClick}
      >
        <ViewsDirective>
          <ViewDirective option="Month" />
        </ViewsDirective>
        <Inject services={[ Month]} />
      </ScheduleComponent>

      {eventDetail && (
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Event Details</DialogTitle>
          <DialogContent>
            {/* Render more details from eventDetail */}
            <p>
              <strong>Name:</strong> {eventDetail.nama_peminjam}
            </p>
            <p>
              <strong>Room:</strong> {eventDetail.nama_ruangan}
            </p>
            {/* Add more detail fields as necessary */}
          </DialogContent>
          <DialogActions>
            <MuiButton onClick={() => setOpenDialog(false)}>Close</MuiButton>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Calendar;
