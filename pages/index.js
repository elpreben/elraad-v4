import { useState } from "react";
import Card from "../components/ui/card";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Textarea from "../components/ui/textarea";

export default function Home() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sender");

    try {
      const res = await fetch("https://hooks.zapier.com/hooks/catch/17001346/3r6w6lx/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, email }),
      });

      if (res.ok) setStatus("ok");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Elråd.no</h1>
          <p className="text-xl text-gray-700">
            Få gratis feilsøkingsråd for elektriske problemer i hjemmet ditt – levert på e-post.
          </p>
        </header>

        <Card className="mb-8 shadow-lg">
          <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">📋 Send inn problemet</h2>
            <Textarea
              placeholder="F.eks. sikringen til badet går ofte..."
              className="mb-4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Input
              type="text"
              placeholder="E-post eller telefon"
              className="mb-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full text-lg py-3">
              {status === "sender" ? "Sender..." : "Få gratis AI-svar"}
            </Button>
            {status === "ok" && <p className="text-green-600 mt-4">Svar sendt! Du får det på e-post.</p>}
            {status === "error" && <p className="text-red-600 mt-4">Noe gikk galt. Prøv igjen.</p>}
          </form>
        </Card>

        <Card className="mb-8 shadow-md">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">⚡ Hva får du?</h2>
            <ul className="list-disc list-inside text-left text-gray-700 text-lg">
              <li>AI-generert svar på problemet ditt</li>
              <li>Enkelt språk og nyttige råd</li>
              <li>Estimat for pris og omfang</li>
              <li>Mulighet for å bestille hjelp</li>
            </ul>
          </div>
        </Card>

        <Card className="shadow-sm">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Trenger du elektriker på stedet?</h2>
            <Button variant="secondary" className="text-base py-2">Bestill hjemmebesøk</Button>
          </div>
        </Card>

        <footer className="mt-12 text-sm text-gray-500 text-center">
          © 2025 Elråd.no – En tjeneste av Preben Nygård
        </footer>
      </div>
    </div>
  );
}
// Trigger production deploy



