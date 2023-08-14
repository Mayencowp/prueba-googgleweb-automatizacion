/// <reference types="cypress" />
import { GoogleMainPage } from "../page-object/GoogleMainPage"

describe (`Searching in Google`, () => {
  const googleMainPage = new GoogleMainPage()

  beforeEach( () => {
    googleMainPage.visitPage("https://www.google.com/")
    googleMainPage.acceptCookies()

  })

  it(`Searching Automation info in Wikipedia`, () => {
    googleMainPage.typeText("Automatizacion")
    googleMainPage.clickSearch()
  })

})