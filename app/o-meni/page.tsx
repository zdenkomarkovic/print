import Image from "next/image";
import { Sparkles, Heart, Award, TrendingUp } from "lucide-react";

export const metadata = {
  title: "O meni",
  description: "Upoznajte DESIGNER 02 STORE - vaš partnera za jedinstvene dizajnerske proizvode",
};

export default function OMeniPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            O nama
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DESIGNER 02 STORE - Gde stil susreće kvalitet
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dobrodošli u DESIGNER 02 STORE, vašu destinaciju za pažljivo
              odabrane dizajnerske proizvode koji spajaju funkcionalnost,
              estetiku i kvalitet.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Naša misija je da vam omogućimo pristup jedinstvenim proizvodima
              koji odražavaju vaš stil i ličnost. Svaki proizvod u našoj
              ponudi je pažljivo odabran, sa posebnom pažnjom posvećenom
              kvalitetu, dizajnu i funkcionalnosti.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Verujemo da odlični proizvodi mogu unaprediti svakodnevni život,
              i zato smo posvećeni tome da vam pružimo najbolje iskustvo
              kupovine - od trenutka kada posetite našu online prodavnicu, pa
              sve do momenta kada vaša porudžbina stigne na vaša vrata.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Naše vrednosti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kvalitet</h3>
              <p className="text-gray-600">
                Samo pažljivo odabrani proizvodi vrhunskog kvaliteta nalaze
                mesto u našoj ponudi.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Posvećenost</h3>
              <p className="text-gray-600">
                Vaše zadovoljstvo je naš prioritet. Trudimo se da svaki aspekt
                vaše kupovine bude savršen.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ekskluzivnost</h3>
              <p className="text-gray-600">
                Nudimo jedinstvene proizvode koje nećete lako pronaći na
                drugom mestu.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inovacija</h3>
              <p className="text-gray-600">
                Pratimo najnovije trendove i kontinuirano proširujemo našu
                ponudu.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Zašto odabrati nas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Pažljivo odabrani proizvodi
                </h3>
                <p className="text-gray-600">
                  Svaki proizvod prolazi strogi proces selekcije kako bismo
                  garantovali kvalitet.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Brza dostava</h3>
                <p className="text-gray-600">
                  Vaša porudžbina stiže brzo i sigurno direktno na vašu
                  adresu.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Podrška kupcima</h3>
                <p className="text-gray-600">
                  Naš tim je uvek tu da odgovori na vaša pitanja i pomogne
                  vam.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sigurna kupovina</h3>
                <p className="text-gray-600">
                  Vaši podaci i transakcije su potpuno zaštićeni.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Spremni da istražite našu kolekciju?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Otkrijte jedinstvene proizvode koji će obogatiti vaš životni stil
          </p>
          <a
            href="/proizvodi"
            className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Pogledajte proizvode
          </a>
        </div>
      </div>
    </main>
  );
}
