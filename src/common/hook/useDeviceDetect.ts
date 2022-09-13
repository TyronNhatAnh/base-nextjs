import React from "react";

const useDeviceDetect = () => {
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent = window?.navigator?.userAgent || "";
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
      ),
    );
    setMobile(mobile);
  }, []);

  return {isMobile};
};

export default useDeviceDetect;
