import { Close } from "@mui/icons-material";
import React, { useState } from "react";

const Anno = () => {
  const [aStyle, setAStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex items-center justify-center"
  );

  const handleClose = () => {
    setAStyle(aStyle + " hidden");
  };

  return (
    <div className={aStyle}>
      <h2>Hurry up it's 40% off now</h2>
      <Close className="cursor-pointer" onClick={handleClose} />
    </div>
  );
};

export default Anno;
