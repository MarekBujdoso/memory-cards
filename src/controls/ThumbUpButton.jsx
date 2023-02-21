import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import "./button.css";

const ThumbUpButton = ({ onClick }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      <ThumbUpAltOutlinedIcon fontSize="large" sx={{ color: "white" }} />
    </button>
  );
};

export default ThumbUpButton;
