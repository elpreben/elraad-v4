
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <Head>
        <title>Elråd.no – Din digitale elektriker</title>
      </Head>

      <header className="py-8 shadow-sm bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700">⚡ Elråd.no</h1>
          <p className="text-sm text-gray-500 hidden md:block">Råd fra elektriker – på e-post</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        <section className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">📋 Send inn problemet ditt</h2>
          <p className="text-gray-600 mb-6">Beskriv problemet ditt og få gratis AI-baserte råd på e-post.</p>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSf3zgheCnQV22q-Vs4GqaViTlL7QtKEV_UxVDyha7v9wgei8A/viewform?embedded=true" 
            width="100%" 
            height="1200" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0">
            Laster skjema…
          </iframe>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">⚙️ Hva får du?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>AI-generert svar tilpasset problemet ditt</li>
            <li>Estimert pris og alvorlighetsgrad</li>
            <li>Enkel forklaring, nyttig for ikke-elektrikere</li>
            <li>Mulighet for hjemmebesøk</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm text-center">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">🚗 Trenger du elektriker på stedet?</h2>
          <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg transition">
            Bestill hjemmebesøk
          </button>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 Elråd.no – En tjeneste av Preben Nygård
      </footer>
    </div>
  );
}
