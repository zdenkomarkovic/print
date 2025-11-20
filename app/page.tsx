import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import {
  getAllCategories,
  getFeaturedProducts,
  getBestsellerProducts,
  getFeaturedBlogPosts,
} from "@/lib/sanity.queries";
import { urlFor } from "@/sanity/image";
import {
  Sparkles,
  Calendar,
  User,
  ArrowRight,
  Palette,
  Shirt,
  Coffee,
} from "lucide-react";

// Dynamic rendering
export const dynamic = "force-dynamic";

export default async function Home() {
  const categories = await getAllCategories();
  const featuredProducts = await getFeaturedProducts();
  const bestsellerProducts = await getBestsellerProducts();
  const featuredBlogPosts = await getFeaturedBlogPosts();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 md:px-8 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Tvoj stil. Tvoj izraz.
              <br />
              <span className="text-primary">Na svakom proizvodu.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Unikatni printovi na majicama, šoljama, cegerima i još mnogo toga –
              kreirano s ljubavlju, štampano po porudžbini.
            </p>
            <a
              href="https://www.zazzle.com/store/designer02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-bold px-10 py-5 rounded-full hover:bg-primary/90 transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Poseti moju prodavnicu
            </a>
          </div>
        </div>
      </section>

      {/* About Brand Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O brendu
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Mi smo mali kreativni studio koji veruje da svaki predmet može da nosi priču.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Naši dizajni su inspirisani svakodnevnim trenucima, emocijama i idejama koje pokreću.
                Svaki proizvod je osmišljen da bude više od funkcionalnog – da bude izraz individualnosti i kreativnosti.
              </p>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/o-meni"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Saznaj više o nama
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Šta možeš pronaći?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dizajni koji pričaju priču – dostupni na raznim proizvodima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* T-shirts */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shirt className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Majice</h3>
              <p className="text-gray-600 leading-relaxed">
                Nosi svoju priču. Svaki dizajn je jedinstven i priča svoju
                priču kroz boje, linije i emocije.
              </p>
            </div>

            {/* Mugs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Šolje</h3>
              <p className="text-gray-600 leading-relaxed">
                Svako jutro sa stilom. Kafa ili čaj – uvek lepši uz šolju koja
                te inspiriše.
              </p>
            </div>

            {/* Accessories */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">I mnogo više</h3>
              <p className="text-gray-600 leading-relaxed">
                Cegeri, torbe, nalepnice, posteri... Konstantno istražujem nove
                mogućnosti.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.zazzle.com/store/designer02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Istraži kolekciju
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kako funkcioniše?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Print-on-demand znači da svaki proizvod nastaje specijalno za tebe
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Izaberi dizajn</h3>
                <p className="text-gray-600">
                  Pregledaj kolekciju i pronađi dizajn koji odgovara tvom stilu
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Poruči proizvod</h3>
                <p className="text-gray-600">
                  Odaberi proizvod (majica, šolja...) i personalizuj ako želiš
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Uživaj u kreaciji</h3>
                <p className="text-gray-600">
                  Proizvod se štampa i šalje direktno tebi – jedinstven i tvoj
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kategorije proizvoda
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Istraži različite kategorije i pronađi proizvode koji odgovaraju tvom stilu
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Izdvojeni proizvodi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Naši najpopularniji i najkreativniji dizajni – pažljivo odabrani za tebe
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bestsellers Section */}
      {bestsellerProducts.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bestselleri
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Najtraženiji proizvodi koje naša zajednica obožava
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bestsellerProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Blog Posts Section */}
      {featuredBlogPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold  mb-4">
                Izdvojeni članci
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogPosts.map((post) => {
                const imageUrl = post.mainImage
                  ? urlFor(post.mainImage).width(600).height(400).url()
                  : "/placeholder-blog.jpg";

                const publishedDate = new Date(
                  post.publishedAt
                ).toLocaleDateString("sr-RS", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });

                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={post.mainImage?.alt || post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {publishedDate}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center  font-semibold group-hover:gap-2 gap-1 transition-all">
                          Pročitaj više
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="">
                <Link href="/blog">Pogledaj sve članke</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
