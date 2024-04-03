import Button from "../../ui/Button";

export default function DeskripsiRuang() {
  return (
    <div
      data-aos-duration="2000"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-left"
      className="sm:ml-8 mt-8 mb-16 space-y-4"
    >
      <h1 className="text-4xl  font-bold">Ruangan Alpha</h1>
      <p className="text-custom-500 leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
        molestie est. Fusce lobortis efficitur magna vel elementum. In hac
        habitasse platea dictumst. Suspendisse nec nisi eu nibh convallis
        vulputate. Nullam gravida dolor diam, a vehicula orci volutpat sit amet.
      </p>
      <div>
        <h3 className="text-xl font-semibold">Fasilitas :</h3>
        <div>
          <img src="" alt="" />
          <p>Air Conditioner</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-x-2">
        <Button color="outline" size="small" label="Kontak " />
        <Button color="primary" size="small" label=" Peminjaman" />
      </div>
    </div>
  );
}
