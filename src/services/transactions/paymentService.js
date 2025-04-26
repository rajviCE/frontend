import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/payments";

export const createPaymentIntentAPI = async (paymentData) => {
  try {
   
    const response = await axios.post(`${API_URL}/create`, paymentData);
   
    return response.data;
  } catch (error) {
    console.error("Error from createPaymentIntentAPI:", error.response?.data || error.message);
    throw error;
  }
};
