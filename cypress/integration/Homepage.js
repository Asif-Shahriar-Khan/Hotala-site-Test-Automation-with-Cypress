/// <reference types = 'cypress' />

describe('Hotala Test',function(){

    it.only('Visit Hotala Homepage', function(){
        cy.visit('https://www.hotala.com/')
        cy.wait(2000)
    })

    it('Go to the links of Hotels section from Deals in Header', function(){
        /*cy.get('.mega-menu > .nav-link').trigger('mouseover')
        cy.wait(2000)*/
        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('All Hotel Deals').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('5-Star Hotels').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Cheap Hotels').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Family Friendly').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Pet Friendly').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Oceanfront').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()
    })

    it('Go to the links of Resorts section from Deals in Header', function(){
        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('All Resort Deals').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Luxury Resorts').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Beach Resorts').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Cheap Family Resorts').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Ski Resorts').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()
    })

    it('Go to the links of Rentals section from Deals in Header', function(){
        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('All Rental Deals').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Cabins').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Condos').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Cottages').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Villas').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Timeshares').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('RV Rentals').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains('Deals').invoke('show').click()
        cy.wait(2000)
        cy.contains('Boat Rentals').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()
    })

    it('Go to the links of Types of Travel section from Deals in Header', function(){
        
        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Business Travel').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Group Travel').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Eco Travel').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Summer Deals').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Winter Escapes').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.contains("Deals").invoke('show').click()
        cy.wait(2000)
        cy.contains('Short-Term Stays').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()
    })

    it('Go to the links of Nearby section in Header', function(){
        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.contains('All Near Me').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Less than 2 Hours').click({force:true})
        cy.wait(5000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Less than 4 Hours').click({force:true})
        cy.wait(5000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Less than 6 Hours').click({force:true})
        cy.wait(5000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Less than 8 Hours').click({force:true})
        cy.wait(5000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Staycations').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()
    })

    it('Go to the links of Destinations section in Header', function(){
        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Toronto').click({force:true})
        cy.get('#js-date-picker-close').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Los Angeles').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Montreal').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Vancouver').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('New York').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('San Francisco').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Las Vegas').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Seattle').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Miami').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Chicago').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('San Diego').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Boston').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Washington, D.C').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Orlando').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('New Orleans').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Denver').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Portland').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Atlanta').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Philadelphia').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Austin').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        /*cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Nashville').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Houston').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Dallas').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Honolulu').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()*/
    })

    it('Go to the Hottest Destinations section from Destinations in Header', function(){
        cy.get(':nth-child(3) > .nav-link').click()
        cy.wait(2000)
        cy.contains('Discover the Hottest Destinations').click({force:true})
        cy.wait(2000) 
    })

    it('Change Currency from the Currency dropdown in Header', function(){
        cy.get('.default-option > li > .option').click()
        cy.wait(2000)
        cy.get('[data-currency-country="US"]').click()
        cy.get('h3').scrollIntoView()
        cy.wait(2000)
        cy.get('.max-w-full').click()
        cy.wait(2000)
    })  

    it('Input text in SearchBox & click Search button without Date', function(){
        cy.get('#js-search-autocomplete').click({force:true}).type('Italy')
        cy.wait(2000)
        cy.get('#js-btn-search').click({force:true})
        cy.wait(10000)
        cy.get('.max-w-full').click()
    })

    it('Leave SearchBox empty & click Search button without Date', function(){
        cy.get('#js-search-autocomplete').clear({force:true})
        cy.wait(2000)
        cy.get('#js-btn-search').click({force:true})
        cy.wait(2000)
        cy.get('.max-w-full').click()
    })

    it('Input text in SearchBox, select date & click Search button', function(){
        cy.get('#js-search-autocomplete').click({force:true}).type('Italy')
        cy.wait(2000)
        cy.get('#js-date-range-display').click({force:true})
        cy.wait(2000)
        cy.get('[time="1649095200000"]').click()
        cy.get('[time="1649440800000"]').click()
        cy.wait(2000)
        cy.get('#js-date-select').click()
        //cy.get('#js-btn-search').click({force:true})
        cy.wait(10000)
        cy.get('.max-w-full').click()
    })

    it('Check Last Minute Deals section', function(){
        cy.get('.home-banner > .container-fluid').scrollIntoView()
        cy.get(':nth-child(2) > a > .flex-row').click({force:true})
        cy.wait(5000)
        cy.get('.max-w-full').click()
    })

    it('Check Popular Location section', function(){
        cy.get('#js-popular-locations').scrollIntoView()
        cy.get(':nth-child(1) > .js-tab-links').click({force:true})
        cy.get('#north-america > :nth-child(1) > a > .details').click({force:true})
        cy.wait(5000)
        cy.get('#js-date-picker-close').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()
        cy.get('#js-popular-locations').scrollIntoView()
        cy.get(':nth-child(1) > .js-tab-links').click({force:true})
        //cy.get('#js-item-22').click()
        //cy.wait(10000)
        cy.get('#js-next-btn').click({force:true})
        cy.wait(2000)
        cy.get('#js-prev-btn').click({force:true})
        cy.wait(2000)

        cy.get(':nth-child(2) > .js-tab-links').click({force:true})
        cy.get('#js-next-btn').click({force:true})
        cy.wait(2000)
        cy.get('#js-prev-btn').click({force:true})
        cy.wait(2000)

        cy.get(':nth-child(3) > .js-tab-links').click({force:true})
        cy.get('#js-next-btn').click({force:true})
        cy.wait(2000)
        cy.get('#js-prev-btn').click({force:true})
        cy.wait(2000)

        cy.get(':nth-child(4) > .js-tab-links').click({force:true})
        cy.get('#js-next-btn').click({force:true})
        cy.wait(2000)
        cy.get('#js-prev-btn').click({force:true})
        cy.wait(2000)

        cy.get(':nth-child(5) > .js-tab-links').click({force:true})
        cy.get('#js-next-btn').click({force:true})
        cy.wait(2000)
        cy.get('#js-prev-btn').click({force:true})
        cy.wait(2000)

        cy.get(':nth-child(6) > .js-tab-links').click({force:true})
        cy.get('#js-next-btn').click({force:true})
        cy.wait(2000)
        cy.get('#js-prev-btn').click({force:true})
        cy.wait(2000)
    })

    it('Check Discover More banner section', function(){
        cy.get('#js-destination').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-destination-href > .btn').click({force:true})
        cy.wait(4000)   
    })

    it('Redirect from dynamic property tiles section', function(){
        cy.get('h3').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-item-1').click()
        cy.wait(10000)
    })

    it.only('Bookmark property from dynamic property tiles section', function(){
        cy.get('h3').scrollIntoView()
        cy.wait(2000)
        cy.contains('').click()
        cy.wait(2000)
    })

    it('Go to List Your Property section', function(){
        cy.get('.left').scrollIntoView()
        cy.wait(2000)
        cy.get('.left > .heading > a > .btn').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

    })

    it('Click on Hotala logo', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get('.footer-logo > img').click()
    })

    it('Go to the links in Find Places To Stay section', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(1) > .footer-menu-list > :nth-child(1) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(1) > .footer-menu-list > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()


        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(1) > .footer-menu-list > :nth-child(3) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(1) > .footer-menu-list > :nth-child(4) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(1) > .footer-menu-list > :nth-child(5) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(1) > .footer-menu-list > :nth-child(6) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(2) > .footer-menu-list > :nth-child(1) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(2) > .footer-menu-list > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(2) > .footer-menu-list > :nth-child(3) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(2) > .footer-menu-list > :nth-child(4) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(2) > .footer-menu-list > :nth-child(5) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(2) > .footer-menu-list > :nth-child(6) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()
    })

    it('Go to the links in About section', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get('.row > :nth-child(3) > :nth-child(2) > :nth-child(1) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get('.row > :nth-child(3) > :nth-child(2) > :nth-child(2) > a').click()
        cy.wait(2000)
    })

    it('Go to the links in Support section', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get('.row > :nth-child(3) > :nth-child(4) > :nth-child(1) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()

        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get('.row > :nth-child(3) > :nth-child(4) > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()
    })

    it('Go to the links in Explore section', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get('#js-user-login').click()
        cy.wait(2000)
        cy.get('#js-social-login-close').click()
        cy.wait(2000)
        
        cy.get(':nth-child(4) > .footer-menu-list > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get('.max-w-full').click()
    })

    it('Click into Privacy policy link', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get('.footer-bottom > :nth-child(2) > .no-list-style > :nth-child(1) > a').click()
        cy.wait(2000) 
        cy.get('.max-w-full').click()
    })

    it('Click into Site Terms link', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get('.footer-bottom > :nth-child(2) > .no-list-style > :nth-child(2) > a').click()
        cy.wait(2000) 
        cy.get('.max-w-full').click()
    })

    it('Click Facebook icon in Footer', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(1) > .footer-social-link').click()
        cy.wait(2000) 
    })

    it('Click Instagram icon in Footer', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(2) > .footer-social-link').click()
        cy.wait(2000) 
    })

    it('Click Twitter icon in Footer', function(){
        cy.get('.footer > .container-fluid').scrollIntoView()
        cy.wait(2000)
        cy.get(':nth-child(3) > .footer-social-link').click()
        cy.wait(2000) 
    })
})

