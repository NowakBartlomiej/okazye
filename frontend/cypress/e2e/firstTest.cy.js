const baseUrl = 'http://localhost:3000';
const noweUrl = 'http://localhost:3000/nowe'
const loginUrl = 'http://localhost:3000/login'
const addOcassion = 'http://localhost:3000/dodaj-okazje';
const login = 'test@localhost';
const password = '12345678';

const confirmUrl = (url) => {
  cy.location().should((loc) => {
    expect(loc.href).to.eql(url);
  })
}

describe('e2e test', () => {
  context('Test logowania', () => {
    it('sprawdzanie strony czy istnieje', () => {
      cy.visit(baseUrl);
      confirmUrl(noweUrl);
    })

    it('testowanie logowania', () => {
      cy.visit(baseUrl);
      confirmUrl(noweUrl);
      cy.get('div.gap-4 > .text-white').should('exist', 'be.visible').contains('Zaloguj się').click();

      confirmUrl(loginUrl);

      // login
      cy.get(':nth-child(1) > .group > .relative').should('exist', 'be.visible').type(login);

      // password
      cy.get('.mt-2 > .group > .relative').should('exist', 'be.visible').type(password);

      // Click "Zaloguj się"
      cy.get('.space-y-6 > :nth-child(3) > .z-0').should('exist', 'be.visible').contains('Zaloguj się').click();
      cy.wait(1000);
    })
  })

  context('test dodawania okazji', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
      confirmUrl(noweUrl);
      cy.get('div.gap-4 > .text-white').should('exist', 'be.visible').contains('Zaloguj się').click();

      confirmUrl(loginUrl);

      // login
      cy.get(':nth-child(1) > .group > .relative').should('exist', 'be.visible').type(login);

      // password
      cy.get('.mt-2 > .group > .relative').should('exist', 'be.visible').type(password);

      // Click "Zaloguj się"
      cy.get('.space-y-6 > :nth-child(3) > .z-0').should('exist', 'be.visible').contains('Zaloguj się').click();
      cy.wait(1000)
    })

    it('dodawanie okazji', () => {
      confirmUrl(noweUrl);
      cy.get('.lg\\:hidden > .group').should('exist', 'be.visible').click();
      cy.get('.text-large.text-white > .w-full').should('exist', 'be.visible').click();
      confirmUrl(addOcassion);

      cy.get('#title').should('exist', 'be.visible').type("Tytuł")
      cy.get('#new-price').should('exist', 'be.visible').type(100)
      cy.get('#old-price').should('exist', 'be.visible').type(199)
      cy.get('#url').should('exist', 'be.visible').type('https://www.google.com/')
      cy.get('#category > .inline-flex').should('exist', 'be.visible').click();
      cy.wait(1000)
      cy.get('#Artykuły\\ Spożywcze').should('exist', 'be.visible').click()
      cy.get('#description').type("opis")
      cy.get('#description').should('exist', 'be.visible').click().type("opis")
      cy.get('.bg-white > .z-0').should('exist', 'be.visible').click();

      cy.visit(noweUrl);
      confirmUrl(noweUrl);
      cy.get('.infinite-scroll-component > :nth-child(1) > .height-auto > .w-full').should('exist').contains('Tytuł')
    })
  })
})