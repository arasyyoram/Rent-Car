import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="bg-white shadow-md w-11/12 mx-auto p-8 my-10 rounded-lg sm:max-w-[1047px] sm:-mt-14 sm:relative sm:z-10 ">
      <form
        className="sm:flex sm:justify-between"
        onSubmit={(e) => e.preventDefault()}
      >
        <label
          htmlFor="driver"
          className="flex flex-col font-light text-xs text-[#3C3C3C] mb-5 sm:mb-0 sm:w-full sm:mr-4"
        >
          Tipe Driver
          <input
            type="text"
            name="driver"
            id="driver"
            placeholder="Pilih Tipe Driver"
            className="mt-1 rounded-sm border-[#D0D0D0] sm:w-full"
          />
        </label>

        <label
          htmlFor="driver"
          className="flex flex-col font-light text-xs text-[#3C3C3C] mb-5 sm:mb-0 sm:w-full sm:mr-4"
        >
          Tanggal
          <input
            type="date"
            name="driver"
            id="driver"
            placeholder="Pilih Tanggal"
            className="mt-1 rounded-sm border-[#D0D0D0] sm:w-full"
          />
        </label>

        <label
          htmlFor="driver"
          className="flex flex-col font-light text-xs text-[#3C3C3C] mb-5 sm:mb-0 sm:w-full sm:mr-4"
        >
          Waktu Jemput/Ambil
          <input
            type="time"
            name="driver"
            id="driver"
            placeholder="Pilih Waktu"
            className="mt-1 rounded-sm border-[#D0D0D0] sm:w-full"
          />
        </label>

        <label
          htmlFor="driver"
          className="flex flex-col font-light text-xs text-[#3C3C3C] mb-5 sm:mb-0 sm:w-full sm:mr-4"
        >
          Jumlah Penumpang (optional)
          <input
            type="text"
            name="driver"
            id="driver"
            placeholder="Jumlah Penumpang"
            className="mt-1 rounded-sm border-[#D0D0D0] sm:w-full"
          />
        </label>
        <div className="sm:w-1/2 sm:flex sm:items-end">
          <Link to="/carlist">
            <button className="w-full px-3 py-2 bg-[#5CB85F] rounded-sm text-white font-bold">
              Cari Mobil
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Search;
