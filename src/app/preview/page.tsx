import { Box } from "@mui/material";
import PreviewPage from "@/component/maker/PreviewPage";
import { ClientLayout } from "../ClientLayout";
import { Suspense } from "react";
import LoadingPage from "@/component/loading/LoadingPage";
export default function Maker() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <PreviewPage />
    </Suspense>
  );
}
