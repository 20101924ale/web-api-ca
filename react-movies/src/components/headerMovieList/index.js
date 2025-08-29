import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const Header = ({ title }) => {
    const navigate = useNavigate();

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // evenly space arrows & title
        padding: "8px 16px",
        marginBottom: 1.5,
      }}
      elevation={3} // optional shadow for depth
    >
            <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>


      <Typography
        variant="h4"
        component="h3"
        sx={{
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>

    </Paper>
  );
};

export default Header;
