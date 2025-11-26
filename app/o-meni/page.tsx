import { Sparkles, Heart, Palette, Lightbulb } from "lucide-react";

export const metadata = {
  title: "O meni",
  description:
    "Upoznajte Daniela - kreatora koji dizajnom daje život svakodnevnim predmetima",
};

export default function OMeniPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Zdravo! 👋
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Ja sam <span className="font-bold text-primary">Daniel</span>,
            zaljubljenik u dizajn, boje i izražavanje kroz svakodnevne predmete.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Moj brend je nastao iz želje da spojim{" "}
              <strong>umetnost i funkcionalnost</strong> – da svaki proizvod
              koji koristiš bude i vizuelno inspirativan.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Verujem da svaki predmet može da nosi priču. Bilo da je to šolja
              za jutarnju kafu, majica koja odražava tvoj stil, ili ceger koji
              te prati na putovanjima – svaki proizvod ima potencijal da bude
              više od onoga što jeste.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Moji dizajni su inspirisani svakodnevnim trenucima, emocijama i
              idejama koje pokreću. Svaki print, svaka boja, svaki detalj –
              kreiran je s ljubavlju i pažnjom.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Moj pristup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Originalnost</h3>
              <p className="text-gray-600">
                Svaki dizajn je jedinstven. Nema šablona, samo autentična
                kreativnost i lični pečat.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kreativnost</h3>
              <p className="text-gray-600">
                Kreirano s ljubavlju – svaki proizvod nosi moju posvećenost
                detalju i estetici.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inspiracija</h3>
              <p className="text-gray-600">
                Dizajni inspirisani svakodnevnim trenucima, prirodom i emocijama
                koje nas okružuju.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Individualnost</h3>
              <p className="text-gray-600">
                Proizvodi koji ti omogućavaju da izraziš svoju ličnost i
                jedinstveni stil.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Šta kreiram?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  👕
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Unikatne majice</h3>
                <p className="text-gray-600">
                  Svaki print priča priču – nosi svoje emocije i stil direktno
                  na sebi.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ☕
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Šolje sa dizajnom</h3>
                <p className="text-gray-600">
                  Svako jutro počinje lepše uz šolju koja te inspiriše.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  🎒
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Cegeri i torbe</h3>
                <p className="text-gray-600">
                  Praktični i stilski – savršen spoj funkcionalnosti i dizajna.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✨
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">I još mnogo toga...</h3>
                <p className="text-gray-600">
                  Konstantno kreiram nove dizajne i istražujem nove proizvode.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Pronađi nešto što odgovara tvom stilu
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Unikatni printovi, kreirani s ljubavlju, štampani po porudžbini
          </p>
          <a
            href="https://www.zazzle.com/store/designer02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Poseti moju prodavnicu na Zazzle
          </a>
        </div>
      </div>
    </main>
  );
}
