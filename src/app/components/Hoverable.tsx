"use client";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Hoverable({ children, className = "" }: Props) {
  const handleHover = (isHovering: boolean) => {
    window.dispatchEvent(
      new CustomEvent("cursor-hover", { detail: { isHovering } })
    );
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className={`block ${className}`} // ⬅️ حالا block هست نه inline-block
    >
      {children}
    </div>
  );
}
