"use client";

import React, { useState } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  Divider,
  Avatar,
  IconButton,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  Check,
  DateRange,
  Edit,
  Image,
  Language,
  LocationOn,
  Person,
  Save,
  Slideshow,
  Style,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const SettingPage = () => {
  const [weddingDate, setWeddingDate] = useState<Date | null>(
    new Date("2024-12-25T13:00:00")
  );
  const [domainAvailable, setDomainAvailable] = useState<boolean | null>(null);
  const [domain, setDomain] = useState("");
  const [showSlides, setShowSlides] = useState(true);
  const [showMap, setShowMap] = useState(true);
  const [showCalendar, setShowCalendar] = useState(true);
  const [showCountdown, setShowCountdown] = useState(true);
  const [template, setTemplate] = useState("classic");

  const checkDomainAvailability = () => {
    // 실제로는 API 호출이 필요하지만, 여기서는 간단히 구현
    setTimeout(() => {
      setDomainAvailable(
        domain.length > 3 && !["wedding", "love", "admin"].includes(domain)
      );
    }, 500);
  };

  return (
    <Box sx={{ pb: 8, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* 헤더 */}
      <Box
        sx={{
          p: 3,
          bgcolor: "#fff",
          display: "flex",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            청첩장 설정
          </Typography>
          <Typography variant="body2" color="text.secondary">
            청첩장 정보를 입력하고 관리하세요
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Save />}
          sx={{ borderRadius: 2 }}
        >
          저장
        </Button>
      </Box>

      {/* 도메인 설정 */}
      <Box sx={{ bgcolor: "#fff", mb: 2, p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
          청첩장 주소 설정
        </Typography>

        <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
          <TextField
            label="도메인 이름"
            value={domain}
            onChange={(e) => {
              setDomain(e.target.value);
              setDomainAvailable(null);
            }}
            size="small"
            sx={{ flexGrow: 1, mr: 1 }}
            helperText={
              domainAvailable === true
                ? "사용 가능한 주소입니다"
                : domainAvailable === false
                ? "이미 사용 중인 주소입니다"
                : "영문, 숫자 조합 3자 이상"
            }
            FormHelperTextProps={{
              sx: {
                color:
                  domainAvailable === true
                    ? "success.main"
                    : domainAvailable === false
                    ? "error.main"
                    : "text.secondary",
              },
            }}
          />
          <Button
            variant="outlined"
            onClick={checkDomainAvailability}
            sx={{ height: 40 }}
          >
            중복확인
          </Button>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          https://wedding.com/{domain || "your-name"}
        </Typography>
      </Box>

      {/* 신랑신부 정보 */}
      <Box sx={{ bgcolor: "#fff", mb: 2, p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
          신랑 & 신부 정보
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            신랑 정보
          </Typography>
          <TextField
            label="신랑 이름"
            defaultValue="홍길동"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
          />
          <TextField
            label="신랑측 혼주 (아버지)"
            defaultValue="길동부"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
          />
          <TextField
            label="신랑측 혼주 (어머니)"
            defaultValue="길동모"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
          />
          <TextField
            label="신랑 연락처"
            defaultValue="010-1234-5678"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            신부 정보
          </Typography>
          <TextField
            label="신부 이름"
            defaultValue="김영희"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
          />
          <TextField
            label="신부측 혼주 (아버지)"
            defaultValue="영희부"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
          />
          <TextField
            label="신부측 혼주 (어머니)"
            defaultValue="영희모"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
          />
          <TextField
            label="신부 연락처"
            defaultValue="010-9876-5432"
            fullWidth
            variant="outlined"
            size="small"
            margin="dense"
          />
        </Box>
      </Box>

      {/* 예식 정보 */}
      <Box sx={{ bgcolor: "#fff", mb: 2, p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
          예식 정보
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="예식 일시"
            value={weddingDate}
            onChange={(newValue: Date | null) => setWeddingDate(newValue)}
            sx={{ width: "100%", mb: 2 }}
          />
        </LocalizationProvider>

        <TextField
          label="예식장 이름"
          defaultValue="행복한 웨딩홀"
          fullWidth
          variant="outlined"
          size="small"
          margin="dense"
        />

        <TextField
          label="예식장 주소"
          defaultValue="서울시 강남구 테헤란로 123"
          fullWidth
          variant="outlined"
          size="small"
          margin="dense"
        />

        <TextField
          label="오시는 길 안내"
          defaultValue="2호선 강남역 3번 출구에서 도보 5분"
          fullWidth
          variant="outlined"
          size="small"
          margin="dense"
          multiline
          rows={2}
        />
      </Box>

      {/* 청첩장 구성 설정 */}
      <Box sx={{ bgcolor: "#fff", mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ p: 2, pb: 1 }}>
          청첩장 구성 설정
        </Typography>

        <List disablePadding>
          <ListItem>
            <ListItemIcon>
              <Style />
            </ListItemIcon>
            <ListItemText primary="템플릿 스타일" />
            <Select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              size="small"
              sx={{ width: 120 }}
            >
              <MenuItem value="classic">클래식</MenuItem>
              <MenuItem value="modern">모던</MenuItem>
              <MenuItem value="romantic">로맨틱</MenuItem>
              <MenuItem value="minimal">미니멀</MenuItem>
            </Select>
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemIcon>
              <Slideshow />
            </ListItemIcon>
            <ListItemText
              primary="포토 슬라이드"
              secondary="신랑신부 사진 슬라이드 표시"
            />
            <Switch
              checked={showSlides}
              onChange={() => setShowSlides(!showSlides)}
              edge="end"
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText
              primary="지도 표시"
              secondary="예식장 위치 지도 표시"
            />
            <Switch
              checked={showMap}
              onChange={() => setShowMap(!showMap)}
              edge="end"
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemIcon>
              <DateRange />
            </ListItemIcon>
            <ListItemText primary="달력 표시" secondary="예식일 달력 표시" />
            <Switch
              checked={showCalendar}
              onChange={() => setShowCalendar(!showCalendar)}
              edge="end"
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemIcon>
              <DateRange />
            </ListItemIcon>
            <ListItemText
              primary="카운트다운 표시"
              secondary="예식일까지 남은 일수 표시"
            />
            <Switch
              checked={showCountdown}
              onChange={() => setShowCountdown(!showCountdown)}
              edge="end"
            />
          </ListItem>
        </List>
      </Box>

      {/* 공개 설정 */}
      <Box sx={{ bgcolor: "#fff" }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ p: 2, pb: 1 }}>
          공개 설정
        </Typography>

        <List disablePadding>
          <ListItem>
            <ListItemIcon>
              {domain && domainAvailable ? <Visibility /> : <VisibilityOff />}
            </ListItemIcon>
            <ListItemText
              primary="청첩장 공개 상태"
              secondary={domain && domainAvailable ? "공개중" : "비공개"}
            />
            <Button
              variant="contained"
              color={domain && domainAvailable ? "success" : "primary"}
              size="small"
              disabled={!domain || !domainAvailable}
            >
              {domain && domainAvailable ? "공개중" : "공개하기"}
            </Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SettingPage;
