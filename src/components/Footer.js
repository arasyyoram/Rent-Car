import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="container mx-auto px-8 mt-8 flex flex-col font-light text-sm sm:flex-row sm:justify-between sm:mt-32">
      <div className="mb-6">
        <p className="mb-4">
          Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
        </p>
        <p className="mb-4">binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>

      <div className="mb-6 font-normal">
        <ul>
          <li className="mb-2">Our services</li>
          <li className="mb-2">Why Us</li>
          <li className="mb-2">Testimonial</li>
          <li className="mb-2">FAQ</li>
        </ul>
      </div>

      <div className="mb-6">
        <p className="mb-4">Connect with us</p>
        <div>
          <div className="p-2 bg-[#0D28A6] inline-block rounded-full mr-4">
            <FiFacebook size={20} color="#ffffff" />
          </div>
          <div className="p-2 bg-[#0D28A6] inline-block rounded-full mr-4">
            <FiInstagram size={20} color="#ffffff" />
          </div>
          <div className="p-2 bg-[#0D28A6] inline-block rounded-full mr-4">
            <FiTwitter size={20} color="#ffffff" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p>Copyright Binar 2022</p>
        <h2 className="text-lg font-bold">Honda</h2>
      </div>
    </footer>
  );
};

export default Footer;
