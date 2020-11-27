const imdbIDs = ['tt0052357',
    'tt0033467',
    'tt0046438',
    'tt0031885',
    'tt0018455',
    'tt0062622',
    'tt0049730',
    'tt0019760',
    'tt0019254',
    'tt0056801',
    'tt0015648',
    'tt0024844',
    'tt0053472',
    'tt0078788',
    'tt0041154',
    'tt0060138',
    'tt0047478',
    'tt0060827',
    'tt0072443',
    'tt0045152',
    'tt0053619',
    'tt0068646',
    'tt0057345',
    'tt0042876',
    'tt0048452',
    'tt0118694',
    'tt0060107',
    'tt0166924',
    'tt0079944',
    'tt0090015',
    'tt0075314',
    'tt0071562',
    'tt0040522',
    'tt0054215',
    'tt0017925',
    'tt0111341',
    'tt0017136',
    'tt0073198',
    'tt0053779',
    'tt0053198',
    'tt0048473',
    'tt0046511',
    'tt0059592',
    'tt0100234',
    'tt0053291',
    'tt0062136',
    'tt0058138',
    'tt6677224',
    'tt0058946',
    'tt0021749',
    'tt0046478',
    'tt0056119',
    'tt0053125',
    'tt0047396',
    'tt0081398',
    'tt0022100',
    'tt0057091',
    'tt0052311',
    'tt0015324',
    'tt0072684',
    'tt0070359',
    'tt0047445',
    'tt0050986',
    'tt0027977',
    'tt0043014',
    'tt0048424',
    'tt0053168',
    'tt0053221',
    'tt0083658',
    'tt0090756',
    'tt0084628',
    'tt0049902',
    'tt0041959',
    'tt0056736',
    'tt0037674',
    'tt0028950',
    'tt0073440',
    'tt0071315',
    'tt0209933',
    'tt0064116',
    'tt0035015',
    'tt0056172',
    'tt0070040',
    'tt0083922',
    'tt0034583',
    'tt0063555',
    'tt0015881',
    'tt0101985',
    'tt0065214',
    'tt0028445',
    'tt0038733',
    'tt0038733',
    'tt0050976',
    'tt0020530',
    'tt0006864',
    'tt0244316',
    'tt0036112',
    'tt0070820',
    'tt0071141',
    'tt0052918',
    'tt0046022',
    'tt0127354',
    'tt0065571',
    'tt0073800',
    'tt0036154',
    'tt0060304',
    'tt0478304',
    'tt0037824',
    'tt0054632',
    'tt0033804',
    'tt0042804',
    'tt0029947',
    'tt0066214',
    'tt0073580',
    'tt0055601',
    'tt0021577',
    'tt0036695',
    'tt0061996',
    'tt0057012',
    'tt0013442',
    'tt0040725',
    'tt0023622',
    'tt0096908',
    'tt0071129',
    'tt0056217',
    'tt0077405',
    'tt0189219',
    'tt0097216',
    'tt0246135',
    'tt0381668',
    'tt0043972',
    'tt0055032',
    'tt0110912',
    'tt0037059',
    'tt0085180',
    'tt0044741',
    'tt0108394',
    'tt0069995',
    'tt0071381',
    'tt0075686',
    'tt0053604',
    'tt0015064',
    'tt0052893',
    'tt0060176',
    'tt0032553',
    'tt0063291',
    'tt0042619',
    'tt0109424',
    'tt0035446',
    'tt0072417',
    'tt0018192',
    'tt0056663',
    'tt0032138',
    'tt0063278',
    'tt0387898',
    'tt0081505',
    'tt0069293',
    'tt0059012',
    'tt0015864',
    'tt0040536',
    'tt0037558',
    'tt0042593',
    'tt0039192',
    'tt0096283',
    'tt0031762',
    'tt0023649',
    'tt0091251',
    'tt0095037',
    'tt0087843',
    'tt0069467',
    'tt0024216',
    'tt0249241',
    'tt0076759',
    'tt0038787',
    'tt0032599',
    'tt0099685',
    'tt0058450',
    'tt0000417',
    'tt0051036',
    'tt0041546',
    'tt0022458',
    'tt0021571',
    'tt0115751',
    'tt0032551',
    'tt0087884',
    'tt0083866',
    'tt0038890',
    'tt0062952',
    'tt0051792',
    'tt0032156',
    'tt0064451',
    'tt0034978',
    'tt0036506',
    'tt0120863',
    'tt0074486',
    'tt0072271',
    'tt0068361',
    'tt0071360',
    'tt0039689',
    'tt0023634',
    'tt0037800',
    'tt0456149',
    'tt0058003',
    'tt0061465',
    'tt0069762',
    'tt0073152',
    'tt0469494',
    'tt0910970',
    'tt0080196',
    'tt0086541',
    'tt0060959',
    'tt1588895',
    'tt0079522',
    'tt0055852',
    'tt0389448',
    'tt0318034',
    'tt0079986',
    'tt0245429',
    'tt0047528',
    'tt0038823',
    'tt0033045',
    'tt0038355',
    'tt0076263',
    'tt0067961',
    'tt0039417',
    'tt0045112',
    'tt0064040',
    'tt0073650',
    'tt0023969',
    'tt0075938',
    'tt1316540',
    'tt0087644',
    'tt0056732',
    'tt0048757',
    'tt0107822',
    'tt0031381',
    'tt1527186',
    'tt0336693',
    'tt0010323',
    'tt0040724',
    'tt0066921',
    'tt0067893',
    'tt0056444',
    'tt0096257',
    'tt0052572',
    'tt0023563',
    'tt0038762',
    'tt0101765',
    'tt0064541',
    'tt0111495'];

const bfiData = [
    {
        ranking: "1",
        imdbID: "tt0052357",
        title: "Vertigo",
        year: "1958",
        director: "Alfred Hitchcock"
    },
    {
        ranking: "2",
        imdbID: "tt0033467",
        title: "Citizen Kane",
        year: "1941",
        director: "Orson Welles"
    },
    {
        ranking: "3",
        imdbID: "tt0046438",
        title: "Tokyo Story",
        year: "1953",
        director: "Ozu Yasujiro"
    },
    {
        ranking: "4",
        imdbID: "tt0031885",
        title: "The Rules of the Game",
        year: "1939",
        director: "Jean Renoir"
    },
    {
        ranking: "5",
        imdbID: "tt0018455",
        title: "Sunrise",
        year: "1927",
        director: "F.W. Murnau"
    },
    {
        ranking: "6",
        imdbID: "tt0062622",
        title: "2001: A Space Odyssey",
        year: "1968",
        director: "Stanley Kubrick"
    },
    {
        ranking: "7",
        imdbID: "tt0049730",
        title: "The Searchers",
        year: "1956",
        director: "John Ford"
    },
    {
        ranking: "8",
        imdbID: "tt0019760",
        title: "Man With a Movie Camera",
        year: "1929",
        director: "Dziga Vertov"
    },
    {
        ranking: "9",
        imdbID: "tt0019254",
        title: "The Passion of Joan of Arc",
        year: "1928",
        director: "Carl Theodor Dreyer"
    },
    {
        ranking: "10",
        imdbID: "tt0056801",
        title: "8 1/2",
        year: "1963",
        director: "Federico Fellini"
    },
    {
        ranking: "11",
        imdbID: "tt0015648",
        title: "Battleship Potemkin",
        year: "1925",
        director: "Sergei M. Eisenstein"
    },
    {
        ranking: "12",
        imdbID: "tt0024844",
        title: "LâAtalante",
        year: "1934",
        director: "Jean Vigo"
    },
    {
        ranking: "13",
        imdbID: "tt0053472",
        title: "Breathless",
        year: "1960",
        director: "Jean-Luc Godard"
    },
    {
        ranking: "14",
        imdbID: "tt0078788",
        title: "Apocalypse Now",
        year: "1979",
        director: "Francis Ford Coppola"
    },
    {
        ranking: "15",
        imdbID: "tt0041154",
        title: "Late Spring",
        year: "1949",
        director: "Ozu Yasujiro"
    },
    {
        ranking: "16",
        imdbID: "tt0060138",
        title: "Au Hasard Balthazar",
        year: "1966",
        director: "Robert Bresson"
    },
    {
        ranking: "17",
        imdbID: "tt0047478",
        title: "Seven Samurai",
        year: "1954",
        director: "Akira Kurosawa"
    },
    {
        ranking: "17",
        imdbID: "tt0060827",
        title: "Persona",
        year: "1966",
        director: "Ingmar Bergman"
    },
    {
        ranking: "19",
        imdbID: "tt0072443",
        title: "Mirror",
        year: "1974",
        director: "Andrei Tarkovsky"
    },
    {
        ranking: "20",
        imdbID: "tt0045152",
        title: "Singinâ in the Rain",
        year: "1951",
        director: "Gene Kelly/Stanley Donen"
    },
    {
        ranking: "21",
        imdbID: "tt0053619",
        title: "LâAvventura",
        year: "1960",
        director: "Michelangelo Antonioni"
    },
    {
        ranking: "21",
        imdbID: "tt0068646",
        title: "The Godfather",
        year: "1972",
        director: "Francis Ford Coppola"
    },
    {
        ranking: "21",
        imdbID: "tt0057345",
        title: "Contempt",
        year: "1963",
        director: "Jean-Luc Godard"
    },
    {
        ranking: "24",
        imdbID: "tt0042876",
        title: "Rashomon",
        year: "1950",
        director: "Akira Kurosawa"
    },
    {
        ranking: "24",
        imdbID: "tt0048452",
        title: "Ordet",
        year: "1955",
        director: "Carl Theodor Dreyer"
    },
    {
        ranking: "24",
        imdbID: "tt0118694",
        title: "In the Mood for Love",
        year: "2000",
        director: "Wong Kar Wai"
    },
    {
        ranking: "27",
        imdbID: "tt0060107",
        title: "Andrei Rublev",
        year: "1966",
        director: "Andrei Tarkovsky"
    },
    {
        ranking: "28",
        imdbID: "tt0166924",
        title: "Mulholland Drive",
        year: "2003",
        director: "David Lynch"
    },
    {
        ranking: "29",
        imdbID: "tt0079944",
        title: "Stalker",
        year: "1979",
        director: "Andrei Tarkovsky"
    },
    {
        ranking: "29",
        imdbID: "tt0090015",
        title: "Shoah",
        year: "1985",
        director: "Claude Lanzmann"
    },
    {
        ranking: "31",
        imdbID: "tt0075314",
        title: "Taxi Driver",
        year: "1976",
        director: "Martin Scorsese"
    },
    {
        ranking: "31",
        imdbID: "tt0071562",
        title: "The Godfather, Part II",
        year: "1974",
        director: "Francis Ford Coppola"
    },
    {
        ranking: "33",
        imdbID: "tt0040522",
        title: "Bicycle Thieves",
        year: "1948",
        director: "Vittorio de Sica"
    },
    {
        ranking: "34",
        imdbID: "tt0054215",
        title: "Psycho",
        year: "1960",
        director: "Alfred Hitchcock"
    },
    {
        ranking: "34",
        imdbID: "tt0017925",
        title: "The General",
        year: "1926",
        director: "Buster Keaton"
    },
    {
        ranking: "36",
        imdbID: "tt0111341",
        title: "SÃ¡tÃ¡ntangÃ³",
        year: "1994",
        director: "Bela Tarr"
    },
    {
        ranking: "36",
        imdbID: "tt0017136",
        title: "Metropolis",
        year: "1927",
        director: "Fritz Lang"
    },
    {
        ranking: "36",
        imdbID: "tt0073198",
        title: "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles",
        year: "1975",
        director: "Chantal Akerman"
    },
    {
        ranking: "39",
        imdbID: "tt0053779",
        title: "La Dolce Vita",
        year: "1960",
        director: "Federico Fellini"
    },
    {
        ranking: "39",
        imdbID: "tt0053198",
        title: "The 400 Blows",
        year: "1959",
        director: "Francois Truffaut"
    },
    {
        ranking: "41",
        imdbID: "tt0048473",
        title: "Pather Panchali",
        year: "1955",
        director: "Satyajit Ray"
    },
    {
        ranking: "41",
        imdbID: "tt0046511",
        title: "Journey to Italy",
        year: "1954",
        director: "Roberto Rossellini"
    },
    {
        ranking: "43",
        imdbID: "tt0059592",
        title: "Pierrot le Fou",
        year: "1965",
        director: "Jean-Luc Godard"
    },
    {
        ranking: "43",
        imdbID: "tt0100234",
        title: "Close-Up",
        year: "1989",
        director: "Abbas Kiarostami"
    },
    {
        ranking: "43",
        imdbID: "tt0053291",
        title: "Some Like It Hot",
        year: "1959",
        director: "Billy Wilder"
    },
    {
        ranking: "43",
        imdbID: "tt0062136",
        title: "Playtime",
        year: "1967",
        director: "Jacques Tati"
    },
    {
        ranking: "43",
        imdbID: "tt0058138",
        title: "Gertrud",
        year: "1964",
        director: "Carl Theodor Dreyer"
    },
    {
        ranking: "48",
        imdbID: "tt6677224",
        title: "Histoire(s) du Cinema",
        director: "Jean-Luc Godard"
    },
    {
        ranking: "48",
        imdbID: "tt0058946",
        title: "The Battle of Algiers",
        year: "1966",
        director: "Gillo Pontecorvo"
    },
    {
        ranking: "50",
        imdbID: "tt0021749",
        title: "City Lights",
        year: "1931",
        director: "Charlie Chaplin"
    },
    {
        ranking: "50",
        imdbID: "tt0046478",
        title: "Ugetsu Monogatari",
        year: "1953",
        director: "Mizoguchi Kenji"
    },
    {
        ranking: "50",
        imdbID: "tt0056119",
        title: "La JetÃ©e",
        year: "1962",
        director: "Chris Marker"
    },
    {
        ranking: "53",
        imdbID: "tt0053125",
        title: "North by Northwest",
        year: "1959",
        director: "Alfred Hitchcock"
    },
    {
        ranking: "53",
        imdbID: "tt0047396",
        title: "Rear Window",
        year: "1954",
        director: "Alfred Hitchcock"
    },
    {
        ranking: "53",
        imdbID: "tt0081398",
        title: "Raging Bull",
        year: "1980",
        director: "Martin Scorsese"
    },
    {
        ranking: "56",
        imdbID: "tt0022100",
        title: "M",
        year: "1931",
        director: "Fritz Lang"
    },
    {
        ranking: "57",
        imdbID: "tt0057091",
        title: "The Leopard",
        year: "1963",
        director: "Luchino Visconti"
    },
    {
        ranking: "57",
        imdbID: "tt0052311",
        title: "Touch of Evil",
        year: "1958",
        director: "Orson Welles"
    },
    {
        ranking: "59",
        imdbID: "tt0015324",
        title: "Sherlock, Jr.",
        year: "1924",
        director: "Buster Keaton"
    },
    {
        ranking: "59",
        imdbID: "tt0072684",
        title: "Barry Lyndon",
        year: "1975",
        director: "Stanley Kubrick"
    },
    {
        ranking: "59",
        imdbID: "tt0070359",
        title: "La Maman et la Putain",
        year: "1973",
        director: "Jean Eustache"
    },
    {
        ranking: "59",
        imdbID: "tt0047445",
        title: "Sansho Dayu",
        year: "1954",
        director: "Mizoguchi Kenji"
    },
    {
        ranking: "63",
        imdbID: "tt0050986",
        title: "Wild Strawberries",
        year: "1957",
        director: "Ingmar Bergman"
    },
    {
        ranking: "63",
        imdbID: "tt0027977",
        title: "Modern Times",
        year: "1936",
        director: "Charlie Chaplin"
    },
    {
        ranking: "63",
        imdbID: "tt0043014",
        title: "Sunset Blvd.",
        year: "1950",
        director: "Billy Wilder"
    },
    {
        ranking: "63",
        imdbID: "tt0048424",
        title: "The Night of the Hunter",
        year: "1955",
        director: "Charles Laughton"
    },
    {
        ranking: "63",
        imdbID: "tt0053168",
        title: "Pickpocket",
        year: "1959",
        director: "Robert Bresson"
    },
    {
        ranking: "63",
        imdbID: "tt0053221",
        title: "Rio Bravo",
        year: "1958",
        director: "Howard Hawks"
    },
    {
        ranking: "69",
        imdbID: "tt0083658",
        title: "Blade Runner",
        year: "1982",
        director: "Ridley Scott"
    },
    {
        ranking: "69",
        imdbID: "tt0090756",
        title: "Blue Velvet",
        year: "1986",
        director: "David Lynch"
    },
    {
        ranking: "69",
        imdbID: "tt0084628",
        title: "Sans Soleil",
        year: "1982",
        director: "Chris Marker"
    },
    {
        ranking: "69",
        imdbID: "tt0049902",
        title: "A Man Escaped",
        year: "1956",
        director: "Robert Bresson"
    },
    {
        ranking: "73",
        imdbID: "tt0041959",
        title: "The Third Man",
        year: "1949",
        director: "Carol Reed"
    },
    {
        ranking: "73",
        imdbID: "tt0056736",
        title: "LâEclisse",
        year: "1962",
        director: "Michelangelo Antonioni"
    },
    {
        ranking: "73",
        imdbID: "tt0037674",
        title: "Children of Paradise",
        year: "1945",
        director: "Marcel CarnÃ©"
    },
    {
        ranking: "73",
        imdbID: "tt0028950",
        title: "La Grande Illusion",
        year: "1937",
        director: "Jean Renoir"
    },
    {
        ranking: "73",
        imdbID: "tt0073440",
        title: "Nashville",
        year: "1975",
        director: "Robert Altman"
    },
    {
        ranking: "78",
        imdbID: "tt0071315",
        title: "Chinatown",
        year: "1974",
        director: "Roman Polanski"
    },
    {
        ranking: "78",
        imdbID: "tt0209933",
        title: "Beau Travail",
        year: "1998",
        director: "Claire Denis"
    },
    {
        ranking: "78",
        imdbID: "tt0064116",
        title: "Once Upon a Time in the West",
        year: "1968",
        director: "Sergio Leone"
    },
    {
        ranking: "81",
        imdbID: "tt0035015",
        title: "The Magnificent Ambersons",
        year: "1942",
        director: "Orson Welles"
    },
    {
        ranking: "81",
        imdbID: "tt0056172",
        title: "Lawrence of Arabia",
        year: "1962",
        director: "David Lean"
    },
    {
        ranking: "81",
        imdbID: "tt0070040",
        title: "The Spirit of the Beehive",
        year: "1973",
        director: "Victor Erice"
    },
    {
        ranking: "84",
        imdbID: "tt0083922",
        title: "Fanny and Alexander",
        year: "1984",
        director: "Ingmar Bergman"
    },
    {
        ranking: "84",
        imdbID: "tt0034583",
        title: "Casablanca",
        year: "1942",
        director: "Michael Curtiz"
    },
    {
        ranking: "84",
        imdbID: "tt0063555",
        title: "The Colour of Pomegranates",
        year: "1968",
        director: "Sergei Parajanov"
    },
    {
        ranking: "84",
        imdbID: "tt0015881",
        title: "Greed",
        year: "1924",
        director: "Erich von Stroheim"
    },
    {
        ranking: "84",
        imdbID: "tt0101985",
        title: "A Brighter Summer Day",
        year: "1991",
        director: "Edward Yang"
    },
    {
        ranking: "84",
        imdbID: "tt0065214",
        title: "The Wild Bunch",
        year: "1969",
        director: "Sam Peckinpah"
    },
    {
        ranking: "90",
        imdbID: "tt0028445",
        title: "Partie de Campagne",
        year: "1936",
        director: "Jean Renoir"
    },
    {
        ranking: "90",
        imdbID: "tt0038733",
        title: "Aguirre, Wrath of God",
        year: "1972",
        director: "Werner Herzog"
    },
    {
        ranking: "90",
        imdbID: "tt0038733",
        title: "A Matter of Life and Death",
        year: "1946",
        director: "Michael Powell/Emeric Pressburger"
    },
    {
        ranking: "93",
        imdbID: "tt0050976",
        title: "The Seventh Seal",
        year: "1957",
        director: "Ingmar Bergman"
    },
    {
        ranking: "93",
        imdbID: "tt0020530",
        title: "Un Chien Andalou",
        year: "1929",
        director: "Luis BuÃ±uel"
    },
    {
        ranking: "93",
        imdbID: "tt0006864",
        title: "Intolerance",
        year: "1916",
        director: "D.W. Griffith"
    },
    {
        ranking: "93",
        imdbID: "tt0244316",
        title: "A Once and a Two",
        year: "1999",
        director: "Edward Yang"
    },
    {
        ranking: "93",
        imdbID: "tt0036112",
        title: "The Life and Death of Colonel Blimp",
        year: "1943",
        director: "Michael Powell/Emeric Pressburger"
    },
    {
        ranking: "93",
        imdbID: "tt0070820",
        title: "Touki Bouki",
        year: "1973",
        director: "Djibril Diop Mambety"
    },
    {
        ranking: "93",
        imdbID: "tt0071141",
        title: "Fear Eats the Soul",
        year: "1974",
        director: "Rainer Werner Fassbinder"
    },
    {
        ranking: "93",
        imdbID: "tt0052918",
        title: "Imitation of Life",
        year: "1959",
        director: "Douglas Sirk"
    },
    {
        ranking: "93",
        imdbID: "tt0046022",
        title: "Madame deâ¦",
        year: "1953",
        director: "Max OphÃ¼ls"
    },
    {
        ranking: "102",
        imdbID: "tt0127354",
        title: "Wavelength",
        year: "1967",
        director: "Michael Snow"
    },
    {
        ranking: "102",
        imdbID: "tt0065571",
        title: "The Conformist",
        year: "1970",
        director: "Bernardo Bertolucci"
    },
    {
        ranking: "102",
        imdbID: "tt0073800",
        title: "The Travelling Players",
        year: "1975",
        director: "Theodorus Angelopoulos"
    },
    {
        ranking: "102",
        imdbID: "tt0036154",
        title: "Meshes of the Afternoon",
        year: "1943",
        director: "Maya Deren/Alexander Hammid"
    },
    {
        ranking: "102",
        imdbID: "tt0060304",
        title: "Two or Three Things I Know About Her",
        year: "1967",
        director: "Jean-Luc Godard"
    },
    {
        ranking: "102",
        imdbID: "tt0478304",
        title: "The Tree of Life",
        year: "2010",
        director: "Terence Malick"
    },
    {
        ranking: "102",
        imdbID: "tt0037824",
        title: "Ivan the Terrible, Part I",
        year: "1945",
        director: "Sergei M. Eisenstein"
    },
    {
        ranking: "102",
        imdbID: "tt0054632",
        title: "Last Year at Marienbad",
        year: "1961",
        director: "Alain Resnais"
    },
    {
        ranking: "110",
        imdbID: "tt0033804",
        title: "The Lady Eve",
        year: "1941",
        director: "Preston Sturges"
    },
    {
        ranking: "110",
        imdbID: "tt0042804",
        title: "Los Olvidados",
        year: "1950",
        director: "Luis BuÃ±uel"
    },
    {
        ranking: "110",
        imdbID: "tt0029947",
        title: "Bringing Up Baby",
        year: "1938",
        director: "Howard Hawks"
    },
    {
        ranking: "110",
        imdbID: "tt0066214",
        title: "Performance",
        year: "1970",
        director: "Donald Cammell/Nicolas Roeg"
    },
    {
        ranking: "110",
        imdbID: "tt0073580",
        title: "The Passenger",
        year: "1974",
        director: "Michelangelo Antonioni"
    },
    {
        ranking: "110",
        imdbID: "tt0055601",
        title: "Viridiana",
        year: "1961",
        director: "Luis BuÃ±uel"
    },
    {
        ranking: "110",
        imdbID: "tt0021577",
        title: "LâAge dâOr",
        year: "1930",
        director: "Luis BuÃ±uel"
    },
    {
        ranking: "117",
        imdbID: "tt0036695",
        title: "A Canterbury Tale",
        year: "1944",
        director: "Michael Powell/Emeric Pressburger"
    },
    {
        ranking: "117",
        imdbID: "tt0061996",
        title: "Mouchette",
        year: "1966",
        director: "Robert Bresson"
    },
    {
        ranking: "117",
        imdbID: "tt0057012",
        title: "Dr. Strangelove or How I Stopped Worrying and Learned to Love the Bomb",
        year: "1963",
        director: "Stanley Kubrick"
    },
    {
        ranking: "117",
        imdbID: "tt0013442",
        title: "Nosferatu",
        year: "1922",
        director: "F.W. Murnau"
    },
    {
        ranking: "117",
        imdbID: "tt0040725",
        title: "The Red Shoes",
        year: "1948",
        director: "Michael Powell/Emeric Pressburger"
    },
    {
        ranking: "117",
        imdbID: "tt0023622",
        title: "Trouble in Paradise",
        year: "1932",
        director: "Ernst Lubitsch"
    },
    {
        ranking: "117",
        imdbID: "tt0096908",
        title: "A City of Sadness",
        year: "1989",
        director: "Hsiao-hsien Hou"
    },
    {
        ranking: "117",
        imdbID: "tt0071129",
        title: "Amarcord",
        year: "1972",
        director: "Federico Fellini"
    },
    {
        ranking: "117",
        imdbID: "tt0056217",
        title: "The Man Who Shot Liberty Valance",
        year: "1962",
        director: "John Ford"
    },
    {
        ranking: "117",
        imdbID: "tt0077405",
        title: "Days of Heaven",
        year: "1978",
        director: "Terence Malick"
    },
    {
        ranking: "127",
        imdbID: "tt0189219",
        title: "Spring in a Small Town",
        year: "1948",
        director: "Fei Mu"
    },
    {
        ranking: "127",
        imdbID: "tt0097216",
        title: "Do the Right Thing",
        year: "1989",
        director: "Spike Lee"
    },
    {
        ranking: "127",
        imdbID: "tt0246135",
        title: "Out 1",
        year: "1990",
        director: "Jacques Rivette"
    },
    {
        ranking: "127",
        imdbID: "tt0381668",
        title: "Tropical Malady",
        year: "2004",
        director: "Apichatpong Weerasethakul"
    },
    {
        ranking: "127",
        imdbID: "tt0043972",
        title: "The River",
        year: "1951",
        director: "Jean Renoir"
    },
    {
        ranking: "127",
        imdbID: "tt0055032",
        title: "Jules et Jim",
        year: "1962",
        director: "Francois Truffaut"
    },
    {
        ranking: "127",
        imdbID: "tt0110912",
        title: "Pulp Fiction",
        year: "1994",
        director: "Quentin Tarantino"
    },
    {
        ranking: "127",
        imdbID: "tt0037059",
        title: "Meet Me in St. Louis",
        year: "1944",
        director: "Vincente Minnelli"
    },
    {
        ranking: "127",
        imdbID: "tt0085180",
        title: "LâArgent",
        year: "1983",
        director: "Robert Bresson"
    },
    {
        ranking: "127",
        imdbID: "tt0044741",
        title: "Ikiru",
        year: "1952",
        director: "Akira Kurosawa"
    },
    {
        ranking: "127",
        imdbID: "tt0108394",
        title: "Three Colors: Blue",
        year: "1993",
        director: "Krysztof Kielowski"
    },
    {
        ranking: "127",
        imdbID: "tt0069995",
        title: "Donât Look Now",
        year: "1973",
        director: "Nicolas Roeg"
    },
    {
        ranking: "127",
        imdbID: "tt0071381",
        title: "Celine and Julie Go Boating",
        year: "1974",
        director: "Jacques Rivette"
    },
    {
        ranking: "127",
        imdbID: "tt0075686",
        title: "Annie Hall",
        year: "1977",
        director: "Woody Allen"
    },
    {
        ranking: "127",
        imdbID: "tt0053604",
        title: "The Apartment",
        year: "1960",
        director: "Billy Wilder"
    },
    {
        ranking: "127",
        imdbID: "tt0015064",
        title: "The Last Laugh",
        year: "1924",
        director: "F.W. Murnau"
    },
    {
        ranking: "127",
        imdbID: "tt0052893",
        title: "Hiroshima Mon Amour",
        year: "1959",
        director: "Alain Resnais"
    },
    {
        ranking: "144",
        imdbID: "tt0060176",
        title: "Blow Up",
        year: "1966",
        director: "Michelangelo Antonioni"
    },
    {
        ranking: "144",
        imdbID: "tt0032553",
        title: "The Great Dictator",
        year: "1940",
        director: "Charlie Chaplin"
    },
    {
        ranking: "144",
        imdbID: "tt0063291",
        title: "Memories of Underdevelopment",
        year: "1968",
        director: "Tomas Gutierrez Alea"
    },
    {
        ranking: "144",
        imdbID: "tt0042619",
        title: "Diary of a Country Priest",
        year: "1951",
        director: "Robert Bresson"
    },
    {
        ranking: "144",
        imdbID: "tt0109424",
        title: "Chungking Express",
        year: "1994",
        director: "Wong Kar Wai"
    },
    {
        ranking: "144",
        imdbID: "tt0035446",
        title: "To Be or Not To Be",
        year: "1942",
        director: "Ernst Lubitsch"
    },
    {
        ranking: "144",
        imdbID: "tt0072417",
        title: "A Woman Under the Influence",
        year: "1974",
        director: "John Cassavetes"
    },
    {
        ranking: "144",
        imdbID: "tt0018192",
        title: "Napoleon",
        year: "1927",
        director: "Abel Gance"
    },
    {
        ranking: "144",
        imdbID: "tt0056663",
        title: "Vivre Sa Vie",
        year: "1962",
        director: "Jean-Luc Godard"
    },
    {
        ranking: "144",
        imdbID: "tt0032138",
        title: "The Wizard of Oz",
        year: "1939",
        director: "Victor Fleming"
    },
    {
        ranking: "154",
        imdbID: "tt0063278",
        title: "Marketa Lazarova",
        year: "1967",
        director: "Frantisek Vlacil"
    },
    {
        ranking: "154",
        imdbID: "tt0387898",
        title: "Hidden",
        year: "2004",
        director: "Michael Haneke"
    },
    {
        ranking: "154",
        imdbID: "tt0081505",
        title: "The Shining",
        year: "1980",
        director: "Stanley Kubrick"
    },
    {
        ranking: "154",
        imdbID: "tt0069293",
        title: "Solaris",
        year: "1972",
        director: "Andrei Tarkovsky"
    },
    {
        ranking: "154",
        imdbID: "tt0059012",
        title: "Chimes at Midnight",
        year: "1966",
        director: "Orson Welles"
    },
    {
        ranking: "154",
        imdbID: "tt0015864",
        title: "The Gold Rush",
        year: "1925",
        director: "Charlie Chaplin"
    },
    {
        ranking: "154",
        imdbID: "tt0040536",
        title: "Letter from an Unknown Woman",
        year: "1948",
        director: "Max OphÃ¼ls"
    },
    {
        ranking: "154",
        imdbID: "tt0037558",
        title: "Brief Encounter",
        year: "1945",
        director: "David Lean"
    },
    {
        ranking: "154",
        imdbID: "tt0042593",
        title: "In a Lonely Place",
        year: "1950",
        director: "Nicholas Ray"
    },
    {
        ranking: "154",
        imdbID: "tt0039192",
        title: "Black Narcissus",
        year: "1947",
        director: "Michael Powell/Emeric Pressburger"
    },
    {
        ranking: "154",
        imdbID: "tt0096283",
        title: "My Neighbor Totoro",
        year: "1988",
        director: "Miyazaki Hayao"
    },
    {
        ranking: "154",
        imdbID: "tt0031762",
        title: "Only Angels Have Wings",
        year: "1939",
        director: "Howard Hawks"
    },
    {
        ranking: "154",
        imdbID: "tt0023649",
        title: "Vampyr",
        year: "1932",
        director: "Carl Theodor Dreyer"
    },
    {
        ranking: "154",
        imdbID: "tt0091251",
        title: "Come and See",
        year: "1985",
        director: "Elem Klimov"
    },
    {
        ranking: "154",
        imdbID: "tt0095037",
        title: "Distant Voices, Still Lives",
        year: "1988",
        director: "Terence Davies"
    },
    {
        ranking: "154",
        imdbID: "tt0087843",
        title: "Once Upon a Time in America",
        year: "1983",
        director: "Sergio Leone"
    },
    {
        ranking: "154",
        imdbID: "tt0069467",
        title: "Cries and Whispers",
        year: "1972",
        director: "Ingmar Bergman"
    },
    {
        ranking: "171",
        imdbID: "tt0024216",
        title: "King Kong",
        year: "1933",
        director: "Merian C. Cooper/Ernest B. Schoedsack"
    },
    {
        ranking: "171",
        imdbID: "tt0249241",
        title: "The Werckmeister Harmonies",
        year: "2000",
        director: "Bela Tarr"
    },
    {
        ranking: "171",
        imdbID: "tt0076759",
        title: "Star Wars",
        year: "1977",
        director: "George Lucas"
    },
    {
        ranking: "171",
        imdbID: "tt0038787",
        title: "Notorious",
        year: "1946",
        director: "Alfred Hitchcock"
    },
    {
        ranking: "171",
        imdbID: "tt0032599",
        title: "His Girl Friday",
        year: "1940",
        director: "Howard Hawks"
    },
    {
        ranking: "171",
        imdbID: "tt0099685",
        title: "Goodfellas",
        year: "1990",
        director: "Martin Scorsese"
    },
    {
        ranking: "171",
        imdbID: "tt0058450",
        title: "The Umbrellas of Cherbourg",
        year: "1964",
        director: "Jacques Demy"
    },
    {
        ranking: "171",
        imdbID: "tt0000417",
        title: "A Trip to the Moon",
        year: "1902",
        director: "George MÃ©liÃ¨s"
    },
    {
        ranking: "171",
        imdbID: "tt0051036",
        title: "Sweet Smell of Success",
        year: "1957",
        director: "Alexander MacKendrick"
    },
    {
        ranking: "171",
        imdbID: "tt0041546",
        title: "Kind Hearts and Coronets",
        year: "1949",
        director: "Robert Hamer"
    },
    {
        ranking: "171",
        imdbID: "tt0022458",
        title: "Tabu",
        year: "1931",
        director: "F.W. Murnau"
    },
    {
        ranking: "171",
        imdbID: "tt0021571",
        title: "Earth",
        year: "1930",
        director: "Aleksander Dovzhenko"
    },
    {
        ranking: "183",
        imdbID: "tt0115751",
        title: "Breaking the Waves",
        year: "1996",
        director: "Lars von Trier"
    },
    {
        ranking: "183",
        imdbID: "tt0032551",
        title: "The Grapes of Wrath",
        year: "1940",
        director: "John Ford"
    },
    {
        ranking: "183",
        imdbID: "tt0087884",
        title: "Paris, Texas",
        year: "1984",
        director: "Wim Wenders"
    },
    {
        ranking: "183",
        imdbID: "tt0083866",
        title: "E.T.",
        year: "1982",
        director: "Steven Spielberg"
    },
    {
        ranking: "183",
        imdbID: "tt0038890",
        title: "Rome, Open City",
        year: "1945",
        director: "Roberto Rossellini"
    },
    {
        ranking: "183",
        imdbID: "tt0062952",
        title: "Faces",
        year: "1968",
        director: "John Cassavetes"
    },
    {
        ranking: "183",
        imdbID: "tt0051792",
        title: "The Music Room",
        year: "1958",
        director: "Satyajit Ray"
    },
    {
        ranking: "183",
        imdbID: "tt0032156",
        title: "The Story of the Last Chrysanthemums",
        year: "1939",
        director: "Mizoguchi Kenji"
    },
    {
        ranking: "183",
        imdbID: "tt0064451",
        title: "A Touch of Zen",
        year: "1969",
        director: "King Hu"
    },
    {
        ranking: "183",
        imdbID: "tt0034978",
        title: "Listen to Britain",
        year: "1942",
        director: "Humphrey Jennings/Stewart McAllister"
    },
    {
        ranking: "183",
        imdbID: "tt0036506",
        title: "Day of Wrath",
        year: "1943",
        director: "Carl Theodor Dreyer"
    },
    {
        ranking: "183",
        imdbID: "tt0120863",
        title: "The Thin Red Line",
        year: "1998",
        director: "Terence Malick"
    },
    {
        ranking: "183",
        imdbID: "tt0074486",
        title: "Eraserhead",
        year: "1976",
        director: "David Lynch"
    },
    {
        ranking: "183",
        imdbID: "tt0072271",
        title: "The Texas Chainsaw Massacre",
        year: "1974",
        director: "Tobe Hooper"
    },
    {
        ranking: "183",
        imdbID: "tt0068361",
        title: "The Discreet Charm of the Bourgeoisie",
        year: "1972",
        director: "Luis BuÃ±uel"
    },
    {
        ranking: "183",
        imdbID: "tt0071360",
        title: "The Conversation",
        year: "1974",
        director: "Francis Ford Coppola"
    },
    {
        ranking: "183",
        imdbID: "tt0039689",
        title: "Out of the Past",
        year: "1947",
        director: "Jacques Tourneur"
    },
    {
        ranking: "183",
        imdbID: "tt0023634",
        title: "I Was Born, Butâ¦",
        year: "1932",
        director: "Ozu Yasujiro"
    },
    {
        ranking: "183",
        imdbID: "tt0037800",
        title: "âI Know Where Iâm Going!â",
        year: "1945",
        director: "Michael Powell/Emeric Pressburger"
    },
    {
        ranking: "202",
        imdbID: "tt0456149",
        title: "The Death of Mr Lazarescu",
        year: "2005",
        director: "Cristi Puiu"
    },
    {
        ranking: "202",
        imdbID: "tt0058003",
        title: "Red Desert",
        year: "1964",
        director: "Michelangelo Antonioni"
    },
    {
        ranking: "202",
        imdbID: "tt0061465",
        title: "Chelsea Girls",
        year: "1966",
        director: "Andy Warhol/Paul Morrissey"
    },
    {
        ranking: "202",
        imdbID: "tt0069762",
        title: "Badlands",
        year: "1973",
        director: "Terence Malick"
    },
    {
        ranking: "202",
        imdbID: "tt0073152",
        title: "Kings of the Road",
        year: "1976",
        director: "Wim Wenders"
    },
    {
        ranking: "202",
        imdbID: "tt0469494",
        title: "There Will Be Blood",
        year: "2002",
        director: "Paul Thomas Anderson"
    },
    {
        ranking: "202",
        imdbID: "tt0910970",
        title: "WALL-E",
        year: "2008",
        director: "Andrew Stanton"
    },
    {
        ranking: "202",
        imdbID: "tt0080196",
        title: "Berlin Alexanderplatz",
        year: "1980",
        director: "Rainer Werner Fassbinder"
    },
    {
        ranking: "202",
        imdbID: "tt0086541",
        title: "Videodrome",
        year: "1983",
        director: "David Cronenberg"
    },
    {
        ranking: "202",
        imdbID: "tt0060959",
        title: "Daisies",
        year: "1966",
        director: "Vera Chytilova"
    },
    {
        ranking: "202",
        imdbID: "tt1588895",
        title: "Uncle Boonmee Who Can Recall His Past Lives",
        year: "2010",
        director: "Apichatpong Weerasethakul"
    },
    {
        ranking: "202",
        imdbID: "tt0079522",
        title: "Manhattan",
        year: "1979",
        director: "Woody Allen"
    },
    {
        ranking: "202",
        imdbID: "tt0055852",
        title: "Cleo From 5 to 7",
        year: "1962",
        director: "Agnes Varda"
    },
    {
        ranking: "202",
        imdbID: "tt0389448",
        title: "West of the Tracks",
        year: "2002",
        director: "Wang Bing"
    },
    {
        ranking: "202",
        imdbID: "tt0318034",
        title: "Russian Ark",
        year: "2002",
        director: "Aleksandr Sokurov"
    },
    {
        ranking: "202",
        imdbID: "tt0079986",
        title: "A Tale of Tales",
        year: "1979",
        director: "Yuri Norstein"
    },
    {
        ranking: "202",
        imdbID: "tt0245429",
        title: "Spirited Away",
        year: "2001",
        director: "Miyazaki Hayao"
    },
    {
        ranking: "202",
        imdbID: "tt0047528",
        title: "La Strada",
        year: "1954",
        director: "Federico Fellini"
    },
    {
        ranking: "202",
        imdbID: "tt0038823",
        title: "PaisÃ ",
        year: "1946",
        director: "Roberto Rossellini"
    },
    {
        ranking: "202",
        imdbID: "tt0033045",
        title: "The Shop Around the Corner",
        year: "1940",
        director: "Ernst Lubitsch"
    },
    {
        ranking: "202",
        imdbID: "tt0038355",
        title: "The Big Sleep",
        year: "1946",
        director: "Howard Hawks"
    },
    {
        ranking: "202",
        imdbID: "tt0076263",
        title: "Killer of Sheep",
        year: "1977",
        director: "Charles Burnett"
    },
    {
        ranking: "202",
        imdbID: "tt0067961",
        title: "Wanda",
        year: "1970",
        director: "Barbara Loden"
    },
    {
        ranking: "202",
        imdbID: "tt0039417",
        title: "Germany, Year Zero",
        year: "1948",
        director: "Roberto Rossellini"
    },
    {
        ranking: "202",
        imdbID: "tt0045112",
        title: "The Life of Oharu",
        year: "1952",
        director: "Mizoguchi Kenji"
    },
    {
        ranking: "202",
        imdbID: "tt0064040",
        title: "Army of Shadows",
        year: "1969",
        director: "Jean-Pierre Melville"
    },
    {
        ranking: "202",
        imdbID: "tt0073650",
        title: "Salo, or the 120 Days of Sodom",
        year: "1975",
        director: "Pier Paolo Pasolini"
    },
    {
        ranking: "202",
        imdbID: "tt0023969",
        title: "Duck Soup",
        year: "1933",
        director: "Leo McCarey"
    },
    {
        ranking: "202",
        imdbID: "tt0075938",
        title: "The Devil Probably",
        year: "1977",
        director: "Robert Bresson"
    },
    {
        ranking: "202",
        imdbID: "tt1316540",
        title: "The Turin Horse",
        director: "Bela Tarr"
    },
    {
        ranking: "202",
        imdbID: "tt0087644",
        title: "Love Streams",
        year: "1984",
        director: "John Cassavetes"
    },
    {
        ranking: "202",
        imdbID: "tt0056732",
        title: "The Exterminating Angel",
        year: "1962",
        director: "Luis BuÃ±uel"
    },
    {
        ranking: "202",
        imdbID: "tt0048757",
        title: "Floating Clouds",
        year: "1955",
        director: "Naruse Mikio"
    },
    {
        ranking: "235",
        imdbID: "tt0107822",
        title: "The Piano",
        year: "1992",
        director: "Jane Campion"
    },
    {
        ranking: "235",
        imdbID: "tt0031381",
        title: "Gone With the Wind",
        year: "1939",
        director: "Victor Fleming"
    },
    {
        ranking: "235",
        imdbID: "tt1527186",
        title: "Melancholia",
        year: "2011",
        director: "Lars von Trier"
    },
    {
        ranking: "235",
        imdbID: "tt0336693",
        title: "The House Is Black",
        year: "1962",
        director: "Forough Farrokhzad"
    },
    {
        ranking: "235",
        imdbID: "tt0010323",
        title: "The Cabinet of Dr. Caligari",
        year: "1920",
        director: "Robert Wiene"
    },
    {
        ranking: "235",
        imdbID: "tt0040724",
        title: "Red River",
        year: "1948",
        director: "Howard Hawks/Arthur Rosson"
    },
    {
        ranking: "235",
        imdbID: "tt0066921",
        title: "A Clockwork Orange",
        year: "1971",
        director: "Stanley Kubrick"
    },
    {
        ranking: "235",
        imdbID: "tt0067893",
        title: "Two-Lane Blacktop",
        year: "1971",
        director: "Monte Hellman"
    },
    {
        ranking: "235",
        imdbID: "tt0056444",
        title: "An Autumn Afternoon",
        year: "1962",
        director: "Ozu Yasujiro"
    },
    {
        ranking: "235",
        imdbID: "tt0096257",
        title: "The Thin Blue Line",
        year: "1989",
        director: "Errol Morris"
    },
    {
        ranking: "235",
        imdbID: "tt0052572",
        title: "The World of Apu",
        year: "1958",
        director: "Satyajit Ray"
    },
    {
        ranking: "235",
        imdbID: "tt0023563",
        title: "The Testament of Dr. Mabuse",
        year: "1933",
        director: "Fritz Lang"
    },
    {
        ranking: "235",
        imdbID: "tt0038762",
        title: "My Darling Clementine",
        year: "1946",
        director: "John Ford"
    },
    {
        ranking: "235",
        imdbID: "tt0101765",
        title: "The Double Life of Veronique",
        year: "1991",
        director: "Krysztof Kielowski"
    },
    {
        ranking: "235",
        imdbID: "tt0064541",
        title: "Kes",
        year: "1966",
        director: "Ken Loach"
    },
    {
        ranking: "235",
        imdbID: "tt0111495",
        title: "Three Colors: Red",
        year: "1994",
        director: "Krysztof Kielowski"
    }
]

console.log(imdbIDs)
console.log(bfiData)
export default imdbIDs;