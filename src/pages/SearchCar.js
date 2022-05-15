import Search from "../components/Search";

const SearchCar = () => {
  return (
    <>
      {/* header */}
      <div className="bg-[#F1F3FF] relative">
        <div className="container mx-auto w-full h-[500px] pt-24 flex items-center flex-col sm:flex-row sm:pt-0">
          <div className="w-full px-8 sm:w-1/2 sm:px-0">
            <h2 className="font-bold text-4xl mb-4">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h2>
            <p className="font-light text-sm">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className="w-full h-full sm:w-1/2 sm:absolute sm:right-0 sm:bottom-0 z-10">
            <div
              className="w-full h-full bg-no-repeat bg-contain bg-right-bottom"
              style={{ backgroundImage: `url(header_image.png)` }}
            ></div>
          </div>
        </div>
      </div>

      <Search />
    </>
  );
};

export default SearchCar;
