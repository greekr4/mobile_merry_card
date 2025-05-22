"use client";

import { Box, Button, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { useRouter } from "next/navigation";

export default function IndexPage() {
  const router = useRouter();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #ffe3e3 100%)",
        padding: 2,
      }}
    >
      <CreateIcon sx={{ fontSize: 60, color: "#1976d2", mb: 2 }} />
      <Typography
        variant="h2"
        sx={{ fontWeight: 700, mb: 1, color: "#1976d2", textAlign: "center" }}
      >
        Merry Card Maker
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ mb: 4, color: "#6d4c41", textAlign: "center" }}
      >
        나만의 모바일 초대장을 쉽고 예쁘게 만들어보세요!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          borderRadius: 8,
          px: 5,
          py: 1.5,
          fontWeight: 600,
          fontSize: "1.1rem",
          boxShadow: 2,
        }}
        onClick={() => router.push("/maker")}
      >
        초대장 만들기 시작
      </Button>
    </Box>
  );
}
