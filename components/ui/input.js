export default function Input(props) {
  return <input {...props} className={`w-full border rounded-xl p-2 focus:outline-none focus:ring focus:border-blue-500 ${props.className || ""}`} />;
}