import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Kontakt",
  description: "Kontaktirajte nas za sve informacije o Aloe Vera proizvodima",
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Pošaljite nam poruku</h2>
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
      </div>
    </main>
  );
}
