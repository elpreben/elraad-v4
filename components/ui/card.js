export default function Card({ children, className }) {
  return <div className={`rounded-xl shadow-md border bg-white ${className || ""}`}>{children}</div>;
}