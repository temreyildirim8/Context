import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
