/// <reference types="cypress" />
import { GoogleMainPage } from "../page-object/GoogleMainPage"
import { WikipediaPage } from "../page-object/WikipediaPage"

describe (`Searching in Google`, () => {
  const googleMainPage = new GoogleMainPage()
  const wikipediaPage = new WikipediaPage()

  beforeEach( () => {
    googleMainPage.visitPage("https://www.google.com/")
    googleMainPage.acceptCookies()

  })

  it(`Searching Automation info in Wikipedia`, () => {
    googleMainPage.typeText("Automatizacion")
    googleMainPage.clickSearch()
    googleMainPage.clickWikipediaLink()
    cy.screenshot()
    })

    
    })
  
  




