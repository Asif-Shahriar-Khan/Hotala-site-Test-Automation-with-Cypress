/// <reference types = 'cypress' />

describe('Hotala Test',function(){

    it.only('Visit Hotala Homepage', function(){
        cy.visit('https://www.hotala.com/')
        cy.wait(2000)
    })

    it.only('Go to Toronto from Destinations section in Header', function(){
        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Los Angeles').click({force:true})
        //cy.get('#js-date-picker-close').click()
        cy.wait(2000)
    })

    it.only('Go to a H2G property Details page', function(){
        cy.get('#js-HG-72527478848890-details-btn-anchor').click({force:true})
        //.should('have.text', 'Nice Home')
        cy.wait(2000)

    })

    it('Click on Check Availability button & redirect by pressing Skip', function(){
        cy.get('#js-btn-check-availability').click()
        cy.wait(2000)
        //cy.get(':nth-child(1) > [time="1648749600000"]').click()
        //cy.get('[time="1648922400000"]').click()
        cy.get('#js-date-cancel').click()
        cy.get(5000)
    })

    it.only('Click on Check Availability button, select date & press Continue', function(){
        cy.get('#js-btn-check-availability').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > [time="1648749600000"]').click()
        cy.get('[time="1648922400000"]').click()
        cy.get('#js-date-select').click()
        cy.get(5000)
        cy.clearLocalStorage()
        cy.reload()
    })

    it('Click on the photos', function(){
        cy.get('#js-hero-img').click()
        cy.wait(2000)
    })

    it('Click on the Partner logo below the Check Availability section', function(){
        cy.get('#js-selected-provider').click()
        cy.wait(5000)
    })

    it('Click on Show More button',function(){
        cy.get('h2.font-bold').scrollIntoView()
        cy.get('#js-read-more').click({force:true})
        cy.get(2000)
    })

    it('Click on Check Other Properties section', function(){
        cy.get('.show-other-properties').click({force:true})
        cy.wait(2000)
        cy.go('back')
        cy.wait(2000)
    })

    it('Click on Price in map to redirect',function(){
        cy.get('#map_section > .overview-title').scrollIntoView()
        cy.wait(2000)
        cy.get('[aria-label="৳2,591"] > img').click({force:true})
        cy.get(2000)
    })

    it('Go to the FAQ section & expand the answers', function(){
        cy.get('#faq_section > .overview-title').click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(1) > .tab-label > .d-block').click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(2) > .tab-label > .d-block').click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(3) > .tab-label > .d-block').click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(4) > .tab-label > .d-block').click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(5) > .tab-label > .d-block').click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(6) > .tab-label > .d-block').click({force:true})
        cy.wait(2000)
        cy.get(':nth-child(7) > .tab-label > .d-block').click({force:true})
        cy.wait(2000)
    })

    it('Go to Property Tiles section below FAQ & sort by Price', function(){
        cy.get('.property-count > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-filter-sort > .default-option > li').click({force:true})
        cy.get('[data-value="3"]').click({force:true})
        cy.wait(5000)
        cy.get('#js-filter-sort > .default-option > li').click({force:true})
        cy.get('[data-value="2"]').click({force:true})
        cy.wait(5000)
    })

    it('Go to Property Tiles section below FAQ & sort by Rating', function(){
        cy.get('.property-count > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-filter-sort > .default-option > li').click({force:true})
        cy.get('[data-value="5"]').click({force:true})
        cy.wait(5000)
        cy.get('#js-filter-sort > .default-option > li').click({force:true})
        cy.get('[data-value="4"]').click({force:true})
        cy.wait(5000)
    })

    it('Go to Property Tiles section below FAQ & sort by Most Popular', function(){
        cy.get('.property-count > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-filter-sort > .default-option > li').click({force:true})
        cy.get('.select-ul > [data-value="1"]').click({force:true})
        cy.wait(5000)
    })

    it('Redirect Property from Property Tiles below FAQ section', function(){
        cy.scrollTo("center")
        cy.wait(2000)
        cy.get('#js-item-0').click()
        cy.wait(5000)
    })

    it('Redirect Demo Property from Property Tiles below FAQ section', function(){
        //cy.scrollTo("center")
        //cy.wait(2000)
        cy.scrollTo("bottom")
        cy.wait(2000)
        cy.scrollTo("bottom")
        cy.wait(2000)
        cy.get('#js-placeholder1-redirect-link > img').click()
        cy.wait(5000)
    })

    it('Go to the bottom & click See More button', function(){
        cy.get('#js-refine-link > span').click({force:true})
        cy.wait(5000)
        cy.go('back')
    })

    it('Visit the links of 188 Los Angeles(CA) Vacation Rentals on footer', function(){
        //cy.get('#js-bedroom-footer').scrollIntoView({force:true})
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.get('.col-lg-7 > .row > .col-xs-12 > .footer-list-2 > .no-list-style > :nth-child(1) > .text-white').click()
        cy.wait(2000)
        cy.get('.col-lg-7 > .row > .col-xs-12 > .footer-list-2 > .no-list-style > :nth-child(2) > .text-white').click()
        cy.wait(2000)
        cy.get('.col-lg-7 > .row > .col-xs-12 > .footer-list-2 > .no-list-style > :nth-child(3) > .text-white').click()
        cy.wait(2000)
    })

    it('Visit the links of Recently Booked Hostel on footer', function(){
        cy.get('.col-lg-5 > .footer-list-2 > .no-list-style > :nth-child(1) > .text-white').click()
        cy.wait(2000)
        cy.get('.col-lg-5 > .footer-list-2 > .no-list-style > :nth-child(2) > .text-white').click()
        cy.wait(2000)
        cy.get('.col-lg-5 > .footer-list-2 > .no-list-style > :nth-child(3) > .text-white').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .text-white').click()
        cy.wait(2000)
        cy.get(':nth-child(5) > .text-white').click()
        cy.wait(2000)
        cy.go(-5)
        cy.wait(2000)
    })

    it('Bookmark from the bookmark icon in image section', function(){
        cy.get('.tiles-btn').click({force:true})
        cy.wait(2000)
        cy.visit('https://www.hotala.com/bookmark')
        cy.wait(2000)
        cy.get('#js-btn-clear-all').click({force:true})
        cy.get('#js-clear-all-confirmed').click({force:true})
        cy.wait(2000)
        cy.visit('https://www.hotala.com/property/nice-place/HG-72527478848890')
        cy.wait(2000)
    })

    it('Bookmark property from the Property Tiles below FAQ section', function(){
        cy.get('.property-count > h2').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-HG-72677090748566-border > .tiles-icons > .fav-icon').click({force:true})
        cy.wait(2000)
        cy.visit('https://www.hotala.com/bookmark')
        cy.wait(2000)
        cy.get('#js-btn-clear-all').click({force:true})
        cy.get('#js-clear-all-confirmed').click({force:true})
        cy.wait(2000)
        cy.visit('https://www.hotala.com/property/nice-place/HG-72527478848890')
        cy.wait(2000)
        cy.get('.property-count > h2').scrollIntoView()
        cy.wait(2000)
    })

    
    
})