// Reservations.js
import React, { useState } from "react";
import "./Reservations.css";
import BookingForm from "../../components/BookingForm/BookingForm";
import Popup from "../../components/Popup/Popup";
import { useNavigate } from "react-router-dom";
import pages from "../../utils/pages";

import BookingPage from "./BookingPage";
import Testimonials from "../Sections/Testimonials/Testimonials";
import Specials from "../Sections/Specials/Specials";

const Reservations = () => {
  return(
    <>
      <BookingPage />
      <Specials />
    </>
  )
};

export default Reservations;
