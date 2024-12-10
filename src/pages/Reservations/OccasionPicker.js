import React, { useState } from "react";

const OccasionPicker = ({ onOccasionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Occasion");

  const options = ["Birthday", "Engagement"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOccasionChange(option);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%", // Allow flexibility for grid alignment
        height: "50px",
        fontSize: "20px" // Fixed height for consistency
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          width: "100%",
          maxWidth: "300px", // Match the dropdown width
          fontFamily: "'Karla', sans-serif",
          fontWeight: 700,
        }}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: selectedOption === "Occasion" ? "#EDEFEE" : "#495E57",
            color: selectedOption === "Occasion" ? "#495E57" : "#fff",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            height: "100%", // Stretch to fit the container
          }}
        >
          <span style={{ flex: 1, textAlign: "center" }}>{selectedOption}</span>
          <span
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s",
            }}
          >
            ▼
          </span>
        </div>

        {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%", // Match the width of the button
            margin: 0,
            padding: 0,
            listStyle: "none",
            border: "1px solid #ccc",
            borderRadius: "0 0 8px 8px",
            backgroundColor: "#fff",
            zIndex: 10,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                display: "block", // Ensures each option is in its own line
                padding: "10px 15px",
                cursor: "pointer",
                backgroundColor: "#fff",
                color: "#495E57",
                borderBottom: option !== options[options.length - 1] ? "1px solid #ccc" : "none",
                transition: "background-color 0.2s ease-in-out",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
};

export default OccasionPicker;
