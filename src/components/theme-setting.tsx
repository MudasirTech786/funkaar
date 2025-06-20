'use client';
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ThemeSetting = () => {
  const { setTheme } = useTheme();
  const [settingOpen, setSettingOpen] = useState(false);

  // Force dark theme on mount
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  const handleOpenSetting = () => {
    setSettingOpen(!settingOpen);
  };

  return (
    <div
      className={`tp-theme-settings-area transition-3 ${
        settingOpen ? "settings-opened" : ""
      }`}
    >
      <div className="tp-theme-wrapper">
        <div className="tp-theme-header text-center">
          <h4 className="tp-theme-header-title">Liko Mode Settings</h4>
        </div>

        {/* Remove or comment this block if you no longer need direction toggle */}
        {/* <div className="tp-theme-dir mb-20"> ... </div> */}

        <div className="tp-theme-settings">
          <div className="tp-theme-settings-wrapper">
            <div className="tp-theme-settings-open">
              <button
                className="tp-theme-settings-open-btn"
                onClick={handleOpenSetting}
              >
                <span className="tp-theme-settings-gear">
                  <i className="fa-light fa-gear"></i>
                </span>
                <span className="tp-theme-settings-close">
                  <i className="fa-regular fa-xmark"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ThemeSetting), {
  ssr: false,
});
