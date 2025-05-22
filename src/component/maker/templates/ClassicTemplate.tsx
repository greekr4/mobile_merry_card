"use client";

import { Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import { SectionBox } from "./TemplateStyle";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CustomCalendar from "./CustomCalendar";
import CountDown from "./CountDown";

export default function ClassicTemplate({
  groom,
  bride,
  date,
  time,
  place,
  message,
}: {
  groom: string;
  bride: string;
  date: string;
  time: string;
  place: string;
  message: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        bgcolor: "#fbffe9", // 전체 배경색
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 가운데 카드(모바일 화면) */}
      <Box
        sx={{
          width: { xs: "100vw", sm: 400 },
          height: { xs: "100vh", sm: 700 },
          bgcolor: "#f5f5f5",
          boxShadow: { sm: 6 },
          borderRadius: { sm: 4 },
          overflow: "hidden",
          position: "relative",
          my: { xs: 0, sm: 4 },
        }}
      >
        <Swiper
          direction="vertical"
          slidesPerView={1}
          mousewheel
          effect="slide"
          pagination={{ clickable: true }}
          modules={[Mousewheel, EffectFade, Pagination]}
          style={{ width: "100%", height: "100%" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {/* 인트로 섹션 */}
          <SwiperSlide>
            <SectionBox>
              {/* 신랑/신부 이미지 */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    width: "270px",
                    height: "270px",
                  }}
                >
                  <Image
                    src="/images/couple1.jpg"
                    alt="결혼식 초대장"
                    style={{ objectFit: "cover" }}
                    width={270}
                    height={270}
                  />
                </Box>
                <Box
                  sx={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    width: "270px",
                    height: "270px",
                  }}
                >
                  <Image
                    src="/images/couple1.jpg"
                    alt="결혼식 초대장"
                    style={{ objectFit: "cover" }}
                    width={270}
                    height={270}
                  />
                </Box>
              </Box>
            </SectionBox>
          </SwiperSlide>
          {/* 장소 섹션 */}
          <SwiperSlide>
            <SectionBox>
              <Box
                textAlign="center"
                sx={{
                  "& .MuiTypography-root": {
                    fontFamily: "Noto Sans KR",
                  },
                }}
              >
                <Typography fontSize={24} fontWeight={500}>
                  GILDONG & YONGHEE
                </Typography>

                <Typography fontSize={16} mt={3} px={5} color="text.secondary">
                  A successful marriage requires falling in love many times,
                  always with the same person.
                </Typography>
                <Typography fontSize={16} mt={3} px={5} color="text.secondary">
                  - Mignon McLaughlin
                </Typography>
                <Box my={3}>
                  <Image
                    src="/images/hwa.png"
                    alt="화환"
                    width={234 / 3}
                    height={100 / 3}
                  />
                </Box>
                <Typography fontSize={16} mt={3} px={5} color="text.secondary">
                  사람이 온다는 건 실은 어마어마한 일이다.
                  <br />
                  그는 그의 과거와 현재와 그리고
                  <br /> 그의 미래와 함께 오기 때문이다.
                  <br /> 한 사람의 일생이 오기 때문이다.
                </Typography>
                <Typography fontSize={16} mt={3} px={5} color="text.secondary">
                  - 정현종, '방문객'
                </Typography>
                <Typography fontSize={16} mt={3} px={5} color="text.secondary">
                  저희 두 사람이 함께하는 새로운 시작에 귀한 발걸음으로 축복해
                  주시면 감사하겠습니다.
                </Typography>
                <Typography fontSize={16} mt={3} px={5} color="text.secondary">
                  <br />
                  신랑 홍길동 · 신부 김영희
                </Typography>
              </Box>
            </SectionBox>
          </SwiperSlide>
          {/* 꽉찬 사진 */}
          <SwiperSlide>
            <SectionBox>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/couple1.jpg"
                  alt="결혼식 초대장"
                  style={{ objectFit: "cover" }}
                  width={400}
                  height={700}
                />
              </Box>
            </SectionBox>
          </SwiperSlide>
          {/* 날짜 */}
          <SwiperSlide>
            <SectionBox>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <AnimatePresence mode="wait">
                  {activeIndex === 3 && (
                    <>
                      <motion.div
                        key="2026"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{ width: "100%" }}
                      >
                        <Typography
                          fontSize={56}
                          sx={{
                            fontFamily: `'Dancing Script', cursive`,
                            color: "#b71c1c",
                            textAlign: "center",
                            lineHeight: 1.1,
                          }}
                        >
                          2026
                        </Typography>
                      </motion.div>
                      <motion.div
                        key="Nov"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        style={{ width: "100%" }}
                      >
                        <Typography
                          fontSize={48}
                          sx={{
                            fontFamily: `'Dancing Script', cursive`,
                            color: "#b71c1c",
                            textAlign: "center",
                            lineHeight: 1.1,
                          }}
                        >
                          Nov
                        </Typography>
                      </motion.div>
                      <motion.div
                        key="23"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.9 }}
                        style={{ width: "100%" }}
                      >
                        <Typography
                          fontSize={56}
                          sx={{
                            fontFamily: `'Dancing Script', cursive`,
                            color: "#b71c1c",
                            textAlign: "center",
                            lineHeight: 1.1,
                          }}
                        >
                          23
                        </Typography>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </Box>
            </SectionBox>
          </SwiperSlide>
          {/* 달력 섹션 */}
          <SwiperSlide>
            <SectionBox>
              <Box>
                <Typography
                  fontSize={24}
                  fontWeight={500}
                  textAlign="center"
                  mb={4}
                >
                  WEDDING DAY
                </Typography>
                <CustomCalendar date={date} />
                <CountDown date={date} />
              </Box>
            </SectionBox>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}
