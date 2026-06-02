import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({

    lng:'it',
    fallbackLng:'it',

    interpolation:{
      escapeValue:false
    },

    resources:{

      /* ================= IT ================= */

      it:{
        translation:{

          /* NAVBAR */

          home:'Home',
          hotel:'Hotel',
          camere:'Camere',
          risto:'RistoMusicBar',
          prezzi:'Prezzi',
          arrivare:'Arrivare',
          prenota:'Prenota',

          /* HOME */

          heroTitle:'Hotel',
          heroLocation:'JESOLO • VENEZIA',
          heroBook:'Prenota al Miglior Prezzo',
          heroDiscover:'Scopri l’Hotel',

          welcomeTitle:'Benvenuti all’',
          welcomeHotel:'Hotel Amalfi',

          welcomeText:'Un hotel accogliente nel cuore di Jesolo, perfetto per vacanze tra mare, relax e ospitalità italiana.',

          services:'I Nostri',
          services2:'Servizi',

          wifi:'Wi-Fi',
          wifiText:'Connessione gratuita in tutta la struttura.',

          beach:'Spiaggia',
          beachText:'Posto spiaggia incluso nei pacchetti.',

          parking:'Parcheggio',
          parkingText:'Disponibile per i clienti hotel.',

          restaurant:'Ristorante',
          restaurantText:'Cucina italiana e atmosfera rilassata.',

          gallery:'Scopri',
          gallery2:'Amalfi',

          galleryHotel:'Hotel',
          galleryRooms:'Camere',
          galleryRestaurant:'Ristorante',

          /* PREVENTIVO */

          quoteTitle:'Richiedi un',
          quoteTitle2:'Preventivo',

          quoteText:'Compila il modulo e ti risponderemo nel più breve tempo possibile con la migliore offerta disponibile.',

          name:'Nome e Cognome',
          email:'Email',
          phone:'Telefono',

          arrival:'Data Arrivo',
          departure:'Data Partenza',

          adults:'Maggiorenni',
          kids:'Bambini',

          treatment:'Trattamento Richiesto',

          bbOption:'Camera e Colazione',
          hbOption:'Mezza Pensione',
          fbOption:'Pensione Completa',

          message:'Messaggio o richieste speciali',

          send:'Richiedi Preventivo',

          ctaTitle:'Vivi Jesolo con',
          ctaTitle2:'Amalfi',

          ctaText:'Prenota direttamente dal sito ufficiale per ottenere il miglior prezzo.',

          availability:'Verifica Disponibilità',
          contact:'Contattaci',

          /* PREZZI */

          pricesTitle:'I Nostri',
          pricesTitle2:'Prezzi',

          bestPrice:'MIGLIOR PREZZO GARANTITO',

          bookingBar:'Prenota dal sito ufficiale per ottenere le migliori condizioni.',

          choose:'Scegli il tuo',
          package:'Pacchetto',

          bb:'CAMERA E COLAZIONE',
          bbDesc:'con SPIAGGIA e PARCHEGGIO',

          half:'MEZZA PENSIONE',
          halfDesc:'con BEVANDE e SPIAGGIA',

          full:'PENSIONE COMPLETA',
          fullDesc:'con BEVANDE e SPIAGGIA',

          breakfast:'Colazione Inclusa',
          beachPlace:'Posto Spiaggia',
          dinner:'Cena Inclusa',
          lunch:'Pranzo',

          quoteBtn:'Richiedi Preventivo',
                    infoTitle:'Prezzi e',
          infoTitle2:'Informazioni',

          low:'Bassa Stagione',
          lowText:'Tariffe dedicate e soggiorni convenienti.',

          high:'Alta Stagione',
          highText:'Disponibilità limitata e pacchetti premium.',

          extra:'Servizi Extra',
          extraText:'Spiaggia, parcheggio e richieste personalizzate.',

          payments:'Pagamenti',
          paymentsText:'Carte, contanti e bonifico.',

          priceCta:'Prenota al',
          priceCta2:'Miglior Prezzo',

          priceText:'Contattaci direttamente e ricevi il preventivo migliore per il tuo soggiorno.',

          /* HOTEL */

          hotelHero:'Il Nostro',
          hotelHero2:'Hotel',

          hotelMini:'RELAX • COMFORT • JESOLO',

          hotelWelcome:'Benvenuti all’',
          hotelWelcome2:'Hotel Amalfi',

          hotelText1:'Hotel Amalfi è pensato per offrire una vacanza rilassante a pochi passi dal mare di Jesolo.',

          hotelText2:'Atmosfera familiare, servizi dedicati e comfort moderno per ogni soggiorno.',

          discoverRooms:'Scopri le Camere',

          comfortTitle:'Servizi e',
          comfortTitle2:'Comfort',

          ristoText:'Cucina italiana, buffet e relax.',

          rulesTitle:'Informazioni e',
          rulesTitle2:'Regolamento',

          check:'Check-in / Check-out',
          checkText:'Check-in dalle 14:00. Check-out entro le 10:00.',

          parkingRule:'Parcheggio',
          parkingRuleText:'Disponibile secondo disponibilità.',

          paymentsRule:'Pagamenti',
          paymentsRuleText:'Carte, contanti e bonifico.',

          hotelCta:'Vivi Jesolo con',
          hotelCta2:'Amalfi',

          hotelCtaText:'Prenota dal sito ufficiale e ottieni le migliori condizioni disponibili.',

          bookNow:'Prenota Ora',

          /* CAMERE */

          roomsHero:'Le Nostre',
          roomsHero2:'Camere',

          roomsMini:'RELAX • COMFORT • MARE',

          classic:'Camera Classic',
          classicText:'Accogliente e luminosa, perfetta per soggiorni rilassanti.',

          comfort:'Camera Comfort',
          comfortText:'Più spazio e comfort per famiglie e coppie.',

          superior:'Camera Superior',
          superiorText:'Eleganza e comfort premium vicino al mare.',

          discover:'Scopri',

          roomsCta:'Trova la tua',
          roomsCta2:'Camera',

          roomsCtaText:'Scopri la soluzione ideale per il tuo soggiorno a Jesolo.',
                    /* ARRIVARE */

          arriveHero:'Come',
          arriveHero2:'Arrivare',

          arriveMini:'JESOLO • VENEZIA • RELAX',

          contacts:'Contatti e',
          contacts2:'Posizione',

          callNow:'Chiama Ora',

          how:'Come',
          how2:'Arrivare',

          car:'In Auto',
          carText:'Autostrada A4, uscita Noventa direzione Jesolo.',

          train:'In Treno',
          trainText:'Mestre o San Donà con collegamento bus.',

          airport:'Aeroporto',
          airportText:'Venezia Marco Polo a breve distanza.',

          venice:'Venezia',
          veniceText:'Escursioni rapide verso la laguna.',

          where:'Dove',
          where2:'Siamo',

          waiting:'Ti aspettiamo all’',
          waiting2:'Hotel Amalfi',

          waitingText:'Organizza il tuo soggiorno e vivi Jesolo con comfort e relax.',

          /* RISTOMUSICBAR */

          ristoHero:'Risto',
          ristoHero2:'Music Bar',

          ristoMini:'GUSTO • RELAX • ATMOSFERA',

          flavors:'Sapori e',
          hospitality:'Ospitalità',

          ristoIntro1:'Il RistoMusicBar Amalfi è uno spazio dedicato alla convivialità, alla cucina italiana e ai momenti di relax.',

          ristoIntro2:'Colazioni ricche, buffet e serate in un’atmosfera elegante e rilassata.',

          bookStay:'Prenota il Soggiorno',

          taste:'Esperienze di',
          taste2:'Gusto',

          buffetBreakfast:'Colazione Buffet',
          buffetBreakfastText:'Buffet dolce e salato con prodotti freschi e selezionati.',

          italianCuisine:'Cucina Italiana',
          italianCuisineText:'Piatti ispirati alla tradizione mediterranea.',

          cocktailMusic:'Cocktail & Music',
          cocktailMusicText:'Relax e atmosfera per serate speciali.',

          grand:'Grand',
          buffet:'Buffet',

          breakfast2:'Colazione',
          breakfast2Text:'Buffet ricco dolce e salato.',

          kitchen:'Cucina',
          kitchenText:'Piatti italiani e mediterranei.',

          aperitif:'Aperitivi',
          aperitifText:'Cocktail e momenti di relax.',

          musicBar:'Music Bar',
          musicBarText:'Atmosfera elegante e conviviale.',

          tasteCta:'Vivi il gusto firmato',
          tasteCta2:'Amalfi',

          tasteCtaText:'Colazioni, cucina italiana e atmosfera unica a Jesolo.',

          /* FOOTER */

          footerRelax:'Relax • Mare • Comfort',

          footerContacts:'Contatti',

          follow:'Seguici',

          rights:'Tutti i diritti riservati'

        }
      },
            /* ================= EN ================= */

      en:{
        translation:{

          /* NAVBAR */

          home:'Home',
          hotel:'Hotel',
          camere:'Rooms',
          risto:'RistoMusicBar',
          prezzi:'Prices',
          arrivare:'Location',
          prenota:'Book',

          /* HOME */

          heroTitle:'Hotel',
          heroLocation:'JESOLO • VENICE',
          heroBook:'Book Best Price',
          heroDiscover:'Discover Hotel',

          welcomeTitle:'Welcome to',
          welcomeHotel:'Hotel Amalfi',

          welcomeText:'A welcoming hotel in the heart of Jesolo, perfect for holidays with sea, relaxation and Italian hospitality.',

          services:'Our',
          services2:'Services',

          wifi:'Wi-Fi',
          wifiText:'Free connection throughout the hotel.',

          beach:'Beach',
          beachText:'Beach place included in packages.',

          parking:'Parking',
          parkingText:'Available for hotel guests.',

          restaurant:'Restaurant',
          restaurantText:'Italian cuisine and relaxing atmosphere.',

          gallery:'Discover',
          gallery2:'Amalfi',

          galleryHotel:'Hotel',
          galleryRooms:'Rooms',
          galleryRestaurant:'Restaurant',

          /* QUOTE */

          quoteTitle:'Request a',
          quoteTitle2:'Quote',

          quoteText:'Fill out the form and we will reply as soon as possible with the best available offer.',

          name:'Full Name',
          email:'Email',
          phone:'Phone',

          arrival:'Arrival Date',
          departure:'Departure Date',

          adults:'Adults',
          kids:'Children',

          treatment:'Board Type',

          bbOption:'Bed & Breakfast',
          hbOption:'Half Board',
          fbOption:'Full Board',

          message:'Message or special requests',

          send:'Request Quote',

          ctaTitle:'Experience Jesolo with',
          ctaTitle2:'Amalfi',

          ctaText:'Book directly from the official website to get the best price.',

          availability:'Check Availability',
          contact:'Contact Us',

          /* PRICES */

          pricesTitle:'Our',
          pricesTitle2:'Prices',

          bestPrice:'BEST PRICE GUARANTEED',

          bookingBar:'Book from the official website to get the best conditions.',

          choose:'Choose your',
          package:'Package',

          bb:'BED & BREAKFAST',
          bbDesc:'with BEACH and PARKING',

          half:'HALF BOARD',
          halfDesc:'with DRINKS and BEACH',

          full:'FULL BOARD',
          fullDesc:'with DRINKS and BEACH',

          breakfast:'Breakfast Included',
          beachPlace:'Beach Place',
          dinner:'Dinner Included',
          lunch:'Lunch',

          quoteBtn:'Request Quote',

          infoTitle:'Prices and',
          infoTitle2:'Information',

          low:'Low Season',
          lowText:'Special rates and convenient stays.',

          high:'High Season',
          highText:'Limited availability and premium packages.',

          extra:'Extra Services',
          extraText:'Beach, parking and personalised requests.',

          payments:'Payments',
          paymentsText:'Cards, cash and bank transfer.',

          priceCta:'Book at',
          priceCta2:'Best Price',

          priceText:'Contact us directly and receive the best quote for your stay.',

          /* HOTEL */

          hotelHero:'Our',
          hotelHero2:'Hotel',

          hotelMini:'RELAX • COMFORT • JESOLO',

          hotelWelcome:'Welcome to',
          hotelWelcome2:'Hotel Amalfi',

          hotelText1:'Hotel Amalfi is designed to offer a relaxing holiday a few steps from the sea of Jesolo.',

          hotelText2:'Family atmosphere, dedicated services and modern comfort for every stay.',

          discoverRooms:'Discover Rooms',

          comfortTitle:'Services and',
          comfortTitle2:'Comfort',

          ristoText:'Italian cuisine, buffet and relaxation.',

          rulesTitle:'Information and',
          rulesTitle2:'Rules',

          check:'Check-in / Check-out',
          checkText:'Check-in from 2:00 PM. Check-out by 10:00 AM.',

          parkingRule:'Parking',
          parkingRuleText:'Available depending on availability.',

          paymentsRule:'Payments',
          paymentsRuleText:'Cards, cash and bank transfer.',

          hotelCta:'Experience Jesolo with',
          hotelCta2:'Amalfi',

          hotelCtaText:'Book from the official website and get the best available conditions.',

          bookNow:'Book Now',
               /* CAMERE */

          roomsHero:'Our',
          roomsHero2:'Rooms',

          roomsMini:'RELAX • COMFORT • SEA',

          classic:'Classic Room',
          classicText:'Cozy and bright, perfect for relaxing stays.',

          comfort:'Comfort Room',
          comfortText:'More space and comfort for families and couples.',

          superior:'Superior Room',
          superiorText:'Elegance and premium comfort near the sea.',

          discover:'Discover',

          roomsCta:'Find your',
          roomsCta2:'Room',

          roomsCtaText:'Discover the ideal solution for your stay in Jesolo.',

          /* ARRIVE */

          arriveHero:'How to',
          arriveHero2:'Reach Us',

          arriveMini:'JESOLO • VENICE • RELAX',

          contacts:'Contacts and',
          contacts2:'Location',

          callNow:'Call Now',

          how:'How to',
          how2:'Reach Us',

          car:'By Car',
          carText:'A4 motorway, Noventa exit towards Jesolo.',

          train:'By Train',
          trainText:'Mestre or San Donà with bus connection.',

          airport:'Airport',
          airportText:'Venice Marco Polo nearby.',

          venice:'Venice',
          veniceText:'Quick excursions to the lagoon.',

          where:'Where',
          where2:'We Are',

          waiting:'We await you at',
          waiting2:'Hotel Amalfi',

          waitingText:'Organise your stay and experience Jesolo with comfort and relaxation.',

          /* RISTOMUSICBAR */

          ristoHero:'Risto',
          ristoHero2:'Music Bar',

          ristoMini:'TASTE • RELAX • ATMOSPHERE',

          flavors:'Flavours and',
          hospitality:'Hospitality',

          ristoIntro1:'RistoMusicBar Amalfi is a place dedicated to conviviality, Italian cuisine and relaxing moments.',

          ristoIntro2:'Rich breakfasts, buffet and evenings in an elegant and relaxing atmosphere.',

          bookStay:'Book Your Stay',

          taste:'Taste',
          taste2:'Experiences',

          buffetBreakfast:'Breakfast Buffet',
          buffetBreakfastText:'Sweet and savoury buffet with fresh selected products.',

          italianCuisine:'Italian Cuisine',
          italianCuisineText:'Dishes inspired by Mediterranean tradition.',

          cocktailMusic:'Cocktail & Music',
          cocktailMusicText:'Relax and atmosphere for special evenings.',

          grand:'Grand',
          buffet:'Buffet',

          breakfast2:'Breakfast',
          breakfast2Text:'Rich sweet and savoury buffet.',

          kitchen:'Cuisine',
          kitchenText:'Italian and Mediterranean dishes.',

          aperitif:'Aperitifs',
          aperitifText:'Cocktails and relaxing moments.',

          musicBar:'Music Bar',
          musicBarText:'Elegant and convivial atmosphere.',

          tasteCta:'Experience Amalfi',
          tasteCta2:'Taste',

          tasteCtaText:'Breakfast, Italian cuisine and unique atmosphere in Jesolo.',

          /* FOOTER */

          footerRelax:'Relax • Sea • Comfort',

          footerContacts:'Contacts',

          follow:'Follow Us',

          rights:'All rights reserved'

        }
      },

      /* ================= DE ================= */

      de:{
        translation:{

          home:'Startseite',
          hotel:'Hotel',
          camere:'Zimmer',
          risto:'RistoMusicBar',
          prezzi:'Preise',
          arrivare:'Anreise',
          prenota:'Buchen',

          heroTitle:'Hotel',
          heroLocation:'JESOLO • VENEDIG',
          heroBook:'Bestpreis buchen',
          heroDiscover:'Hotel entdecken',

          welcomeTitle:'Willkommen im',
          welcomeHotel:'Hotel Amalfi',

          welcomeText:'Ein gemütliches Hotel im Herzen von Jesolo, perfekt für Urlaub mit Meer, Entspannung und italienischer Gastfreundschaft.',

          services:'Unsere',
          services2:'Dienstleistungen',

          wifi:'Wi-Fi',
          wifiText:'Kostenloses WLAN im gesamten Hotel.',

          beach:'Strand',
          beachText:'Strandplatz im Paket enthalten.',

          parking:'Parkplatz',
          parkingText:'Für Hotelgäste verfügbar.',

          restaurant:'Restaurant',
          restaurantText:'Italienische Küche und entspannte Atmosphäre.',

          gallery:'Entdecke',
          gallery2:'Amalfi',

          galleryHotel:'Hotel',
          galleryRooms:'Zimmer',
          galleryRestaurant:'Restaurant',

          quoteTitle:'Angebot',
          quoteTitle2:'Anfragen',

          quoteText:'Füllen Sie das Formular aus und wir antworten schnellstmöglich mit dem besten Angebot.',

          name:'Vor- und Nachname',
          email:'E-Mail',
          phone:'Telefon',

          arrival:'Anreise',
          departure:'Abreise',

          adults:'Erwachsene',
          kids:'Kinder',

          treatment:'Verpflegung',

          bbOption:'Zimmer mit Frühstück',
          hbOption:'Halbpension',
          fbOption:'Vollpension',

          message:'Nachricht oder Sonderwünsche',

          send:'Angebot anfragen',

          ctaTitle:'Erleben Sie Jesolo mit',
          ctaTitle2:'Amalfi',

          ctaText:'Buchen Sie direkt auf der offiziellen Website zum besten Preis.',

          availability:'Verfügbarkeit prüfen',
          contact:'Kontakt',

          footerRelax:'Relax • Meer • Komfort',
          footerContacts:'Kontakte',
          follow:'Folgen Sie uns',
          rights:'Alle Rechte vorbehalten'

        }
      }

    }

  })

export default i18n     