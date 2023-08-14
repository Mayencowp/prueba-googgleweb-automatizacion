export class GoogleMainPage {

    visitPage(url){
        cy.visit(url)
    }

    acceptCookies (){
        cy.get('#L2AGLb > .QS5gu').click({force: true})

    }
    
    typeText(text) {
    
        cy.get('#APjFqb').type(text)
    }

    clickSearch(){
        cy.get('.FPdoLc > center > .gNO89b').click({force: true})
    }
    
    clickWikipediaLink(){

        cy.contains('Wikipedia').should('exist').click() 
        cy.get(':nth-child(1) > .MjjYud > .g > .kvH3mc > .jGGQ5e > .yuRUbf > :nth-child(1) > a > .LC20lb').click()  
    }
  }




   