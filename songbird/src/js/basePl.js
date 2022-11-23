const birdsData = [
  [
    {
      id: 1,
      name: "Kruk",
      species: "Corvus corax",
      description:
        "Kruk to duży ptak. Długość ciała sięga 70 centymetrów, rozpiętość skrzydeł do półtora metra. Kruki zamieszkują okolice wieży Tower. W Anglii panuje przekonanie, że w dniu, w którym czarne kruki odlecą z wieży, monarchia upadnie.",
      image: "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3",
    },
    {
      id: 2,
      name: "Żuraw",
      species: "Grus grus",
      description:
        "Dźwięki wydawane przez żurawia są podobne do dźwięcznego „kur-ły - kur-ły”. Żurawie najczęściej śpiewają w duecie – jeden ptak zaczyna śpiew od sylaby „kur”, a drugi podnosi „ły”. Jeśli ptak śpiewa sam, wydaje tylko dźwięk „kur”.",
      image: "https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3",
    },
    {
      id: 3,
      name: "Jaskółka oknówka",
      species: "Delichon urbicum",
      description:
        "Jaskółki charakteryzują się niskim ćwierkaniem. Pieśni jaskółek nie milkną przez całe lato. Naukowcy rozróżniają do 6 ćwierkających dźwięków u ptaków: „vit”, „vi-vit”, „chivit”, „chirivit” itp. Jaskółki uwielbiają śpiewać w duecie.",
      image: "https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3",
    },
    {
      id: 4,
      name: "Lelek",
      species: "Caprimulgus europaeus",
      description:
        "Lelek to niepozorny ptak znany ze swojego głosu. Pieśń lelka brzmi jak monotonny tryl podobny do stukotu motocykla. Takie grzechotanie słychać od zmierzchu do świtu, zmienia się jego tonacja, częstotliwość i głośność.",
      image: "https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3",
    },
    {
      id: 5,
      name: "Kukułka",
      species: "Cuculus canorus",
      description:
        "Kukułka została tak nazwana ze względu na specyfikę jej piosenek. Dźwięcznej „kukułki” nie można pomylić z żadnym innym ptakiem. Kukułki nie budują gniazd, ich potomstwo wychowują inne gatunki ptaków, którym kukułki podrzucają jaja.",
      image: "https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3",
    },
    {
      id: 6,
      name: "Sikora",
      species: "Parus major",
      description:
        "W ćwierkaniu sikorek wyróżnia się ponad 40 różnych kombinacji dźwiękowych. Śpiewają prawie przez cały rok, trochę zacichając tylko zimą. Sikory to prawdziwe sanitariuszki lasu. Jedna para sikorek w okresie lęgowym chroni dziesiątki drzew przed szkodnikami.",
      image: "https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Wróbel",
      species: "Passer domesticus",
      description:
        "Wróble to najbardziej znane i rozpoznawalne ptaki. Można je łatwo rozpoznać po kolorowym upierzeniu i dziarskim śpiewie. Wróble należą do gatunków synotropowych - osiedlają się blisko siedlisk ludzkich.",
      image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3",
    },
    {
      id: 2,
      name: "Gawron",
      species: "Corvus frugilegus",
      description:
        "Gawrony to bardzo inteligentne i bystre ptaki. Za pomocą dzioba tworzą i wykorzystują najprostsze narzędzia. Gawrony mają rozwinięty odruch na odgłosy traktora. Słysząc „grzechotanie”, lecą na dźwięk – traktor orze ziemię, co oznacza, że ​​w tym miejscu jest dużo jedzenia.",
      image: "https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3",
    },
    {
      id: 3,
      name: "Kawka",
      species: "Coloeus monedula",
      description:
        "Kawki pierwotnie zamieszkiwały skupiska starych, dziuplastych drzew i szczelin skalnych, w których się lęgły. W Europie zaczęły przysposabiać się do środowisk miejskich po II wojnie światowej, kiedy to wskutek bombardowań miasta miejscami zamieniły się w rumowiska skalne, dobre miejsca do gniazdowania. Łacińska nazwa kawki „monedula” jest związana ze słowami 'moneta' za miłość ptaka do błyszczących i jasnych rzeczy.",
      image: "https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3",
    },
    {
      id: 4,
      name: "Drozd śpiewający",
      species: "Turdus philomelos",
      description:
        "Drozd to najlepszy wokalista z rodziny Wróbli. Piosenka składa się tylko z pięknych, dźwięcznych gwizdów i krótkich tryli. Najczęściej można go usłyszeć rano i wieczorem. Drozdy śpiewają przez cały okres lęgowy.",
      image: "https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3",
    },
    {
      id: 5,
      name: "Sroka",
      species: "Pica pica",
      description:
        "Sroka to bardzo pracowity ptak. Buduje do ośmiu gniazd, a następnie wybiera najlepsze z nich. Wejście do gniazda srok jest zawsze skierowane na południe, dzięki czemu w mieszkaniu jest cieplej. Sroki to jedyne ptaki, które rozpoznają się w lustrze.",
      image: "https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3",
    },
    {
      id: 6,
      name: "Sójka",
      species: "Garrulus glandarius",
      description:
        "Kiedy sójka się martwi, kępka na jej głowie jest zmierzwiona. Ptak próbuje stworzyć przerażający widok. Sójki potrafią naśladować głosy innych ptaków, zwierząt oraz dźwięki wydawane przez ludzi. Na zimę robią duże zapasy żołędzi i orzechów.",
      image: "https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Zięba",
      species: "Fringilla coelebs",
      description:
        "Na wolności występuje 450 gatunków zięb. Zimą zięby prowadzą stadny tryb życia. Czasami w ich rodzinach można zobaczyć wróble. Zięby śpiewają wiosną, wraz z początkiem sezonu godowego. Ich śpiew to tryskające wielominutowe tryle.",
      image: "https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3",
    },
    {
      id: 2,
      name: "Krzyżodziób",
      species: "Loxia curvirostra",
      description:
        "Krzyżodzioby nazywane są ptakami „świątecznymi”. W naturalnych warunkach rodzą się zimą - w styczniu. Ptaki te izolują swoje gniazda mchem i sierścią zwierząt, dzięki czemu pisklętom nie jest zimno. W poszukiwaniu szyszek krzyżodzioby potrafią przelecieć 350 km od gniazda.",
      image: "https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3",
    },
    {
      id: 3,
      name: "Turkawka",
      species: "Streptopelia turtur",
      description:
        "Ten gołąb żyje w lasach mieszanych i liściastych, a także w parkach miejskich i miasteczkach. Ptaki często wybierają miejsca życia obok ludzi i łatwo przyzwyczajają się do nich. Ze względu na melodyjny przyjemny śpiew turkawek, często hoduje się je w domu.",
      image: "https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3",
    },
    {
      id: 4,
      name: "Dzięcioł",
      species: "Dendrocopos major",
      description:
        "Dzięcioł to rzucający się w oczy i hałaśliwy ptak, który często żyje obok ludzi. Od połowy stycznia do końca czerwca można usłyszeć „bęben” dzięciołów – tryl z drgania gałęzi pod szybkimi uderzeniami ptasiego dzioba. Przy dobrej pogodzie tryl słychać w promieniu 1,5 km.",
      image: "https://live.staticflickr.com/65535/49339376578_e933426455.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3",
    },
    {
      id: 5,
      name: "Dudek",
      species: "Upupa epops",
      description:
        "Dudki wolą żyć w otwartych krajobrazach z pojedynczymi drzewami lub gajami. Najwygodniejsze dla ptaka są stepy leśne i sawanny. Dudek może wybrać miejsce zamieszkania obok człowieka: pastwiska, winorośle, sady.",
      image: "https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3",
    },
    {
      id: 6,
      name: "Jerzyk",
      species: "Apus apus",
      description:
        "Jeżyka można spotkać niemal w każdym zakątku planety. Żyją zarówno na terenach leśnych, jak i na terenach otwartych. Jerzyki żyją w dużych stadach. Duże kolonie tych ptaków można zobaczyć w miastach lub na nadmorskich klifach.",
      image: "https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Skowronek",
      species: "Alauda arvensis",
      description:
        "Skowronki to ptaki wędrowne. Od początku września lecą na południe. Wracają na początku marca, niezależnie od tego, czy śnieg stopniał, czy nie. Przybyciem skowronków określali początek wiosny i czas orania ziemi.",
      image: "https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3",
    },
    {
      id: 2,
      name: "Słowik",
      species: "Luscinia luscinia",
      description:
        "Słowiki śpiewają od początku maja do końca lata. Każda pieśń słowika składa się z 12 powtarzających się elementów, zwanych też kolanami. Oprócz własnych tryli słowiki łatwo i dobrze przejmują śpiew innych ptaków.",
      image: "https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3",
    },
    {
      id: 3,
      name: "Szpak",
      species: "Sturnus vulgaris",
      description:
        "Szpaki to ptaki wędrowne. Synchroniczny lot dużych stad szpaków nazywany jest szmerem. To piękne i hipnotyzujące zjawisko - wiele ptaków zdaje się tańczyć w powietrzu, tworząc skomplikowane kształty, które maleją i powiększają się na niebie.",
      image: "https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3",
    },
    {
      id: 4,
      name: "Wilga",
      species: "Oriolus oriolus",
      description:
        "Melodię śpiewu wilgi porównuje się do dźwięku fletu. Ludziom trudno jest zobaczyć wilgę, ponieważ żyje ona wysoko na drzewach. Wilga to nie tylko bardzo piękny, ale także pożyteczny ptak. Niszczy jadowite gąsienice, których inne ptaki nie jedzą.",
      image: "https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3",
    },
    {
      id: 5,
      name: "Jemiołuszka",
      species: "Bombycilla garrulus",
      description:
        "Jemiołucha ma bardzo wytrwałe pazury, które pomagają ptakowi utrzymać się na gałęziach i dziobać najtrudniejsze do zdobycia jagody. Podczas zalotów samiec oferuje samicy jagodę lub inny smakołyk. Jeśli samica to zaakceptuje, ptaki tworzą parę.",
      image: "https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3",
    },
    {
      id: 6,
      name: "Szczygieł",
      species: "Carduelis carduelis",
      description:
        "Szczygieł śpiewa pięknie i melodyjnie. Zarówno w naturze, jak iw niewoli ćwierkają prawie przez cały rok. W śpiewie szczygła wyróżnia się ponad 20 opalizujących tryli. Szczygieł przyzwyczaja się do ludzi, a nawet może wrócić do właściciela po wypuszczeniu na wolność.",
      image: "https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Orzeł",
      species: "Aquila nipalensis",
      description:
        "W starożytności orzeł był symbolem słońca. Orły często szybują nad ziemią, a ich prędkość może dochodzić do 240 km/h. Złudzenie powolnego ruchu wynika z wysokości lotu - ponad 700 metrów",
      image: "https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3",
    },
    {
      id: 2,
      name: "Kania czarna",
      species: "Milvus migrans",
      description:
        "Kanie są dużymi drapieżnikami, osiągają wysokość około pół metra, a waga dorosłych dochodzi do 1 kg. Skrzydła są wąskie i długie, ich rozpiętość wynosi 1,5 m. Kanie często gniazdują w dużych stadach, a nawet tworzą duże kolonie.",
      image: "https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3",
    },
    {
      id: 3,
      name: "Лунь",
      species: "Błotniak zbożowy",
      description:
        "Błotniak to mały sokół. Żywi się głównie gryzoniami, podstawą jego diety są norniki, chomiki i myszy. Upierzenie błotniaka może być popielate. Z takim ptakiem kojarzy się porównanie „siwowłosy jak błotniak”.",
      image: "https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3",
    },
    {
      id: 4,
      name: "Sokół",
      species: "Falco peregrinus",
      description:
        "Łacińska nazwa sokoła Falco pochodzi od słowa „sierp” ze względu na sierpowate skrzydła. Długie i szerokie skrzydła pozwalają sokołowi wzbić się wysoko w niebo i swobodnie szybować. Prędkość lotu sokoła sięga 280-320 kilometrów na godzinę.",
      image: "https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3",
    },
    {
      id: 5,
      name: "Jastrząb",
      species: "Accipiter gentilis",
      description:
        "Wszystkie jastrzębie charakteryzują się szerokimi i krótkimi skrzydłami. Kolejną cechą wyróżniającą są białe „brwi” nad oczami. Słowiańscy wojownicy umieszczali wizerunek jastrzębia na swoich chorągwiach jako symbol odwagi, siły i bezwzględności wobec wrogów.",
      image: "https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3",
    },
    {
      id: 6,
      name: "Puchacz",
      species: "Bubo bubo",
      description:
        "Lot puchacza jest cichy, wzrok bardzo ostry. Te cechy sprawiają, że ptak jest niezrównanym nocnym łowcą. Puchacz nie ma naturalnych wrogów, ani jedno zwierzę nie poluje na dorosłe ptaki. Ale lisy i wilki atakują pisklęta.",
      image: "https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3",
    },
  ],
  [
    {
      id: 1,
      name: "Albatros",
      species: "Diomedea exulans",
      description:
        "Albatros to największy ptak latający na świecie. Rozpiętość skrzydeł sięga trzech i pół metrów, waga - dziesięć kilogramów. Albatrosy spędzają większość swojego życia w powietrzu, pokonując ogromne odległości nad oceanem.",
      image: "https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3",
    },
    {
      id: 2,
      name: "Głuptak niebieskonogi",
      species: "Sula nebouxii",
      description:
        "Cechą głuptaka niebieskonogiego jest nie tylko bogaty, jasnoniebieski kolor nóg, ale także fakt, że są one bardzo ciepłe. Podczas gdy inne gatunki ptaków ogrzewają lęgi swoim ciałem, głuptak niebieskonogi robi to za pomocą łap.",
      image: "https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3",
    },
    {
      id: 3,
      name: "Petrel",
      species: "Puffinus griseus",
      description:
        "Rozmiary petreli są różne. Najmniejsze z nich mają do 25 cm długości, największe do 1 m, przy rozpiętości skrzydeł ok. 2 m. Istnieje przekonanie, że pojawienie się petrela w powietrzu zwiastuje burzę, jak wskazuje nazwa ptaka.",
      image: "https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3",
    },
    {
      id: 4,
      name: "Pelikan",
      species: "Pelecanus",
      description:
        "Pelikany są mieszkańcami mórz i rzek. Chodzą niezdarnie, ale dobrze latają i pływają. Żywią się głównie rybami, organizują polowania zbiorowe - ustawiają się w półkolu, machają skrzydłami i dziobami po wodzie i wypędzają spłoszone ryby na płytką wodę.",
      image: "https://anapacity.com/Images/Pages/kudryavyj-pelikan.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3",
    },
    {
      id: 5,
      name: "Pingwin",
      species: "Aptenodytes forsteri",
      description:
        "Samiec pingwina cesarskiego osiąga wysokość 130 cm, jego waga może zbliżyć się do 50 kg. Ze wszystkich współczesnych pingwinów ten gatunek jest największy. Dieta pingwina składa się z ryb, kalmarów i kryla. Ptaki polują w oceanie w dużych grupach.",
      image: "https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3",
    },
    {
      id: 6,
      name: "Mewa",
      species: "Larus argentatus",
      description:
        "Mewy zamieszkują brzegi mórz, jezior, rzek, zbiorników wodnych, bagien, często gniazdują na wyspach. Od końca ubiegłego wieku mewy zaczęły pojawiać się w dużych miastach, gdzie gnieżdżą się na dachach budynków. Wszystkie mewy prowadzą kolonialny tryb życia.",
      image: "https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3",
    },
  ],
];

export default birdsData;
