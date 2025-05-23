"use client";

import {
  CloseFullscreen,
  HideImage,
  Home,
  Menu,
  Minimize,
  MoreHoriz,
  OfflineBolt,
  Preview,
  Settings,
  ViewAgenda,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Fab,
  Tooltip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useNavBarStore } from "@/store/NavBarStore";

export const NavBar = () => {
  const router = useRouter();
  const { miniMode, setMiniMode } = useNavBarStore();

  return (
    <>
      <AnimatePresence>
        {!miniMode && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            key="nav-bar"
          >
            <BottomNavigation
              showLabels
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100vw",
                zIndex: 1100,
                background: "#fff",
                height: 64,
                transition: "height 0.2s",
              }}
            >
              <BottomNavigationAction
                key={"설정"}
                label={"설정"}
                icon={<Settings />}
                onClick={() => {
                  router.push("/settings");
                }}
              />
              <BottomNavigationAction
                key={"preview"}
                label={"미리보기"}
                icon={<ViewAgenda />}
                onClick={() => {
                  router.push("/preview");
                }}
              />
              <BottomNavigationAction
                key={"hide"}
                label={"메뉴숨기기"}
                icon={<CloseFullscreen />}
                onClick={() => setMiniMode(true)}
              />
            </BottomNavigation>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {miniMode && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            key="floating-menu"
            style={{
              position: "fixed",
              bottom: 10,
              left: "calc(50% - 24px)",
              transform: "translateX(-50%)",
              display: "flex",
              zIndex: 1200,
            }}
          >
            <Fab
              size="medium"
              color="info"
              onClick={() => setMiniMode(false)}
              sx={{ boxShadow: 3 }}
            >
              <Menu />
            </Fab>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
