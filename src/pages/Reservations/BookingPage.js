import React, { useState } from "react";
import OccasionPicker from "./OccasionPicker";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import DinersPicker from "./DinersPicker";
import BookingForm from "./BookingForm";

function BookingPage() {
  const [step, setStep] = useState(1); // Tracks which step of the flow is active
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDiners, setSelectedDiners] = useState("");
  const [selectedSetting, setSelectedSetting] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Single error message

  const handleOccasionChange = (occasion) => setSelectedOccasion(occasion);
  const handleDateChange = (date) => setSelectedDate(date);
  const handleTimeChange = (time) => setSelectedTime(time);
  const handleDinersChange = (diners) => setSelectedDiners(diners);
  const handleSettingChange = (e) => setSelectedSetting(e.target.value);

  const validateForm = () => {
    const missingFields = [];
    if (!selectedSetting) missingFields.push("Seating Option");
    if (!selectedDate) missingFields.push("Date");
    if (!selectedDiners) missingFields.push("Number of Diners");
    if (!selectedOccasion) missingFields.push("Occasion");
    if (!selectedTime) missingFields.push("Time");

    if (missingFields.length > 0) {
      setErrorMessage(`Please choose ${missingFields.join(", ")}.`);
      return false;
    }

    setErrorMessage(""); // Clear error message if no issues
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(2); // Proceed to BookingForm
    }
  };

  return step === 1 ? (
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
        Reservations
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "800px" }}>
        {/* Indoor/Outdoor Setting */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <label style={{ fontSize: "20px", display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              value="Indoor seating"
              checked={selectedSetting === "Indoor seating"}
              onChange={handleSettingChange}
              style={{ marginRight: "10px" }}
            />
            Indoor seating
          </label>
          <label style={{ fontSize: "20px", display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              value="Outdoor seating"
              checked={selectedSetting === "Outdoor seating"}
              onChange={handleSettingChange}
              style={{ marginRight: "10px" }}
            />
            Outdoor seating
          </label>
        </div>

        {/* Form Fields */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <DatePicker onDateChange={handleDateChange} />
          <DinersPicker onDinersChange={handleDinersChange} />
          
          <TimePicker onTimeChange={handleTimeChange} />
          <OccasionPicker onOccasionChange={handleOccasionChange} />
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <button
            type="submit"
            style={{
              padding: "12px 25px",
              backgroundColor: "#F4CE14",
              color: "#333",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Reserve a Table
          </button>
        </div>

        {/* Single Error Message */}
        {errorMessage && (
          <p
            style={{
              color: "#EE9972",
              fontSize: "14px",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  ) : (
    <BookingForm
      selectedOccasion={selectedOccasion}
      selectedDate={selectedDate}
      selectedTime={selectedTime}
      selectedDiners={selectedDiners}
      selectedSetting={selectedSetting}
    />
  );
}

export default BookingPage;
