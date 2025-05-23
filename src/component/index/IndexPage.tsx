"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { useRouter } from "next/navigation";
import AvatarButton from "./AvatarButton";
import { useState } from "react";
import OpeningAnimation from "./OpeningAnimation";

export default function IndexPage() {
  const [curtainOpen, setCurtainOpen] = useState(true);
  const router = useRouter();

  return (
    <>
      {curtainOpen && (
        <OpeningAnimation onFinish={() => setCurtainOpen(false)} />
      )}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f8fafc 0%, #ffe3e3 100%)",

          filter: curtainOpen ? "blur(2px)" : "none",
          pointerEvents: curtainOpen ? "none" : "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#dddddd",
            borderRadius: 2,
            padding: 2,
            width: "100vw",
            height: "40vh",
          }}
        >
          이미지
        </Box>
        <Box
          sx={{
            height: "60vh",
            padding: 2,
          }}
        >
          <Typography
            fontSize={"20px"}
            fontWeight={"bold"}
            gutterBottom
            textAlign={"center"}
          >
            어플리케이션 제목
          </Typography>
          <Typography fontSize={"16px"} gutterBottom textAlign={"center"}>
            어플리케이션 설명
            <br />
            어플리케이션 설명 어플리케이션 설명
          </Typography>

          <Box pt={4}>
            <Typography fontSize={"14px"} gutterBottom textAlign={"center"}>
              간편 로그인
            </Typography>
            <Grid
              container
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              {/* SNS 로그인 버튼들 */}
              <Grid>
                <AvatarButton
                  src="/icons/naver_round.png"
                  text="네이버"
                  onClick={() => {
                    router.push("/preview");
                  }}
                />
              </Grid>
              <Grid>
                <AvatarButton
                  src="/icons/kakao_round.png"
                  text="카카오"
                  onClick={() => {
                    router.push("/preview");
                  }}
                />
              </Grid>
              <Grid>
                <AvatarButton
                  src="/icons/google_round.png"
                  text="구글"
                  onClick={() => {
                    router.push("/preview");
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
