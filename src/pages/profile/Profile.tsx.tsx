import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./profile.css";

interface User {
  username: string;
  email: string;
  phone: string;
  password: string;
}

// interface PaymentResponse {
//   days: number;
//   history: any; // Adjust based on your actual `History` type
//   user: User;
// }

const Profile: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  // Comment out payment info state
  // const [paymentInfo, setPaymentInfo] = useState<PaymentResponse | null>(null);

  useEffect(() => {
    // Fetch user data from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login"); // Redirect to login if no user data is found
    }

    // Comment out payment fetching
    // const fetchPaymentInfo = async () => {
    //   const token = localStorage.getItem("client_token"); // Ensure this key is correct
    //   if (!token) {
    //     console.error("No client token found in localStorage");
    //     alert("No client token found. Please log in again.");
    //     navigate("/login");
    //     return;
    //   }

    //   try {
    //     const response = await axios.post(
    //       "http://88.218.60.127:5678/client/check-payment",
    //       {},
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     setPaymentInfo(response.data);
    //   } catch (error) {
    //     console.error("Error fetching payment info:", error);
    //     if (error.response?.status === 403) {
    //       // Handle Forbidden error (403)
    //       alert("You do not have permission to access this resource.");
    //     }
    //   }
    // };

    // fetchPaymentInfo();
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <div className="profile-item">
          <label>Username:</label>
          <span> {user.username}</span>
        </div>
        <div className="profile-item">
          <label>Email:</label>
          <span> {user.email}</span>
        </div>
        <div className="profile-item">
          <label>Phone:</label>
          <span> {user.phone}</span>
        </div>
        <div className="profile-item">
          <label>Password:</label>
          <span> {user.password}</span>
        </div>
        {/* Comment out payment info display */}
        {/* <div className="profile-item">
          <label>Days Until Payment Expiry:</label>
          <span>{paymentInfo.days} days</span>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
