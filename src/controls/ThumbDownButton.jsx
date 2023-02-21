import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import "./button.css";

const ThumbDownButton = ({ onClick }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      <ThumbDownAltOutlinedIcon fontSize="large" sx={{ color: "darkblue" }} />
    </button>
  );
};

export default ThumbDownButton;
