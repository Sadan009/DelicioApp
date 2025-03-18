import React, { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {loading ? (
        <ClimbingBoxLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successfull!
          </h2>
          <p>Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
