/// <reference types = 'cypress' />

describe('Hotala Test',function(){

    it.only('Visit Hotala Homepage', function(){
        cy.visit('https://www.hotala.com/')
        cy.wait(2000)
    })

    it.only('Go to a Category page from Homepage property tiles', function(){
        cy.get('.location-selector > ul').scrollIntoView()
        cy.wait(2000)
        cy.get('#north-america > :nth-child(1) > a > .details').click({force:true})
        cy.wait(2000)
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })
    it('Redirect property from property tiles', function(){
        cy.get('#js-section-0-tiles > #js-item-75').click()
        cy.wait(2000)
    })

    it('Go to property details page by clicking title', function(){
        cy.get('#js-BC-236937-details-btn-anchor').click({force:true})
        cy.wait(4000)
        cy.go('back')
    })

    it('Click on See more properties of this section', function(){
        cy.get('#js-item-6').scrollIntoView()
        cy.wait(2000)
        cy.get('#see-all-offer-section-0').click({force:true})
        cy.wait(6000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Redirect property from 5 Star Hotels section', function(){
        cy.get('#js-section-1 > .see-more-properties > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-item-9').click()
        cy.wait(2000)
    })

    it('Go to property details page by clicking title', function(){
        cy.get('#js-section-1 > .see-more-properties > h2').scrollIntoView()
        cy.get('#js-BC-236345-details-btn-anchor').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })

    it('Click on See more properties of this 5 Star Hotels section', function(){
        cy.get('#js-item-15').scrollIntoView()
        cy.wait(2000)
        cy.get('#see-all-offer-section-1').click({force:true})
        cy.wait(6000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Redirect property from Best Hotels section', function(){
        cy.get('#js-section-2 > .see-more-properties > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-item-18').click()
        cy.wait(2000)
    })

    it('Go to property details page by clicking title', function(){
        cy.get('#js-section-2 > .see-more-properties > h2').scrollIntoView()
        cy.get('#js-BC-6358254-details-btn-anchor').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })

    it('Click on See more properties of this Best Hotels section', function(){
        cy.get('#js-item-24').scrollIntoView()
        cy.wait(2000)
        cy.get('#see-all-offer-section-2').click({force:true})
        cy.wait(6000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Redirect property from Cheap Hotels section', function(){
        cy.get('#js-section-3 > .see-more-properties > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-item-27').click()
        cy.wait(2000)
    })

    it('Go to property details page by clicking title', function(){
        cy.get('#js-section-3 > .see-more-properties > h2').scrollIntoView()
        cy.get('#js-BC-76164-details-btn-anchor').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })

    it('Click on See more properties of this Cheap Hotels section', function(){
        cy.get('#js-item-33').scrollIntoView()
        cy.wait(2000)
        cy.get('#see-all-offer-section-3').click({force:true})
        cy.wait(6000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Redirect property from Hotels Nearby section', function(){
        cy.get('#js-section-4 > .see-more-properties > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-item-37').click()
        cy.wait(2000)
    })

    it('Go to property details page by clicking title', function(){
        cy.get('#js-section-4 > .see-more-properties > h2').scrollIntoView()
        cy.get('#js-BC-76269-details-btn-anchor').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })

    it('Click on See more properties of this Hotels Nearby section', function(){
        cy.get('#js-item-43').scrollIntoView()
        cy.wait(2000)
        cy.get('#see-all-offer-section-4').click({force:true})
        cy.wait(6000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Redirect property from Toronto Vacation Rentals section', function(){
        cy.get('#js-section-5 > .see-more-properties > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-item-46').click()
        cy.wait(2000)
    })

    it('Go to property details page by clicking title', function(){
        cy.get('#js-section-5 > .see-more-properties > h2').scrollIntoView()
        cy.get('#js-BC-76241-details-btn-anchor').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })

    it('Click on See more properties of this Toronto Vacation Rentals section', function(){
        cy.get('#js-item-52').scrollIntoView()
        cy.wait(2000)
        cy.get('#see-all-offer-section-5').click({force:true})
        cy.wait(6000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Redirect property from Pet-Friendly Hotels section', function(){
        cy.get('#js-section-6 > .see-more-properties > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-item-55').click()
        cy.wait(2000)
    })

    it('Go to property details page by clicking title', function(){
        cy.get('#js-section-6 > .see-more-properties > h2').scrollIntoView()
        cy.get('#js-BC-76395-details-btn-anchor').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })

    it('Click on See more properties of Pet-Friendly Hotels section', function(){
        cy.get('#js-item-61').scrollIntoView()
        cy.wait(2000)
        cy.get('#see-all-offer-section-6').click({force:true})
        cy.wait(6000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Redirect property from Resorts & All Inclusive Hotels section', function(){
        cy.get('#js-section-7 > .see-more-properties > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-item-64').click()
        cy.wait(2000)
    })

    it('Go to property details page by clicking title', function(){
        cy.get('#js-section-7 > .see-more-properties > h2').scrollIntoView()
        cy.get('#js-BC-29874-details-btn-anchor').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })

    it('Click on See more properties of Resorts & All Inclusive Hotels section', function(){
        cy.get('#js-item-70').scrollIntoView()
        cy.wait(2000)
        cy.get('#see-all-offer-section-7').click({force:true})
        cy.wait(6000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Redirect property from Last Minute Deals section', function(){
        cy.get('#js-section-8 > .see-more-properties > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-item-73').click()
        cy.wait(2000)
    })

    it('Go to property details page by clicking title', function(){
        cy.get('#js-section-8 > .see-more-properties > h2').scrollIntoView()
        cy.get('#js-BC-285745-details-btn-anchor').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })

    it('Click on See more properties of Last Minute Deals section', function(){
        cy.get('#js-section-8-tiles > #js-item-78').scrollIntoView()
        cy.wait(2000)
        cy.get('#see-all-offer-section-8').click({force:true})
        cy.wait(6000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Redirect property from Last Minute Demo Tiles section', function(){
        cy.get('.see-more-properties.js-location-seo-content > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('.row.js-location-seo-content > :nth-child(1)').click()
        cy.wait(2000)
    })

    it('Expand About section by clicking See More', function(){
        cy.get('.col-md-9 > :nth-child(7) > :nth-child(1) > :nth-child(1)').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-read-more-sub-page').click({force:true})
        cy.wait(2000)
    })

    it('Click on the numbers of property count table section', function(){
        cy.get('.col-md-9 > :nth-child(7) > :nth-child(1) > :nth-child(3)').scrollIntoView()
        cy.wait(2000)
        cy.get('.js-top-rental-accommodation-table > :nth-child(1) > :nth-child(2) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.col-md-9 > :nth-child(7) > :nth-child(1) > :nth-child(3)').scrollIntoView()
        cy.wait(2000)
        cy.get('.js-top-rental-accommodation-table > :nth-child(2) > :nth-child(2) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.col-md-9 > :nth-child(7) > :nth-child(1) > :nth-child(3)').scrollIntoView()
        cy.wait(2000)
        cy.get('.js-top-rental-accommodation-table > :nth-child(3) > :nth-child(2) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.col-md-9 > :nth-child(7) > :nth-child(1) > :nth-child(3)').scrollIntoView()
        cy.wait(2000)
        cy.get('.js-top-rental-accommodation-table > :nth-child(4) > :nth-child(2) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.col-md-9 > :nth-child(7) > :nth-child(1) > :nth-child(3)').scrollIntoView()
        cy.wait(2000)
        cy.get('.js-top-rental-accommodation-table > :nth-child(5) > :nth-child(2) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')
    })

    it('Visit places from Find a place from Quick Filters section', function(){
        cy.get('.js-top-rental-accommodation-table > :nth-child(2) > :nth-child(1)').scrollIntoView()
        cy.wait(2000)
        cy.get('.rental-amenities > :nth-child(1) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.js-top-rental-accommodation-table > :nth-child(2) > :nth-child(1)').scrollIntoView()
        cy.wait(2000)
        cy.get('.rental-amenities > :nth-child(3) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.js-top-rental-accommodation-table > :nth-child(2) > :nth-child(1)').scrollIntoView()
        cy.wait(2000)
        cy.get('.rental-amenities > :nth-child(5) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.js-top-rental-accommodation-table > :nth-child(2) > :nth-child(1)').scrollIntoView()
        cy.wait(2000)
        cy.get('.rental-amenities > :nth-child(7) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.js-top-rental-accommodation-table > :nth-child(2) > :nth-child(1)').scrollIntoView()
        cy.wait(2000)
        cy.get('.rental-amenities > :nth-child(9) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.js-top-rental-accommodation-table > :nth-child(2) > :nth-child(1)').scrollIntoView()
        cy.wait(2000)
        cy.get('.rental-amenities > :nth-child(11) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')

        cy.get('.js-top-rental-accommodation-table > :nth-child(2) > :nth-child(1)').scrollIntoView()
        cy.wait(2000)
        cy.get('.rental-amenities > :nth-child(13) > a').click({force:true})
        cy.wait(4000)
        cy.go('back')
    })

    it('Visit places from locations of Stay Near Top Attractions section', function(){
        cy.get(':nth-child(3) > .color-primary').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(3) > .poi-tiles > :nth-child(1) > .poi-single-item > .poi-single-item-title').click({force:true})
        cy.wait(2000)
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
        cy.go('back')

        cy.get(':nth-child(3) > .color-primary').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(3) > .poi-tiles > :nth-child(9) > .poi-single-item > .poi-single-item-title').click({force:true})
        cy.wait(2000)
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
        cy.go('back')

        cy.get(':nth-child(3) > .color-primary').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(20) > .poi-single-item > .poi-single-item-title').click({force:true})
        cy.wait(2000)
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
        cy.go('back')
    })

    it('Visit places from Find Hotels, Resorts, and Rentals Nearby section', function(){
        cy.get(':nth-child(4) > .color-primary').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(4) > .poi-tiles > :nth-child(1) > .poi-single-item').click({force:true})
        cy.wait(2000)
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
        cy.go('back')

        cy.get(':nth-child(4) > .color-primary').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(4) > .poi-tiles > :nth-child(5) > .poi-single-item').click({force:true})
        cy.wait(2000)
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
        cy.go('back')

        cy.get(':nth-child(4) > .color-primary').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(4) > .poi-tiles > :nth-child(12) > .poi-single-item').click({force:true})
        cy.wait(2000)
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
        cy.go('back')
    })

    it.only('Visit places from FAQ section below', function(){
        cy.get('.category-content > .color-primary').scrollIntoView()
        cy.wait(2000)
        cy.get('[data-id="KY-2090748"] > a > span').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.get('#js-date-picker-close > .icon').click({force:true})
        cy.wait(2000)
    })

}) 