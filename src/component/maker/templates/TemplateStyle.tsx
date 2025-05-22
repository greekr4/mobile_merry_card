import { Box, Card, styled } from "@mui/material";

export const SectionBox = styled(Box)({
  height: "100%",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
});

export const CountDownCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  padding: "10px",
  width: "70px",
  height: "90px",
});
