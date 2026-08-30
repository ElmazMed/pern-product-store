import { Palette } from "lucide-react";
import { THEMES } from "../constants";

function ThemSelector() {
  const theme = "forest";
  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <Palette />
      </button>
      <div
        tabIndex={0}
        className="dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrpo-blur-lg rounded-2xl w-56 border border-base-content/10"
      >
        {THEMES.map((themeOption) => (
          <button
            key={themeOption.name}
            className={`w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${theme === themeOption.name ? "bg-primary/10 text-primary" : "hover:bg-base-content/5"}`}
          >
            <Palette className="size-4" />
            <span className="text-sm font-medium">{themeOption.label}</span>
            <div className="ml-auto flex gap-1">
              {themeOption.colors.map((color, i) => (
                <span
                  key={i}
                  className="rounded-full size-2"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemSelector;
