import {
  ScheduleComponent,
  Week,
  Month,
  TimelineViews,
  TimelineMonth,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { Circle } from "lucide-react";
import Button from "../../ui/Button";
const appData = [
  {
    Id: 1,
    Subject: "Board Meeting",
    StartTime: new Date(2018, 1, 15, 9, 0),
    EndTime: new Date(2018, 1, 15, 11, 0),
    IsAllDay: false,
  },
  {
    Id: 2,
    Subject: "Training session on project management",
    StartTime: new Date(2018, 1, 16, 10, 0),
    EndTime: new Date(2018, 1, 16, 12, 0),
    IsAllDay: false,
  },
  {
    Id: 3,
    Subject: "Product brainstorming session",
    StartTime: new Date(2018, 1, 17, 10, 30),
    EndTime: new Date(2018, 1, 17, 12, 45),
    IsAllDay: false,
  },
  {
    Id: 4,
    Subject: "Client meeting",
    StartTime: new Date(2018, 1, 18, 14, 0),
    EndTime: new Date(2018, 1, 18, 16, 30),
    IsAllDay: false,
  },
  {
    Id: 5,
    Subject: "HR Discussion",
    StartTime: new Date(2018, 1, 19, 9, 30),
    EndTime: new Date(2018, 1, 19, 10, 30),
    IsAllDay: false,
  },
  {
    Id: 6,
    Subject: "Office Outing",
    StartTime: new Date(2018, 1, 20),
    EndTime: new Date(2018, 1, 20),
    IsAllDay: true,
  },
  {
    Id: 7,
    Subject: "Weekly Review",
    StartTime: new Date(2018, 1, 21, 11, 0),
    EndTime: new Date(2018, 1, 21, 13, 0),
    RecurrenceRule: "FREQ=WEEKLY;BYDAY=FR;INTERVAL=1",
  },
];

const CalendarInfo = ({ onClick }) => {
  const eventSettings = { appData };

  return (
    <div
      data-aos-duration="2000"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="sm:ml-20 mx-6 sm:mx-0 sm:mr-10 lg:mr-36 mt-10"
    >
      <ScheduleComponent
        width="100%"
        height="450px"
        selectedDate={new Date(2018, 1, 15)}
        eventSettings={eventSettings}
      >
        <ViewsDirective>
          <ViewDirective option="Month" />
        </ViewsDirective>
        <Inject services={[Week, Month, TimelineViews, TimelineMonth]} />
      </ScheduleComponent>

      <div className="my-8">
        <h1 className="font-semibold text-xl">
          Keterangan Ruangan yang diajuakan
        </h1>
        <div className="items-center flex gap-3 mb-3">
          <Circle size={20} fill="#574FF0" color="#574FF0" />
          <p>Ruangan sudah disetujui peminjaman</p>
        </div>
        <div className="items-center flex gap-3">
          <Circle size={20} fill="#333" color="#333" />
          <p>Ruangan sedang diproses peminjaman</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 my-8">
        <Button
          onClick={onClick}
          label="Ajukan peminjaman"
          color="primary"
          size="small"
        />
      </div>
    </div>
  );
};

export default CalendarInfo;
