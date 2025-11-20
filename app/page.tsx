import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import AloeVeraInfo from "@/components/AloeVeraInfo";
import {
  getAllCategories,
  getFeaturedProducts,
  getBestsellerProducts,
  getFeaturedBlogPosts,
} from "@/lib/sanity.queries";
import { urlFor } from "@/sanity/image";
import {
  Leaf,
  Heart,
  Shield,
  Sparkles,
  Calendar,
  User,
  ArrowRight,
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
      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="">
          <div className="container mx-auto px-4 md:px-8">
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
        <section className="">
          <div className="container mx-auto px-4 md:px-8">
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
        <section className="">
          <div className="container mx-auto px-4 md:px-8">
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
