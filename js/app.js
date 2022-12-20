$( document ).ready( function () {

    /*==================== Swiper Slider ====================*/

    var swiper = new Swiper( ".testmonials__slider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    } );

    /*==================== Typed Animation ====================*/

    var typed = new Typed( '#awesomecoder', {
        strings: [
            'Developer',
            'Designer',
            'Dreamer',
        ],
        typeSpeed: 70,
        backSpeed: 70,
        smartBackspace: true,
        backDelay: 1000,
        loop: true,
    } );

    /*==================== Scroll Reveal Animation ====================*/
    const sr = ScrollReveal( {
        origin: 'top',
        distance: '30px',
        duration: 2000,
        reset: true
    } );
    sr.reveal( `.about__header, .header__content, .header__exp,
    .testonials__header, .introduce__skills, .contact__details,
    .contact__me, .content__header, .skill__names, .skill__perc,
    .about__details, .testmonials__slider, .introduce__myself, .skill__container `, {
        interval: 200
    } );

    /*==================== Counter Up Animation ====================*/

    function counterUp( el, time ) {
        var $this = $( el );
        $( {
            Counter: 0
        } ).animate( {
            Counter: $this.text()
        }, {
            duration: time,
            easing: 'swing',
            step: function () {
                $this.text( Math.ceil( this.Counter ) );
            }
        } );
    }

    var projects = counterUp( '#projects', 3000 );
    var experience = counterUp( '#experience', 1000 );
    var country = counterUp( "#country", 2000 );

    $( '.count' ).each( function () {
        setTimeout( () => {
            var $this = $( this );
            $( {
                Counter: 0
            } ).animate( {
                Counter: $this.text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text( Math.ceil( this.Counter ) );
                }
            } );
        }, 1000 );
    } );

    $( '.skillbar' ).each( function () {
        setTimeout( () => {
            $( this ).find( '.skillbar-bar' ).animate( {
                width: $( this ).attr( 'data-percent' ),
            }, 2000 );
        }, 1000 );
    } );

    /*==================== SCROLL SECTIONS ACTIVE  ====================*/
    const sections = document.querySelectorAll( 'section[id]' )

    function scrollActive() {
        const scrollY = window.pageYOffset

        sections.forEach( current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute( 'id' )

            if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
                document.querySelector( '.nav__item a[href*=' + sectionId + '] ' ).classList.add( 'active' )
            } else {
                document.querySelector( '.nav__item a[href*=' + sectionId + '] ' ).classList.remove( 'active' )
            }
        } )
    }
    window.addEventListener( 'scroll', scrollActive )


    /*==================== SHOW SCROLL TOP ====================*/
    function scrollTop() {
        const scrollTop = document.getElementById( 'scroll-top' );
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if ( this.scrollY >= 560 ) scrollTop.classList.add( 'show-scroll' );
        else scrollTop.classList.remove( 'show-scroll' )
    }
    window.addEventListener( 'scroll', scrollTop )

    /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader() {
        const nav = document.querySelector( 'header' )
        if ( this.scrollY >= 200 ) nav.classList.add( 'smooth__header' );
        else nav.classList.remove( 'smooth__header' )
    }
    window.addEventListener( 'scroll', scrollHeader )

    /*==================== MOBILE MENU ====================*/
    $( document ).on( "click", ".mobile__menu ", function () {
        $( ".nav__list" ).toggleClass( "active" );
    } );

    $( document ).on( "click", ".nav__item ", function ( e ) {
        e.stopPropagation();
        var location = $( this ).find( ".nav__link" ).attr( "href" );
        window.location = location;
        setTimeout( () => {
            $( ".nav__list" ).toggleClass( "active" );
        }, 20 );
    } );





} );