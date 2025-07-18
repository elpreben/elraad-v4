export default function Button({ children, className, variant = "primary", ...props }) {
  const base = "rounded-xl px-4 py-2 font-semibold transition w-full";
  const styles = variant === "secondary"
    ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
    : "bg-blue-600 text-white hover:bg-blue-700";
  return <button className={`${base} ${styles} ${className || ""}`} {...props}>{children}</button>;
}