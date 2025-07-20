
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sender...");
    try {
      const res = await fetch("https://hooks.zapier.com/hooks/catch/17001346/3r6w6lx/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: problem })
      });
      setStatus(res.ok ? "✅ Svar sendt!" : "❌ Feil under sending");
    } catch {
      setStatus("❌ Feil under sending");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <Head>
        <title>Elråd.no – Din digitale elektriker</title>
      </Head>

      <header className="py-8 bg-white shadow">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-700">⚡ Elråd.no</h1>
          <p className="text-gray-600 mt-2">Gratis AI-råd om elektriske problemer</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">📋 Beskriv problemet ditt</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              className="w-full border rounded-lg p-3"
              rows="4"
              placeholder="F.eks. sikringen til badet går ofte..."
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              required
            />
            <input
              type="email"
              className="w-full border rounded-lg p-3"
              placeholder="Din e-post"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send inn og få svar
            </button>
            {status && <p className="mt-2 text-sm">{status}</p>}
          </form>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">⚙️ Hva får du?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>AI-generert svar tilpasset ditt problem</li>
            <li>Estimert pris og alvorlighetsgrad</li>
            <li>Mulighet for hjemmebesøk</li>
          </ul>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Elråd.no – En tjeneste av Preben Nygård
      </footer>
    </div>
  );
}
