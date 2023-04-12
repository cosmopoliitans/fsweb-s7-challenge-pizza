describe("Siparişi gönder butonu sayfada görünüyor mu", () => {
  it("should be visible on the page", () => {
    cy.visit("http://localhost:3000/order-pizza");
    cy.contains("Sipariş Gönder").should("be.visible");
  });
});

describe("Form Gönderme Testi", () => {
  it("Submits the form with name and toppings", () => {
    // Form sayafasına git
    cy.visit("http://localhost:3000/order-pizza");

    // İnputa isim/soyisim gir
    cy.get('input[name="ad"]').type("Michael");

    cy.get('input[name="soyad"]').type("Jackson");

    // email gir
    cy.get('input[name="email"]').type("example@gmail.com");

    // adres gir
    cy.get('input[name="adres"]').type("Güzelyalı Mah. Tebessüm Sok. No: 13");

    // pizza türü seç
    cy.get('select[name="pizzaturu"]').select("Margarita Pizza");

    // radio butonlarından ilkini seç
    cy.get('[type="radio"]')
      .first()
      .check();

    // adet gir
    cy.get('input[name="adet"]');

    // ek malzeme seç
    cy.get('[type="checkbox"]').check();

    // sipariş notu
    cy.get('input[name="siparisnotu"]').type("Poşet istemiyorum");

    // Formu gönder
    cy.get('button[type="submit"]').click();
  });
});
