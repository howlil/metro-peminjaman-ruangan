import Container from "../../ui/Container";
import { dumies } from "@/users/data/data";
import Card from "../../ui/Card";
import Judul from "../../ui/Judul";

export default function Ruangan() {
  return (
    <Container>
      <div className="my-9">
        {/* <div className="mb-16 max-sm:mb-8 flex flex-col space-y-2 items-center">
          <h1 className="font-medium text-4xl text-center  ">Ruangan</h1>
          <hr className="border-custom-100 w-12   border-b-4" />
        </div> */}
        <Judul judul="Ruangan" />
        <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-4">
          {dumies.map((data, id) => (
            <Card
              key={id}
              describe={
                data.describe.slice(0, 130) +
                (data.describe.length > 100 ? "..." : "")
              }
              image={data.image}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
