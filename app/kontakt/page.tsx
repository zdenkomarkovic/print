import ContactForm from "@/components/ContactForm";
import { Mail, Instagram, Facebook } from "lucide-react";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktirajte DESIGNER 02 STORE - Tu smo da odgovorimo na vaša pitanja i pomognemo vam",
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ako imaš pitanje, želiš da poručiš personalizovan proizvod, predložiš ideju za dizajn
            ili započneš saradnju – slobodno mi piši!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Informacije za kontakt</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:danielcreator2025@outlook.com"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    danielcreator2025@outlook.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="font-bold text-lg mb-4">Društvene mreže</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    title="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    title="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Pratite me za najnovije dizajne i kreacije
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Pošaljite poruku</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
