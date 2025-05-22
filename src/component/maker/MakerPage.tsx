import React from "react";
import ClassicTemplate from "./templates/ClassicTemplate";

const MakerPage = () => {
  return (
    <div>
      <ClassicTemplate
        groom="김철수"
        bride="이영희"
        date="2026-09-19 11:00:00"
        time="오전 10시"
        place="오픈카페"
        message="오픈카페에서 결혼식을 진행합니다."
      />
    </div>
  );
};

export default MakerPage;
