// npm
import { useState } from "react";

export default function useModal() {
  // local state
  const [isShowing, setIsShowing] = useState(false);

  // methods
  function toggle() {
    setIsShowing(!isShowing);
  }

  return { isShowing, toggle };
}
