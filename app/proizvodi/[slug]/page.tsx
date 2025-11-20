import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/lib/sanity.queries";
import { PortableText } from "@portabletext/react";
import { Check, X, Package, Mail, MessageCircle } from "lucide-react";
import ProductImageGallery from "@/components/ProductImageGallery";
import { portableTextComponents } from "@/components/PortableTextComponents";
import ProductActions from "@/components/ProductActions";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Dynamic rendering
export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">
            Početna
          </Link>
          <span className="mx-2">/</span>
          <Link href="/proizvodi" className="hover:text-primary">
            Prodavnica
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/proizvodi?kategorija=${product.category.slug.current}`}
            className="hover:text-primary"
          >
            {product.category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <ProductImageGallery
              images={product.images}
              productName={product.name}
              badges={{
                new: product.new,
                bestseller: product.bestseller,
                discount: discount,
              }}
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Link
                href={`/proizvodi?kategorija=${product.category.slug.current}`}
                className="text-primary/70 hover:text-primary font-medium text-sm"
              >
                {product.category.name}
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {product.name}
            </h1>

            {product.volume && (
              <p className="text-gray-600 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                {product.volume}
              </p>
            )}

            {product.shortDescription && (
              <p className="text-lg text-gray-700 mb-6">
                {product.shortDescription}
              </p>
            )}

            {/* Price */}
            <div className="mb-6 pb-6 border-b">
              {product.oldPrice && (
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl text-gray-400 line-through">
                    {product.oldPrice.toLocaleString("sr-RS")} RSD
                  </span>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Ušteda{" "}
                    {(product.oldPrice - product.price).toLocaleString("sr-RS")}{" "}
                    RSD
                  </span>
                </div>
              )}
              <div className="text-4xl font-bold text-primary">
                {product.price.toLocaleString("sr-RS")} RSD
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Dostupno</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <X className="w-5 h-5" />
                  <span className="font-semibold">Trenutno nedostupno</span>
                </div>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            {product.inStock && (
              <div className="mb-6">
                <ProductActions product={product} />
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-4 mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-bold text-primary mb-4 text-lg">
                  Kontaktirajte nas za porudžbinu:
                </h3>

                {/* Email Button */}
                <a
                  href="mailto:danielcreator2025@outlook.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all mb-3"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow text-left">
                    <div className="font-semibold text-gray-900">
                      Email
                    </div>
                    <div className="text-sm text-gray-600">
                      danielcreator2025@outlook.com
                    </div>
                  </div>
                </a>

                {/* Phone Button */}
                <a
                  href="tel:+381637586420"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-grow text-left">
                    <div className="font-semibold text-gray-900">
                      Telefon
                    </div>
                    <div className="text-sm text-gray-600">+381 63 758 6420</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Description */}
          {product.description && (
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-700">
                <PortableText
                  value={product.description}
                  components={portableTextComponents}
                />
              </div>
            </div>
          )}

          {/* Sidebar Info */}
          <div className="space-y-6">
            {product.ingredients && (
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Materijali
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {product.ingredients}
                </p>
              </div>
            )}

            {product.usage && (
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Detalji
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {product.usage}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
