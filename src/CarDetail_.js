import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CarDetail = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);

  return <div>CarDetail</div>;
};

export default CarDetail;
