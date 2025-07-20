
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [form, setForm] = useState({
    problem: "",
    housing: "",
    email: "",
    file: null
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sender...");
    const data = new FormData();
    data.append("problem", form.problem);
    data.append("housing", form.housing);
    data.append("email", form.email);
    if (form.file) data.append("file", form.file);

    try {
      const res = await fetch("https://hooks.zapier.com/hooks/catch/17001346/3r6w6lx/", {
        method: "POST",
        body: data
      });
      setStatus(res.ok ? "✅ Svar sendt!" : "❌ Feil under sending");
    } catch {
      setStatus("❌ Feil under sending");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <Head>
        <title>Elråd.no – Digital hjelp til el-problemer</title>
      </Head>
      <header className="py-8 bg-white shadow">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-blue-700">⚡ Elråd.no</h1>
          <p className="text-gray-600 mt-2">Få digitale AI-råd om elektriske problemer i hjemmet ditt</p>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-medium block mb-1">📋 Hva gjelder problemet? Gi en kort beskrivelse.</label>
              <textarea name="problem" required rows="3" className="w-full border rounded-lg p-3" onChange={handleChange} />
            </div>
            <div>
              <label className="font-medium block mb-1">🏠 Hva slags bolig er det, og når ble det elektriske anlegget installert? Har det vært oppgraderinger eller renoveringer?</label>
              <textarea name="housing" required rows="3" className="w-full border rounded-lg p-3" onChange={handleChange} />
            </div>
            <div>
              <label className="font-medium block mb-1">📷 Last gjerne opp et bilde som viser problemet</label>
              <input name="file" type="file" accept="image/*" className="block" onChange={handleChange} />
            </div>
            <div>
              <label className="font-medium block mb-1">✉️ Din e-postadresse (for å sende deg AI-beregnet svar)</label>
              <input name="email" type="email" required className="w-full border rounded-lg p-3" onChange={handleChange} />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Send inn og få svar</button>
            {status && <p className="mt-2 text-sm">{status}</p>}
          </form>
        </section>
      </main>
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Elråd.no – En tjeneste av Preben Nygård
      </footer>
    </div>
  );
}
