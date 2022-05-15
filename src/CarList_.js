// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const CarList = () => {
//   const [carList, setCarList] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://rent-cars-api.herokuapp.com/customer/car")
//       .then((res) => setCarList(res.data))
//       .catch((error) => console.log(error.response));
//   }, []);

//   return (
//     <div>
//       <h2>Car List</h2>
//       <ol>
//         {carList.map((e) => (
//           <li key={e.id}>
//             {e.name} <Link to={`/detail/${e.id}`}>Submit</Link>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default CarList;
