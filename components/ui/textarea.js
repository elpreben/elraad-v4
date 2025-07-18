export default function Textarea(props) {
  return <textarea {...props} className={`w-full border rounded-xl p-2 h-32 resize-none focus:outline-none focus:ring focus:border-blue-500 ${props.className || ""}`} />;
}