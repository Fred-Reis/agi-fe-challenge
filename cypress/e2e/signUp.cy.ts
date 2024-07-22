describe("signUp flow", () => {
  it("should be abble to register a new user", () => {
    cy.visit("/");
    cy.viewport(1440, 900);

    cy.get('input[name="email"]').type("johndo3@example.com");
    cy.get('input[name="password"]').type("123456");
    cy.get("button").contains("Continue").click();

    cy.contains("Conte sobre você").should("exist");

    cy.get('input[name="fullName"]').type("john doe");
    cy.get('input[type="tel"]').type("27999989898");
    cy.get("div").contains("Linkedin").click();
    cy.get("button").contains("Continuar").click();

    cy.contains("Sobre o seu negócio").should("exist");

    cy.get('input[name="companyName"]').type("my company");
    cy.get("button").contains("Escolha o segmento").click();
    cy.get("li").contains("Tecnologia & Software").click();
    cy.get("div").contains("201 a 500").click();
    cy.get("button").contains("Continuar").click();

    cy.contains("Sobre o seu negócio").should("exist");

    cy.get("div").contains("Proprietário / Sócio").click();
    cy.get("div").contains("💻 TI").click();
    cy.get("button").contains("Continuar").click();

    cy.contains("Personalize a sua plataforma").should("exist");

    cy.get('input[name="url"]').type("mycompany");
    cy.get("div").contains("Laranja").click();
    cy.get("button").contains("Continuar").click();

    cy.location("pathname").should("include", "/validation");

    cy.contains("Agora verifique seu e-mail").should("exist");
  });
});
