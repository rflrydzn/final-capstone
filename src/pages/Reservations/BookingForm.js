import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TimeIcon from "./time.svg";
import PersonIcon from "./person.svg";
import WineIcon from "./wine.svg";
import DateIcon from "./date.svg";

const BookingForm = ({
  selectedOccasion,
  selectedDate,
  selectedTime,
  selectedDiners,
  selectedSetting,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      specialRequests: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First Name is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^\d+$/, "Must be a valid phone number")
        .required("Phone Number is required"),
    }),
    onSubmit: (values) => {
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 5000); // Auto-hide after 5 seconds
    },
  });

  return (
    <div
      style={{
        minHeight: "50vh",
        width: "100%",
        backgroundColor: "#495E57",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Karla', sans-serif",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2
        style={{
          color: "#F4CE14",
          marginBottom: "20px",
          fontFamily: "Markazi Text",
          fontSize: "60px",
        }}
      >
        
      </h2>

      {/* Form Section */}
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "100%",
          maxWidth: "800px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginBottom: "20px",
        }}
      >
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            style={{ fontSize: "16px", color: "#fff", marginBottom: "5px" }}
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={{ color: "#EE9972", fontSize: "12px", marginTop: "5px" }}>
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            style={{ fontSize: "16px", color: "#fff", marginBottom: "5px" }}
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div style={{ color: "#EE9972", fontSize: "12px", marginTop: "5px" }}>
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            style={{ fontSize: "16px", color: "#fff", marginBottom: "5px" }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "#EE9972", fontSize: "12px", marginTop: "5px" }}>
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            style={{ fontSize: "16px", color: "#fff", marginBottom: "5px" }}
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            style={{
              width: "100%",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div style={{ color: "#EE9972", fontSize: "12px", marginTop: "5px" }}>
              {formik.errors.phoneNumber}
            </div>
          ) : null}
        </div>

        {/* Special Requests */}
        <div style={{ gridColumn: "span 2" }}>
          <label
            htmlFor="specialRequests"
            style={{ fontSize: "16px", color: "#fff", marginBottom: "5px" }}
          >
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows="3"
            onChange={formik.handleChange}
            value={formik.values.specialRequests}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div style={{ gridColumn: "span 2", textAlign: "center" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#F4CE14",
              color: "#495E57",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>

      {/* Summary Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          color: "#fff",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <img
            src={DateIcon}
            alt="Date Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <span>{selectedDate}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <img
            src={TimeIcon}
            alt="Time Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <span>{selectedTime}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <img
            src={PersonIcon}
            alt="Person Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <span>{selectedDiners} Diners</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <img
            src={WineIcon}
            alt="Occasion Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <span>{selectedOccasion}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <span>{selectedSetting}</span>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showConfirmation && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#F4CE14",
            color: "#495E57",
            padding: "30px 50px", // Increased padding for larger size
            borderRadius: "15px", // Rounded corners
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // Enhanced shadow
            fontSize: "40px", // Larger font size for better visibility
            fontWeight: "bold", // Bold text for emphasis
            textAlign: "center",
            zIndex: 1000,
            width: "70%", // Made popup wider
            maxWidth: "600px", // Ensures popup doesn't exceed screen width
          }}
        >
          Your Reservation has been confirmed, check your email
        </div>
      )}
    </div>
  );
};

export default BookingForm;
