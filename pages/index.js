
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Elråd.no</h1>
          <p className="text-xl text-gray-700">
            Få gratis feilsøkingsråd for elektriske problemer i hjemmet ditt – levert på e-post.
          </p>
        </header>

        <div className="shadow-lg bg-white rounded-lg p-6 mb-12">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSf3zgheCnQV22q-Vs4GqaViTlL7QtKEV_UxVDyha7v9wgei8A/viewform?embedded=true" 
            width="100%" 
            height="1200px" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0">
            Laster skjema…
          </iframe>
        </div>

        <footer className="mt-12 text-sm text-gray-500 text-center">
          © 2025 Elråd.no – En tjeneste av Preben Nygård
        </footer>
      </div>
    </div>
  );
}
