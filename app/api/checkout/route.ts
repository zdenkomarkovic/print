import { NextResponse } from "next/server";
import { sendMail } from "@/lib/send-mail";

// Environment variable za store email
const STORE_EMAIL = process.env.STORE_EMAIL;

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  volume?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      address,
      city,
      postalCode,
      notes,
      items,
      totalPrice,
    } = body as {
      name: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      postalCode: string;
      notes?: string;
      items: CartItem[];
      totalPrice: number;
    };

    // Validate environment variables
    if (!STORE_EMAIL) {
      console.error("STORE_EMAIL environment variable is not set");
      return NextResponse.json(
        { error: "Server konfiguracija nije kompletna" },
        { status: 500 }
      );
    }

    // Validate required fields
    if (!name || !email || !phone || !address || !city || !postalCode) {
      return NextResponse.json(
        { error: "Sva obavezna polja moraju biti popunjena" },
        { status: 400 }
      );
    }

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Korpa ne može biti prazna" },
        { status: 400 }
      );
    }

    // Create order summary HTML
    const itemsHtml = items
      .map(
        (item: CartItem) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
          <strong>${item.name}</strong><br />
          <span style="color: #6b7280; font-size: 14px;">${item.volume || ""}</span>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">
          ${item.quantity}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">
          ${item.price.toLocaleString("sr-RS")} RSD
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">
          <strong>${(item.price * item.quantity).toLocaleString("sr-RS")} RSD</strong>
        </td>
      </tr>
    `
      )
      .join("");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nova porudžbina - DESIGNER 02 STORE</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Nova Porudžbina!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">DESIGNER 02 STORE</p>
          </div>

          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1a3a52; margin-top: 0;">Informacije o kupcu</h2>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Ime:</strong></td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1a3a52;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Telefon:</strong></td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #1a3a52;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Adresa:</strong></td>
                <td style="padding: 8px 0;">${address}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Grad:</strong></td>
                <td style="padding: 8px 0;">${city}, ${postalCode}</td>
              </tr>
              ${
                notes
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280; vertical-align: top;"><strong>Napomena:</strong></td>
                <td style="padding: 8px 0;">${notes}</td>
              </tr>
              `
                  : ""
              }
            </table>

            <h2 style="color: #1a3a52; margin-top: 30px;">Poručeni proizvodi</h2>
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <thead>
                <tr style="background: #1a3a52; color: white;">
                  <th style="padding: 12px; text-align: left;">Proizvod</th>
                  <th style="padding: 12px; text-align: center;">Količina</th>
                  <th style="padding: 12px; text-align: right;">Cena</th>
                  <th style="padding: 12px; text-align: right;">Ukupno</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
                <tr style="background: #f3f4f6; font-weight: bold;">
                  <td colspan="3" style="padding: 16px; text-align: right;">UKUPNO:</td>
                  <td style="padding: 16px; text-align: right; color: #1a3a52; font-size: 18px;">
                    ${totalPrice.toLocaleString("sr-RS")} RSD
                  </td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top: 30px; padding: 20px; background: #e3f2fd; border-left: 4px solid #1a3a52; border-radius: 4px;">
              <p style="margin: 0; color: #0d47a1;">
                <strong>Napomena:</strong> Ovo je automatski generisan email. Kontaktirajte kupca što pre da potvrdite porudžbinu.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
            <p>© ${new Date().getFullYear()} DESIGNER 02 STORE. Sva prava zadržana.</p>
          </div>
        </body>
      </html>
    `;

    // Send email to store owner
    const storeEmailResult = await sendMail({
      email: email, // Reply-To je email kupca da prodavac može odmah odgovoriti
      sendTo: STORE_EMAIL,
      subject: `Nova porudžbina od ${name}`,
      text: `Nova porudžbina od ${name}. Email: ${email}, Telefon: ${phone}. Ukupno: ${totalPrice} RSD`,
      html: emailHtml,
    });

    if (!storeEmailResult) {
      console.error("Failed to send email to store owner");
    }

    // Send confirmation email to customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Potvrda porudžbine - DESIGNER 02 STORE</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Hvala na porudžbini!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">DESIGNER 02 STORE</p>
          </div>

          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; margin-top: 0;">Poštovani/a <strong>${name}</strong>,</p>

            <p>Hvala vam što ste poručili iz DESIGNER 02 STORE! Vaša porudžbina je uspešno primljena i biće obrađena u najkraćem roku.</p>

            <h2 style="color: #1a3a52; margin-top: 30px;">Detalji porudžbine</h2>
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <thead>
                <tr style="background: #1a3a52; color: white;">
                  <th style="padding: 12px; text-align: left;">Proizvod</th>
                  <th style="padding: 12px; text-align: center;">Količina</th>
                  <th style="padding: 12px; text-align: right;">Ukupno</th>
                </tr>
              </thead>
              <tbody>
                ${items
                  .map(
                    (item: CartItem) => `
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
                    <strong>${item.name}</strong><br />
                    <span style="color: #6b7280; font-size: 14px;">${item.volume || ""}</span>
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">
                    ${item.quantity}
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">
                    <strong>${(item.price * item.quantity).toLocaleString("sr-RS")} RSD</strong>
                  </td>
                </tr>
                `
                  )
                  .join("")}
                <tr style="background: #f3f4f6; font-weight: bold;">
                  <td colspan="2" style="padding: 16px; text-align: right;">UKUPNO:</td>
                  <td style="padding: 16px; text-align: right; color: #1a3a52; font-size: 18px;">
                    ${totalPrice.toLocaleString("sr-RS")} RSD
                  </td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top: 30px; padding: 20px; background: #e3f2fd; border-left: 4px solid #1a3a52; border-radius: 4px;">
              <h3 style="margin-top: 0; color: #0d47a1;">Šta sledi?</h3>
              <ul style="margin: 10px 0; padding-left: 20px; color: #0d47a1;">
                <li>Kontaktiraćemo vas u roku od 24h radi potvrde</li>
                <li>Plaćanje se vrši pouzećem pri preuzimanju</li>
             
              </ul>
            </div>

            <p style="margin-top: 30px;">Ako imate bilo kakvih pitanja, slobodno nas kontaktirajte:</p>
            <ul style="list-style: none; padding: 0;">
              <li>📧 Email: <a href="mailto:${STORE_EMAIL}" style="color: #1a3a52;">${STORE_EMAIL}</a></li>
              <li>📱 Telefon: <a href="tel:+381637586420" style="color: #1a3a52;">+381 63 758 6420</a></li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px;">
            <p>© ${new Date().getFullYear()} DESIGNER 02 STORE. Sva prava zadržana.</p>
          </div>
        </body>
      </html>
    `;

    const customerEmailResult = await sendMail({
      email: STORE_EMAIL, // Reply-To je email prodavnice da kupac može odgovoriti
      sendTo: email,
      subject: "Potvrda porudžbine - DESIGNER 02 STORE",
      text: `Hvala na porudžbini! Vaša porudžbina je uspešno primljena. Ukupno: ${totalPrice} RSD. Kontaktiraćemo vas u roku od 24h.`,
      html: customerEmailHtml,
    });

    if (!customerEmailResult) {
      console.error("Failed to send confirmation email to customer");
    }

    return NextResponse.json({
      success: true,
      message: "Porudžbina uspešno poslata",
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Greška pri obradi porudžbine" },
      { status: 500 }
    );
  }
}
