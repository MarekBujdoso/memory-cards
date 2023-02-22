import React from "react";
import PropTypes from "prop-types";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import "./button.css";

const ThumbUpButton = ({ onClick }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      <ThumbUpAltOutlinedIcon fontSize="large" sx={{ color: "white" }} />
    </button>
  );
};

ThumbUpButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ThumbUpButton;
