import Search from "../components/Search";
import { BsPeople, BsGear, BsCalendarDate } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CarDetail = () => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://rent-cars-api.herokuapp.com/admin/car/${id}`)
      .then((res) => {
        setCarData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

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

      <div className="container mx-auto flex justify-center flex-col items-start mb-20 sm:flex-row">
        <div className="p-6 w-11/12 mx-auto shadow-md rounded-lg text-sm font-light mb-6 sm:w-full sm:mb-0 sm:max-w-[605px] sm:mr-8 sm:mx-0">
          <h3 className="font-bold mb-4">Tentang Paket</h3>
          <p className="mb-2">Include</p>
          <ul className="list-disc pl-4 mb-4 text-[#8A8A8A]">
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <p className="mb-2">Exclude</p>
          <ul className="list-disc pl-4 mb-4 text-[#8A8A8A]">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <p className="mb-2 font-bold">Refund, Reschedule, Overtime</p>
          <ul className="list-disc pl-4 mb-4 text-[#8A8A8A]">
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>
              Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam
            </li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>

        <div className="p-6 w-11/12 mx-auto shadow-md rounded-lg text-sm font-light sm:w-full sm:max-w-[405px] sm:mx-0">
          <div className="my-10">
            <div className="max-w-72 max-h-52 flex items-center justify-center">
              <img
                src="/Car1.png"
                alt="Car"
                className="object-contain max-w-full"
              />
            </div>
          </div>

          <h3 className="mb-2 text-sm font-bold">
            {carData.name ? carData.name : "Nama mobil"}
          </h3>

          <div className="text-sm font-light mb-6 flex items-center">
            <div className="flex items-center mr-4">
              <BsPeople style={{ display: "inline-block" }} size={18} />{" "}
              <span className="ml-2">4 orang</span>
            </div>
            <div className="flex items-center mr-4">
              <BsGear style={{ display: "inline-block" }} size={18} />{" "}
              <span className="ml-2">Manual</span>
            </div>
            <div className="flex items-center">
              <BsCalendarDate style={{ display: "inline-block" }} size={18} />{" "}
              <span className="ml-2">Tahun 2020</span>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <p>Total</p>
            <p className="font-bold">
              Rp.{" "}
              {carData.price
                ? carData.price?.toLocaleString("id-ID")
                : "430.000"}
            </p>
          </div>

          <button className="w-full px-3 py-2 bg-[#5CB85F] rounded-sm text-white font-bold ">
            Lanjutkan Pembayaran
          </button>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
