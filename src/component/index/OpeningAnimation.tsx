import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface CurtainOpeningProps {
  onFinish: () => void;
}

export default function OpeningAnimation({ onFinish }: CurtainOpeningProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1200); // 애니메이션 시간과 맞춤
    return () => clearTimeout(timer);
  }, [onFinish]);

  const silkLaceBgLeft =
    "linear-gradient(120deg, #fff0f6 60%, #e3c6c6 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.13) 0 2px, transparent 2px 14px), url('https://www.transparenttextures.com/patterns/lace.png')";
  const silkLaceBgRight =
    "linear-gradient(-120deg, #fff0f6 60%, #e3c6c6 100%), repeating-linear-gradient(270deg, rgba(255,255,255,0.13) 0 2px, transparent 2px 14px), url('https://www.transparenttextures.com/patterns/lace.png')";

  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2000,
          pointerEvents: "none",
        }}
      >
        {/* 왼쪽 커튼 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "52vw",
            height: "100vh",
            background: silkLaceBgLeft,
            backgroundBlendMode: "overlay",

            overflow: "hidden",
            filter: "brightness(1.04)",
          }}
        />
        {/* 오른쪽 커튼 */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "52vw",
            height: "100vh",
            background: silkLaceBgRight,
            backgroundBlendMode: "overlay",

            overflow: "hidden",
            filter: "brightness(1.04)",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
