import { Avatar, Typography, Box } from "@mui/material";
import { IconButton } from "@mui/material";

const AvatarButton = ({
  src,
  text,
  onClick,
  noLastSnsType,
}: {
  src: string;
  text: string;
  onClick?: () => void;
  noLastSnsType?: boolean;
}) => {
  const lastSnsType = sessionStorage.getItem("LastSnsType");

  return (
    <>
      <IconButton color="primary" onClick={onClick}>
        <Avatar src={src} sx={{ width: 50, height: 50 }} />
      </IconButton>
      {text && (
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 0,
            userSelect: "none",
          }}
        >
          {text}
        </Typography>
      )}
      {!noLastSnsType && (
        <Box
          sx={{
            display: lastSnsType === text ? "block" : "none",
            position: "relative",
            userSelect: "none",
            my: 0.3,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              top: -4,
              left: "50%",
              transform: "translateX(-50%)",
              width: "40px",
              height: "18px",
              backgroundColor: "#2C89E9",
              color: "white",
              borderRadius: "10px",
              paddingX: "4px",
              "&:before": {
                content: '""',
                position: "absolute",
                bottom: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                borderWidth: "4px",
                borderStyle: "solid",
                borderColor: "transparent transparent #2C89E9 transparent",
              },
            }}
          >
            <Typography variant="caption" sx={{ fontSize: "12px" }}>
              최근
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AvatarButton;
