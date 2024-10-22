import React, { useState } from "react";
import "../style/add_item.scss";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const add_item = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleaddinfo = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Perform upload logic here
    console.log("Selected File:", selectedFile);
    // You can now do whatever you want with the selected file, such as upload it to a server
  };
  return (
    <>
      <div className="heading">
        <h1>Add Item</h1>
      </div>
      <div className="search-download-btn-container">
        <div className="search-field">
        </div>
        <input type="file" name="file" id="file" class="inputfile" />
        <label for="file">
          {" "}
          <FiUpload /> Import Excel File{" "}
        </label>
      </div>
      <div className="form-wrapper">
        <div id="form-container">
          <label htmlFor="password">Item Name :</label>
          <input
            type="text"
            id="itemname"
            name="itemname"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Item Company Name :</label>
          <input
            type="text"
            id="itemcompanyname"
            name="itemcompanyname"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Item Serial No. :</label>
          <input
            type="text"
            id="itemserialno."
            name="itemserialno."
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Item Svvv No. :</label>
          <input
            type="text"
            id="itemsvvvno."
            name="itemsvvvno."
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">issue Date :</label>
          <input
            type="date"
            id="issuedate"
            name="issuedate"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="name">Admin Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
          />
          <label htmlFor="phoneNumber">Admin Contact No. :</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            // value={formData.phoneNumber}
            // onChange={handleChange}
          />
          <label htmlFor="details">Admin Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.details}
            // onChange={handleChange}
          />
          <label htmlFor="password">Admin Department name :</label>
          <input
            type="text"
            id="facultydepartmentname"
            name="facultydepartmentname"
            // value={formData.password}
            // onChange={handleChange}
          />
          <label htmlFor="password">Admin Branch Name :</label>
          <input
            type="text"
            id="facultybranchname"
            name="facultybranchname"
            // value={formData.password}
            // onChange={handleChange}
          />

          <label htmlFor="password">Admin Institute Name :</label>
          <input
            type="text"
            id="facultyinstitutename"
            name="facultyinstitutename"
            // value={formData.password}
            // onChange={handleChange}
          />
          <button id="add-detail-btn" onClick={handleaddinfo}>
            Add
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Item Added Successfully</h2>
            <button onClick={() => navigate("/stockitemcount")}>View</button>
          </div>
        </div>
      )}
    </>
  );
};

export default add_item;
