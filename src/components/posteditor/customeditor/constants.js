
import theme from 'src/theme';

const { colors } = theme;

export const SAMPLE_TEMPLATE=`
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=ABeeZee|Abel|Aclonica|Acme|Actor|Advent+Pro|Alata|Alatsi|Aldrich|Alef|Alegreya+Sans|Alegreya+Sans+SC|Allerta|Allerta+Stencil|Almarai|Amaranth|Amiko|Anaheim|Andika|Andika+New+Basic|Antic|Anton|Archivo|Archivo+Black|Archivo+Narrow|Arimo|Armata|Arsenal|Arya|Asap|Asap+Condensed|Assistant|Asul|Athiti|Average+Sans|B612|Bai+Jamjuree|Barlow|Barlow+Condensed|Barlow+Semi+Condensed|Basic|Be+Vietnam|Belleza|BenchNine|Biryani|Black+And+White+Picture|Black+Han+Sans|Blinker|Bubbler+One|Cabin|Cabin+Condensed|Cagliostro|Cairo|Cambay|Candal|Cantarell|Cantora+One|Capriola|Carme|Carrois+Gothic|Carrois+Gothic+SC|Catamaran|Chakra+Petch|Changa|Chathura|Chau+Philomene+One|Chivo|Coda+Caption|Commissioner|Convergence|Cuprum|DM+Sans|Darker+Grotesque|Days+One|Denk+One|Dhurjati|Didact+Gothic|Do+Hyeon|Doppio+One|Dorsa|Dosis|Duru+Sans|Economica|El+Messiri|Electrolize|Encode+Sans|Encode+Sans+Condensed|Encode+Sans+Expanded|Encode+Sans+Semi+Condensed|Encode+Sans+Semi+Expanded|Englebert|Epilogue|Exo|Exo+2|Fahkwang|Farro|Federo|Fira+Sans|Fira+Sans+Condensed|Fira+Sans+Extra+Condensed|Fjalla+One|Francois+One|Fresca|GFS+Neohellenic|Gafata|Galdeano|Gayathri|Geo|Gidugu|Gothic+A1|Gotu|Gudea|Hammersmith+One|Harmattan|Heebo|Hind|Hind+Guntur|Hind+Madurai|Hind+Siliguri|Hind+Vadodara|Homenaje|IBM+Plex+Sans|IBM+Plex+Sans+Condensed|Imprima|Inder|Inria+Sans|Inter|Istok+Web|Jaldi|Jockey+One|Josefin+Sans|Jost|Jua|Julius+Sans+One|Jura|K2D|Kanit|Kantumruy|Karla|Khand|Khula|Kite+One|KoHo|Kodchasan|Kosugi|Kosugi+Maru|Krona+One|Krub|Kulim+Park|Kumbh+Sans|Lato|Lekton|Lexend+Deca|Lexend+Exa|Lexend+Giga|Lexend+Mega|Lexend+Peta|Lexend+Tera|Lexend+Zetta|Libre+Franklin|Livvic|M+PLUS+1p|M+PLUS+Rounded+1c|Mada|Magra|Mako|Mallanna|Mandali|Manjari|Manrope|Marmelad|Martel+Sans|Marvel|Maven+Pro|Meera+Inimai|Merriweather+Sans|Metrophobic|Michroma|Mina|Miriam+Libre|Mitr|Molengo|Monda|Montserrat|Montserrat+Alternates|Montserrat+Subrayada|Mouse+Memoirs|Mukta|Mukta+Mahee|Mukta+Malar|Mukta+Vaani|Mulish|NTR|Nanum+Gothic|News+Cycle|Niramit|Nobile|Notable|Noto+Sans|Noto+Sans+HK|Noto+Sans+JP|Noto+Sans+KR|Noto+Sans+SC|Noto+Sans+TC|Numans|Nunito|Nunito+Sans|Open+Sans|Open+Sans+Condensed|Orbitron|Orienta|Oswald|Overpass|Oxygen|PT+Sans|PT+Sans+Caption|PT+Sans+Narrow|Padauk|Palanquin|Palanquin+Dark|Pathway+Gothic+One|Pattaya|Pavanam|Paytone+One|Philosopher|Play|Pontano+Sans|Poppins|Port+Lligat+Sans|Pragati+Narrow|Prompt|Proza+Libre|Public+Sans|Puritan|Quantico|Quattrocento+Sans|Questrial|Quicksand|Rajdhani|Raleway|Ramabhadra|Rambla|Rationale|Recursive|Red+Hat+Display|Red+Hat+Text|Reem+Kufi|Roboto|Roboto+Condensed|Ropa+Sans|Rosario|Rubik|Rubik+Mono+One|Ruda|Ruluko|Rum+Raisin|Russo+One|Saira|Saira+Condensed|Saira+Extra+Condensed|Saira+Semi+Condensed|Sansita|Sarabun|Sarala|Sarpanch|Sawarabi+Gothic|Sawarabi+Mincho|Scada|Secular+One|Sen|Seymour+One|Shanti|Share+Tech|Signika|Signika+Negative|Sintony|Six+Caps|Snippet|Sora|Source+Sans+Pro|Space+Grotesk|Spartan|Spinnaker|Strait|Stylish|Sulphur+Point|Sunflower|Syncopate|Syne|Tajawal|Tauri|Teko|Telex|Tenali+Ramakrishna|Tenor+Sans|Text+Me+One|Thasadith|Timmana|Titillium+Web|Tomorrow|Trispace|Ubuntu|Ubuntu+Condensed|Varela|Varela+Round|Varta|Viga|Voltaire|Wendy+One|Wire+One|Work+Sans|Yanone+Kaffeesatz|Yantramanav">
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    height: 100vh;
                    width: 100vw;
                }

                button:focus {
                    outline: none;
                }

                .editor-active-element {
                    border: 1px dashed ${colors.primaryColor} !important;
                }
            </style>
        </head>
        <body id="editor-body">
        </body>
    </html>
`;