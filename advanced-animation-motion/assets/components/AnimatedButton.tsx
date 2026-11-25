import type { ButtonHTMLAttributes } from "react";
export function AnimatedButton({className = "", type = "button", ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} type={type} className={`am-button ${className}`} />;
}
