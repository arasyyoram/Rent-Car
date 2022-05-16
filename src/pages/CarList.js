import Search from "../components/Search";
import { BsPeople, BsGear, BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CarList = () => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://rent-cars-api.herokuapp.com/admin/car")
      .then((res) => {
        setCarData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="bg-[#F1F3FF] relative">
        <div className="container mx-auto w-full h-[266px] pt-24 flex items-center flex-col sm:flex-row sm:pt-0"></div>
      </div>

      <Search />

      {loading && <div className="text-center">Loading...</div>}
      {error && (
        <div className="text-center">Sorry, some data are missing...</div>
      )}

      <div className="max-w-[1144px] mx-auto flex justify-center flex-wrap sm:mb-32">
        {/* Card */}
        {carData.map((item) => (
          <div
            className="p-6 shadow-md rounded-lg max-w-[333px] m-6"
            key={item.id}
          >
            <div className="my-10">
              <div className="max-w-72 max-h-52 flex items-center justify-center">
                <img
                  src={item.image ? item.image : "Car1.png"}
                  alt="Car"
                  className="object-contain max-w-full"
                />
              </div>
            </div>

            <h3 className="mb-2 text-sm">{item.name}</h3>
            <p className="mb-2 font-bold">
              Rp {item.price?.toLocaleString("id-ID")} / hari
            </p>
            <p className="mb-2 text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="text-sm font-light mb-6">
              <div className="flex items-center mb-2">
                <BsPeople style={{ display: "inline-block" }} size={18} />{" "}
                <span className="ml-2">4 orang</span>
              </div>
              <div className="flex items-center mb-2">
                <BsGear style={{ display: "inline-block" }} size={18} />{" "}
                <span className="ml-2">Manual</span>
              </div>
              <div className="flex items-center">
                <BsCalendarDate style={{ display: "inline-block" }} size={18} />{" "}
                <span className="ml-2">Tahun 2020</span>
              </div>
            </div>

            <Link to={`/cardetail/${item.id}`}>
              <button className="w-full px-3 py-2 bg-[#5CB85F] rounded-sm text-white font-bold ">
                Pilih Mobil
              </button>
            </Link>
          </div>
        ))}

        {/* end card */}
        {/* <div className="p-6 shadow-md rounded-lg max-w-[333px] m-6">
          <div className="my-10">
            <div className="max-w-72 max-h-52 flex items-center justify-center">
              <img
                src="Car1.png"
                alt="Car"
                className="object-contain max-w-full"
              />
            </div>
          </div>

          <h3 className="mb-2 text-sm">Nama/Tipe Mobil</h3>
          <p className="mb-2 font-bold">Rp 430.000 / hari</p>
          <p className="mb-2 text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="text-sm font-light mb-6">
            <div className="flex items-center mb-2">
              <BsPeople style={{ display: "inline-block" }} size={18} />{" "}
              <span className="ml-2">4 orang</span>
            </div>
            <div className="flex items-center mb-2">
              <BsGear style={{ display: "inline-block" }} size={18} />{" "}
              <span className="ml-2">Manual</span>
            </div>
            <div className="flex items-center">
              <BsCalendarDate style={{ display: "inline-block" }} size={18} />{" "}
              <span className="ml-2">Tahun 2020</span>
            </div>
          </div>

          <button className="w-full px-3 py-2 bg-[#5CB85F] rounded-sm text-white font-bold ">
            Pilih Mobil
          </button>
        </div>
        {/* hapus atas */}
      </div>
    </>
  );
};

export default CarList;
