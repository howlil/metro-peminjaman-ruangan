
const AddressCard = ({ Icon, title, address }) => {
  return (
    <div
      data-aos-duration="2000"
      data-aos-anchor-easing="ease-in-out"
      data-aos="fade-up"
      className="p-4  border-blue-200  flex flex-col items-center justify-center"
    >
      <div className="bg-custom-100 rounded-full p-4 sm:p-6 inline-flex items-center justify-center">
        <Icon color="white" size={32} />
      </div>
      <h3 className="text-2xl sm:text-xl font-semibold mt-2">{title}</h3>
      <p className="text-sm text-center text-neutral-400">{address}</p>
    </div>
  );
};

export default AddressCard;
