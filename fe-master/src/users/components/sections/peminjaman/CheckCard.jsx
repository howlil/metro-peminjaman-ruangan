export default function CheckCard() {
  return (
    <div className="bg-custom-300 w-full h-full">
      <div className=" p-6 sm:p-20 md:pl-24 md:pr-4 md:pt-12 ">
        <h1 className="text-white text-3xl font-bold mb-3">Ruangan Alpha</h1>
        <p className="leading-5 font-normal text-md text-custom-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
          molestie est. Fusce lobortis efficitur magna vel elementum. In hac
          habitasse platea dictumst. Suspendisse nec nisi eu nibh convallis
          vulputate. Nullam gravida dolor diam, a vehicula orci volutpat sit
          amet.
        </p>
        <h3 className="my-4 text-xl text-custom-600">
          Fasilitas yaitu Air conditioner wfi,projector, snack, meja, kursi,
          dispenser, kipas angin
        </h3>
        <div className="my-8">
          <div className="aspect-w-16 aspect-h-9 h-1/3">
            <img className="object-cover w-full h-full" src="/img.jpg" alt="" />
          </div>
          <div className="text-center rounded-bl-md rounded-br-md p-4 bg-slate-500 grid grid-cols-3">
            <section>
              <p className="text-gray-600">Gedung</p>
              <h1 className="text-xl font-bold">Gedung A</h1>
            </section>
            <section>
              <p className="text-gray-600">Gedung</p>
              <h1 className="text-xl font-bold">Gedung B</h1>
            </section>
            <section>
              <p className="text-gray-600">Gedung</p>
              <h1 className="text-xl font-bold">Gedung C</h1>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
