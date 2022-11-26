import { createRef } from "preact";
import { useEffect } from "preact/hooks";
import BarsArrowDown from "./icons/BarsArrowDown";
import BarsArrowUp from "./icons/BarsArrowUp";

export interface Props {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function Controls({ collapsed, setCollapsed }: Props) {
  const timeRef = createRef<HTMLSpanElement>();
  useEffect(() => {
    const timeElement = timeRef.current;
    if (!timeElement) return;
    const interval = setInterval(() => {
      const date = new Date();
      timeElement.innerText = Intl.DateTimeFormat([...navigator.languages], { timeStyle: 'medium', dateStyle: 'medium' }).format(date);
    });
    return () => clearInterval(interval);
  });

  return (
    <div className={`flex items-center ${collapsed ? 'justify-between' : 'justify-end'} gap-x-4 mb-4`}>
      <span className={collapsed ? 'shown' : 'hidden'} ref={timeRef} />
      <button className="hover:text-palette-cyan" onClick={() => { setCollapsed(!collapsed) }}>
        {
          collapsed ? (
            <BarsArrowDown className="w-6 h-6" />
          ) : (
            <BarsArrowUp className="w-6 h-6" />
          )
        }
      </button>
    </div>
  )
}