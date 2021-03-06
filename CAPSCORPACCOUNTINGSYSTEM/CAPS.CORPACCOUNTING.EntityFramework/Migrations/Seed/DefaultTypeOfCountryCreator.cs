﻿using System.Linq;
using CAPS.CORPACCOUNTING.EntityFramework;
using CAPS.CORPACCOUNTING.Masters;
using System.Collections.Generic;

namespace CAPS.CORPACCOUNTING.Migrations.Seed
{

    public class DefaultTypeOfCountryCreator
    {
        public static List<TypeOfCountryUnit> InitialTypeOfCountryList { get; private set; }

        private readonly CORPACCOUNTINGDbContext _context;

        static DefaultTypeOfCountryCreator()
        {
            InitialTypeOfCountryList = new List<TypeOfCountryUnit>
            {

                            new  TypeOfCountryUnit(description:"Aaland Islands",twoLetterAbbreviation:"AX",threeLetterAbbreviation:"ALA",isoNumber:"248"),
                            new  TypeOfCountryUnit(description:"Afghanistan",twoLetterAbbreviation:"AF",threeLetterAbbreviation:"AFG",isoNumber:"004"),
                            new  TypeOfCountryUnit(description:"Albania",twoLetterAbbreviation:"AL",threeLetterAbbreviation:"ALB",isoNumber:"008"),
                            new  TypeOfCountryUnit(description:"Algeria",twoLetterAbbreviation:"DZ",threeLetterAbbreviation:"DZA",isoNumber:"012"),
                            new  TypeOfCountryUnit(description:"American Samoa",twoLetterAbbreviation:"AS",threeLetterAbbreviation:"ASM",isoNumber:"016"),
                            new  TypeOfCountryUnit(description:"Andorra",twoLetterAbbreviation:"AD",threeLetterAbbreviation:"AND",isoNumber:"020"),
                            new  TypeOfCountryUnit(description:"Angola",twoLetterAbbreviation:"AO",threeLetterAbbreviation:"AGO",isoNumber:"024"),
                            new  TypeOfCountryUnit(description:"Anguilla",twoLetterAbbreviation:"AI",threeLetterAbbreviation:"AIA",isoNumber:"660"),
                            new  TypeOfCountryUnit(description:"Antarctica",twoLetterAbbreviation:"AQ",threeLetterAbbreviation:"ATA",isoNumber:"010"),
                            new  TypeOfCountryUnit(description:"Antigua And Barbuda",twoLetterAbbreviation:"AG",threeLetterAbbreviation:"ATG",isoNumber:"028"),
                            new  TypeOfCountryUnit(description:"Argentina",twoLetterAbbreviation:"AR",threeLetterAbbreviation:"ARG",isoNumber:"032"),
                            new  TypeOfCountryUnit(description:"Armenia",twoLetterAbbreviation:"AM",threeLetterAbbreviation:"ARM",isoNumber:"051"),
                            new  TypeOfCountryUnit(description:"Aruba",twoLetterAbbreviation:"AW",threeLetterAbbreviation:"ABW",isoNumber:"533"),
                            new  TypeOfCountryUnit(description:"Australia",twoLetterAbbreviation:"AU",threeLetterAbbreviation:"AUS",isoNumber:"036"),
                            new  TypeOfCountryUnit(description:"Austria",twoLetterAbbreviation:"AT",threeLetterAbbreviation:"AUT",isoNumber:"040"),
                            new  TypeOfCountryUnit(description:"Azerbaijan",twoLetterAbbreviation:"AZ",threeLetterAbbreviation:"AZE",isoNumber:"031"),
                            new  TypeOfCountryUnit(description:"Bahamas",twoLetterAbbreviation:"BS",threeLetterAbbreviation:"BHS",isoNumber:"044"),
                            new  TypeOfCountryUnit(description:"Bahrain",twoLetterAbbreviation:"BH",threeLetterAbbreviation:"BHR",isoNumber:"048"),
                            new  TypeOfCountryUnit(description:"Bangladesh",twoLetterAbbreviation:"BD",threeLetterAbbreviation:"BGD",isoNumber:"050"),
                            new  TypeOfCountryUnit(description:"Barbados",twoLetterAbbreviation:"BB",threeLetterAbbreviation:"BRB",isoNumber:"052"),
                            new  TypeOfCountryUnit(description:"Belarus",twoLetterAbbreviation:"BY",threeLetterAbbreviation:"BLR",isoNumber:"112"),
                            new  TypeOfCountryUnit(description:"Belgium",twoLetterAbbreviation:"BE",threeLetterAbbreviation:"BEL",isoNumber:"056"),
                            new  TypeOfCountryUnit(description:"Belize",twoLetterAbbreviation:"BZ",threeLetterAbbreviation:"BLZ",isoNumber:"084"),
                            new  TypeOfCountryUnit(description:"Benin",twoLetterAbbreviation:"BJ",threeLetterAbbreviation:"BEN",isoNumber:"204"),
                            new  TypeOfCountryUnit(description:"Bermuda",twoLetterAbbreviation:"BM",threeLetterAbbreviation:"BMU",isoNumber:"060"),
                            new  TypeOfCountryUnit(description:"Bhutan",twoLetterAbbreviation:"BT",threeLetterAbbreviation:"BTN",isoNumber:"064"),
                            new  TypeOfCountryUnit(description:"Bolivia",twoLetterAbbreviation:"BO",threeLetterAbbreviation:"BOL",isoNumber:"068"),
                            new  TypeOfCountryUnit(description:"Bosnia And Herzegowina",twoLetterAbbreviation:"BA",threeLetterAbbreviation:"BIH",isoNumber:"070"),
                            new  TypeOfCountryUnit(description:"Botswana",twoLetterAbbreviation:"BW",threeLetterAbbreviation:"BWA",isoNumber:"072"),
                            new  TypeOfCountryUnit(description:"Bouvet Island",twoLetterAbbreviation:"BV",threeLetterAbbreviation:"BVT",isoNumber:"074"),
                            new  TypeOfCountryUnit(description:"Brazil",twoLetterAbbreviation:"BR",threeLetterAbbreviation:"BRA",isoNumber:"076"),
                            new  TypeOfCountryUnit(description:"British Indian Ocean Territory",twoLetterAbbreviation:"IO",threeLetterAbbreviation:"IOT",isoNumber:"086"),
                            new  TypeOfCountryUnit(description:"Brunei Darussalam",twoLetterAbbreviation:"BN",threeLetterAbbreviation:"BRN",isoNumber:"096"),
                            new  TypeOfCountryUnit(description:"Bulgaria",twoLetterAbbreviation:"BG",threeLetterAbbreviation:"BGR",isoNumber:"100"),
                            new  TypeOfCountryUnit(description:"Burkina Faso",twoLetterAbbreviation:"BF",threeLetterAbbreviation:"BFA",isoNumber:"854"),
                            new  TypeOfCountryUnit(description:"Burundi",twoLetterAbbreviation:"BI",threeLetterAbbreviation:"BDI",isoNumber:"108"),
                            new  TypeOfCountryUnit(description:"Cambodia",twoLetterAbbreviation:"KH",threeLetterAbbreviation:"KHM",isoNumber:"116"),
                            new  TypeOfCountryUnit(description:"Cameroon",twoLetterAbbreviation:"CM",threeLetterAbbreviation:"CMR",isoNumber:"120"),
                            new  TypeOfCountryUnit(description:"Canada",twoLetterAbbreviation:"CA",threeLetterAbbreviation:"CAN",isoNumber:"124"),
                            new  TypeOfCountryUnit(description:"Cape Verde",twoLetterAbbreviation:"CV",threeLetterAbbreviation:"CPV",isoNumber:"132"),
                            new  TypeOfCountryUnit(description:"Cayman Islands",twoLetterAbbreviation:"KY",threeLetterAbbreviation:"CYM",isoNumber:"136"),
                            new  TypeOfCountryUnit(description:"Central African Republic",twoLetterAbbreviation:"CF",threeLetterAbbreviation:"CAF",isoNumber:"140"),
                            new  TypeOfCountryUnit(description:"Chad",twoLetterAbbreviation:"TD",threeLetterAbbreviation:"TCD",isoNumber:"148"),
                            new  TypeOfCountryUnit(description:"Chile",twoLetterAbbreviation:"CL",threeLetterAbbreviation:"CHL",isoNumber:"152"),
                            new  TypeOfCountryUnit(description:"China",twoLetterAbbreviation:"CN",threeLetterAbbreviation:"CHN",isoNumber:"156"),
                            new  TypeOfCountryUnit(description:"Christmas Island",twoLetterAbbreviation:"CX",threeLetterAbbreviation:"CXR",isoNumber:"162"),
                            new  TypeOfCountryUnit(description:"Cocos (keeling) Islands",twoLetterAbbreviation:"CC",threeLetterAbbreviation:"CCK",isoNumber:"166"),
                            new  TypeOfCountryUnit(description:"Colombia",twoLetterAbbreviation:"CO",threeLetterAbbreviation:"COL",isoNumber:"170"),
                            new  TypeOfCountryUnit(description:"Comoros",twoLetterAbbreviation:"KM",threeLetterAbbreviation:"COM",isoNumber:"174"),
                            new  TypeOfCountryUnit(description:"Congo, Democratic Republic Of (was Zaire)",twoLetterAbbreviation:"CD",threeLetterAbbreviation:"COD",isoNumber:"180"),
                            new  TypeOfCountryUnit(description:"Congo, Republic Of",twoLetterAbbreviation:"CG",threeLetterAbbreviation:"COG",isoNumber:"178"),
                            new  TypeOfCountryUnit(description:"Cook Islands",twoLetterAbbreviation:"CK",threeLetterAbbreviation:"COK",isoNumber:"184"),
                            new  TypeOfCountryUnit(description:"Costa Rica",twoLetterAbbreviation:"CR",threeLetterAbbreviation:"CRI",isoNumber:"188"),
                            new  TypeOfCountryUnit(description:"Cote D'ivoire",twoLetterAbbreviation:"CI",threeLetterAbbreviation:"CIV",isoNumber:"384"),
                            new  TypeOfCountryUnit(description:"Croatia (local Name: Hrvatska)",twoLetterAbbreviation:"HR",threeLetterAbbreviation:"HRV",isoNumber:"191"),
                            new  TypeOfCountryUnit(description:"Cuba",twoLetterAbbreviation:"CU",threeLetterAbbreviation:"CUB",isoNumber:"192"),
                            new  TypeOfCountryUnit(description:"Cyprus",twoLetterAbbreviation:"CY",threeLetterAbbreviation:"CYP",isoNumber:"196"),
                            new  TypeOfCountryUnit(description:"Czech Republic",twoLetterAbbreviation:"CZ",threeLetterAbbreviation:"CZE",isoNumber:"203"),
                            new  TypeOfCountryUnit(description:"Denmark",twoLetterAbbreviation:"DK",threeLetterAbbreviation:"DNK",isoNumber:"208"),
                            new  TypeOfCountryUnit(description:"Djibouti",twoLetterAbbreviation:"DJ",threeLetterAbbreviation:"DJI",isoNumber:"262"),
                            new  TypeOfCountryUnit(description:"Dominica",twoLetterAbbreviation:"DM",threeLetterAbbreviation:"DMA",isoNumber:"212"),
                            new  TypeOfCountryUnit(description:"Dominican Republic",twoLetterAbbreviation:"DO",threeLetterAbbreviation:"DOM",isoNumber:"214"),
                            new  TypeOfCountryUnit(description:"Ecuador",twoLetterAbbreviation:"EC",threeLetterAbbreviation:"ECU",isoNumber:"218"),
                            new  TypeOfCountryUnit(description:"Egypt",twoLetterAbbreviation:"EG",threeLetterAbbreviation:"EGY",isoNumber:"818"),
                            new  TypeOfCountryUnit(description:"El Salvador",twoLetterAbbreviation:"SV",threeLetterAbbreviation:"SLV",isoNumber:"222"),
                            new  TypeOfCountryUnit(description:"Equatorial Guinea",twoLetterAbbreviation:"GQ",threeLetterAbbreviation:"GNQ",isoNumber:"226"),
                            new  TypeOfCountryUnit(description:"Eritrea",twoLetterAbbreviation:"ER",threeLetterAbbreviation:"ERI",isoNumber:"232"),
                            new  TypeOfCountryUnit(description:"Estonia",twoLetterAbbreviation:"EE",threeLetterAbbreviation:"EST",isoNumber:"233"),
                            new  TypeOfCountryUnit(description:"Ethiopia",twoLetterAbbreviation:"ET",threeLetterAbbreviation:"ETH",isoNumber:"231"),
                            new  TypeOfCountryUnit(description:"Falkland Islands (malvinas)",twoLetterAbbreviation:"FK",threeLetterAbbreviation:"FLK",isoNumber:"238"),
                            new  TypeOfCountryUnit(description:"Faroe Islands",twoLetterAbbreviation:"FO",threeLetterAbbreviation:"FRO",isoNumber:"234"),
                            new  TypeOfCountryUnit(description:"Fiji",twoLetterAbbreviation:"FJ",threeLetterAbbreviation:"FJI",isoNumber:"242"),
                            new  TypeOfCountryUnit(description:"Finland",twoLetterAbbreviation:"FI",threeLetterAbbreviation:"FIN",isoNumber:"246"),
                            new  TypeOfCountryUnit(description:"France",twoLetterAbbreviation:"FR",threeLetterAbbreviation:"FRA",isoNumber:"250"),
                            new  TypeOfCountryUnit(description:"French Guiana",twoLetterAbbreviation:"GF",threeLetterAbbreviation:"GUF",isoNumber:"254"),
                            new  TypeOfCountryUnit(description:"French Polynesia",twoLetterAbbreviation:"PF",threeLetterAbbreviation:"PYF",isoNumber:"258"),
                            new  TypeOfCountryUnit(description:"French Southern Territories",twoLetterAbbreviation:"TF",threeLetterAbbreviation:"ATF",isoNumber:"260"),
                            new  TypeOfCountryUnit(description:"Gabon",twoLetterAbbreviation:"GA",threeLetterAbbreviation:"GAB",isoNumber:"266"),
                            new  TypeOfCountryUnit(description:"Gambia",twoLetterAbbreviation:"GM",threeLetterAbbreviation:"GMB",isoNumber:"270"),
                            new  TypeOfCountryUnit(description:"Georgia",twoLetterAbbreviation:"GE",threeLetterAbbreviation:"GEO",isoNumber:"268"),
                            new  TypeOfCountryUnit(description:"Germany",twoLetterAbbreviation:"DE",threeLetterAbbreviation:"DEU",isoNumber:"276"),
                            new  TypeOfCountryUnit(description:"Ghana",twoLetterAbbreviation:"GH",threeLetterAbbreviation:"GHA",isoNumber:"288"),
                            new  TypeOfCountryUnit(description:"Gibraltar",twoLetterAbbreviation:"GI",threeLetterAbbreviation:"GIB",isoNumber:"292"),
                            new  TypeOfCountryUnit(description:"Greece",twoLetterAbbreviation:"GR",threeLetterAbbreviation:"GRC",isoNumber:"300"),
                            new  TypeOfCountryUnit(description:"Greenland",twoLetterAbbreviation:"GL",threeLetterAbbreviation:"GRL",isoNumber:"304"),
                            new  TypeOfCountryUnit(description:"Grenada",twoLetterAbbreviation:"GD",threeLetterAbbreviation:"GRD",isoNumber:"308"),
                            new  TypeOfCountryUnit(description:"Guadeloupe",twoLetterAbbreviation:"GP",threeLetterAbbreviation:"GLP",isoNumber:"312"),
                            new  TypeOfCountryUnit(description:"Guam",twoLetterAbbreviation:"GU",threeLetterAbbreviation:"GUM",isoNumber:"316"),
                            new  TypeOfCountryUnit(description:"Guatemala",twoLetterAbbreviation:"GT",threeLetterAbbreviation:"GTM",isoNumber:"320"),
                            new  TypeOfCountryUnit(description:"Guinea",twoLetterAbbreviation:"GN",threeLetterAbbreviation:"GIN",isoNumber:"324"),
                            new  TypeOfCountryUnit(description:"Guinea-bissau",twoLetterAbbreviation:"GW",threeLetterAbbreviation:"GNB",isoNumber:"624"),
                            new  TypeOfCountryUnit(description:"Guyana",twoLetterAbbreviation:"GY",threeLetterAbbreviation:"GUY",isoNumber:"328"),
                            new  TypeOfCountryUnit(description:"Haiti",twoLetterAbbreviation:"HT",threeLetterAbbreviation:"HTI",isoNumber:"332"),
                            new  TypeOfCountryUnit(description:"Heard And Mc Donald Islands",twoLetterAbbreviation:"HM",threeLetterAbbreviation:"HMD",isoNumber:"334"),
                            new  TypeOfCountryUnit(description:"Honduras",twoLetterAbbreviation:"HN",threeLetterAbbreviation:"HND",isoNumber:"340"),
                            new  TypeOfCountryUnit(description:"Hong Kong",twoLetterAbbreviation:"HK",threeLetterAbbreviation:"HKG",isoNumber:"344"),
                            new  TypeOfCountryUnit(description:"Hungary",twoLetterAbbreviation:"HU",threeLetterAbbreviation:"HUN",isoNumber:"348"),
                            new  TypeOfCountryUnit(description:"Iceland",twoLetterAbbreviation:"IS",threeLetterAbbreviation:"ISL",isoNumber:"352"),
                            new  TypeOfCountryUnit(description:"India",twoLetterAbbreviation:"IN",threeLetterAbbreviation:"IND",isoNumber:"356"),
                            new  TypeOfCountryUnit(description:"Indonesia",twoLetterAbbreviation:"ID",threeLetterAbbreviation:"IDN",isoNumber:"360"),
                            new  TypeOfCountryUnit(description:"Iran (islamic Republic Of)",twoLetterAbbreviation:"IR",threeLetterAbbreviation:"IRN",isoNumber:"364"),
                            new  TypeOfCountryUnit(description:"Iraq",twoLetterAbbreviation:"IQ",threeLetterAbbreviation:"IRQ",isoNumber:"368"),
                            new  TypeOfCountryUnit(description:"Ireland",twoLetterAbbreviation:"IE",threeLetterAbbreviation:"IRL",isoNumber:"372"),
                            new  TypeOfCountryUnit(description:"Israel",twoLetterAbbreviation:"IL",threeLetterAbbreviation:"ISR",isoNumber:"376"),
                            new  TypeOfCountryUnit(description:"Italy",twoLetterAbbreviation:"IT",threeLetterAbbreviation:"ITA",isoNumber:"380"),
                            new  TypeOfCountryUnit(description:"Jamaica",twoLetterAbbreviation:"JM",threeLetterAbbreviation:"JAM",isoNumber:"388"),
                            new  TypeOfCountryUnit(description:"Japan",twoLetterAbbreviation:"JP",threeLetterAbbreviation:"JPN",isoNumber:"392"),
                            new  TypeOfCountryUnit(description:"Jordan",twoLetterAbbreviation:"JO",threeLetterAbbreviation:"JOR",isoNumber:"400"),
                            new  TypeOfCountryUnit(description:"Kazakhstan",twoLetterAbbreviation:"KZ",threeLetterAbbreviation:"KAZ",isoNumber:"398"),
                            new  TypeOfCountryUnit(description:"Kenya",twoLetterAbbreviation:"KE",threeLetterAbbreviation:"KEN",isoNumber:"404"),
                            new  TypeOfCountryUnit(description:"Kiribati",twoLetterAbbreviation:"KI",threeLetterAbbreviation:"KIR",isoNumber:"296"),
                            new  TypeOfCountryUnit(description:"Korea, Democratic People's Republic Of",twoLetterAbbreviation:"KP",threeLetterAbbreviation:"PRK",isoNumber:"408"),
                            new  TypeOfCountryUnit(description:"Korea, Republic Of",twoLetterAbbreviation:"KR",threeLetterAbbreviation:"KOR",isoNumber:"410"),
                            new  TypeOfCountryUnit(description:"Kuwait",twoLetterAbbreviation:"KW",threeLetterAbbreviation:"KWT",isoNumber:"414"),
                            new  TypeOfCountryUnit(description:"Kyrgyzstan",twoLetterAbbreviation:"KG",threeLetterAbbreviation:"KGZ",isoNumber:"417"),
                            new  TypeOfCountryUnit(description:"Lao People's Democratic Republic",twoLetterAbbreviation:"LA",threeLetterAbbreviation:"LAO",isoNumber:"418"),
                            new  TypeOfCountryUnit(description:"Latvia",twoLetterAbbreviation:"LV",threeLetterAbbreviation:"LVA",isoNumber:"428"),
                            new  TypeOfCountryUnit(description:"Lebanon",twoLetterAbbreviation:"LB",threeLetterAbbreviation:"LBN",isoNumber:"422"),
                            new  TypeOfCountryUnit(description:"Lesotho",twoLetterAbbreviation:"LS",threeLetterAbbreviation:"LSO",isoNumber:"426"),
                            new  TypeOfCountryUnit(description:"Liberia",twoLetterAbbreviation:"LR",threeLetterAbbreviation:"LBR",isoNumber:"430"),
                            new  TypeOfCountryUnit(description:"Libyan Arab Jamahiriya",twoLetterAbbreviation:"LY",threeLetterAbbreviation:"LBY",isoNumber:"434"),
                            new  TypeOfCountryUnit(description:"Liechtenstein",twoLetterAbbreviation:"LI",threeLetterAbbreviation:"LIE",isoNumber:"438"),
                            new  TypeOfCountryUnit(description:"Lithuania",twoLetterAbbreviation:"LT",threeLetterAbbreviation:"LTU",isoNumber:"440"),
                            new  TypeOfCountryUnit(description:"Luxembourg",twoLetterAbbreviation:"LU",threeLetterAbbreviation:"LUX",isoNumber:"442"),
                            new  TypeOfCountryUnit(description:"Macau",twoLetterAbbreviation:"MO",threeLetterAbbreviation:"MAC",isoNumber:"446"),
                            new  TypeOfCountryUnit(description:"Macedonia, The Former Yugoslav Republic Of",twoLetterAbbreviation:"MK",threeLetterAbbreviation:"MKD",isoNumber:"807"),
                            new  TypeOfCountryUnit(description:"Madagascar",twoLetterAbbreviation:"MG",threeLetterAbbreviation:"MDG",isoNumber:"450"),
                            new  TypeOfCountryUnit(description:"Malawi",twoLetterAbbreviation:"MW",threeLetterAbbreviation:"MWI",isoNumber:"454"),
                            new  TypeOfCountryUnit(description:"Malaysia",twoLetterAbbreviation:"MY",threeLetterAbbreviation:"MYS",isoNumber:"458"),
                            new  TypeOfCountryUnit(description:"Maldives",twoLetterAbbreviation:"MV",threeLetterAbbreviation:"MDV",isoNumber:"462"),
                            new  TypeOfCountryUnit(description:"Mali",twoLetterAbbreviation:"ML",threeLetterAbbreviation:"MLI",isoNumber:"466"),
                            new  TypeOfCountryUnit(description:"Malta",twoLetterAbbreviation:"MT",threeLetterAbbreviation:"MLT",isoNumber:"470"),
                            new  TypeOfCountryUnit(description:"Marshall Islands",twoLetterAbbreviation:"MH",threeLetterAbbreviation:"MHL",isoNumber:"584"),
                            new  TypeOfCountryUnit(description:"Martinique",twoLetterAbbreviation:"MQ",threeLetterAbbreviation:"MTQ",isoNumber:"474"),
                            new  TypeOfCountryUnit(description:"Mauritania",twoLetterAbbreviation:"MR",threeLetterAbbreviation:"MRT",isoNumber:"478"),
                            new  TypeOfCountryUnit(description:"Mauritius",twoLetterAbbreviation:"MU",threeLetterAbbreviation:"MUS",isoNumber:"480"),
                            new  TypeOfCountryUnit(description:"Mayotte",twoLetterAbbreviation:"YT",threeLetterAbbreviation:"MYT",isoNumber:"175"),
                            new  TypeOfCountryUnit(description:"Mexico",twoLetterAbbreviation:"MX",threeLetterAbbreviation:"MEX",isoNumber:"484"),
                            new  TypeOfCountryUnit(description:"Micronesia, Federated States Of",twoLetterAbbreviation:"FM",threeLetterAbbreviation:"FSM",isoNumber:"583"),
                            new  TypeOfCountryUnit(description:"Moldova, Republic Of",twoLetterAbbreviation:"MD",threeLetterAbbreviation:"MDA",isoNumber:"498"),
                            new  TypeOfCountryUnit(description:"Monaco",twoLetterAbbreviation:"MC",threeLetterAbbreviation:"MCO",isoNumber:"492"),
                            new  TypeOfCountryUnit(description:"Mongolia",twoLetterAbbreviation:"MN",threeLetterAbbreviation:"MNG",isoNumber:"496"),
                            new  TypeOfCountryUnit(description:"Montserrat",twoLetterAbbreviation:"MS",threeLetterAbbreviation:"MSR",isoNumber:"500"),
                            new  TypeOfCountryUnit(description:"Morocco",twoLetterAbbreviation:"MA",threeLetterAbbreviation:"MAR",isoNumber:"504"),
                            new  TypeOfCountryUnit(description:"Mozambique",twoLetterAbbreviation:"MZ",threeLetterAbbreviation:"MOZ",isoNumber:"508"),
                            new  TypeOfCountryUnit(description:"Myanmar",twoLetterAbbreviation:"MM",threeLetterAbbreviation:"MMR",isoNumber:"104"),
                            new  TypeOfCountryUnit(description:"Namibia",twoLetterAbbreviation:"NA",threeLetterAbbreviation:"NAM",isoNumber:"516"),
                            new  TypeOfCountryUnit(description:"Nauru",twoLetterAbbreviation:"NR",threeLetterAbbreviation:"NRU",isoNumber:"520"),
                            new  TypeOfCountryUnit(description:"Nepal",twoLetterAbbreviation:"NP",threeLetterAbbreviation:"NPL",isoNumber:"524"),
                            new  TypeOfCountryUnit(description:"Netherlands",twoLetterAbbreviation:"NL",threeLetterAbbreviation:"NLD",isoNumber:"528"),
                            new  TypeOfCountryUnit(description:"Netherlands Antilles",twoLetterAbbreviation:"AN",threeLetterAbbreviation:"ANT",isoNumber:"530"),
                            new  TypeOfCountryUnit(description:"New Caledonia",twoLetterAbbreviation:"NC",threeLetterAbbreviation:"NCL",isoNumber:"540"),
                            new  TypeOfCountryUnit(description:"New Zealand",twoLetterAbbreviation:"NZ",threeLetterAbbreviation:"NZL",isoNumber:"554"),
                            new  TypeOfCountryUnit(description:"Nicaragua",twoLetterAbbreviation:"NI",threeLetterAbbreviation:"NIC",isoNumber:"558"),
                            new  TypeOfCountryUnit(description:"Niger",twoLetterAbbreviation:"NE",threeLetterAbbreviation:"NER",isoNumber:"562"),
                            new  TypeOfCountryUnit(description:"Nigeria",twoLetterAbbreviation:"NG",threeLetterAbbreviation:"NGA",isoNumber:"566"),
                            new  TypeOfCountryUnit(description:"Niue",twoLetterAbbreviation:"NU",threeLetterAbbreviation:"NIU",isoNumber:"570"),
                            new  TypeOfCountryUnit(description:"Norfolk Island",twoLetterAbbreviation:"NF",threeLetterAbbreviation:"NFK",isoNumber:"574"),
                            new  TypeOfCountryUnit(description:"Northern Mariana Islands",twoLetterAbbreviation:"MP",threeLetterAbbreviation:"MNP",isoNumber:"580"),
                            new  TypeOfCountryUnit(description:"Norway",twoLetterAbbreviation:"NO",threeLetterAbbreviation:"NOR",isoNumber:"578"),
                            new  TypeOfCountryUnit(description:"Oman",twoLetterAbbreviation:"OM",threeLetterAbbreviation:"OMN",isoNumber:"512"),
                            new  TypeOfCountryUnit(description:"Pakistan",twoLetterAbbreviation:"PK",threeLetterAbbreviation:"PAK",isoNumber:"586"),
                            new  TypeOfCountryUnit(description:"Palau",twoLetterAbbreviation:"PW",threeLetterAbbreviation:"PLW",isoNumber:"585"),
                            new  TypeOfCountryUnit(description:"Palestinian Territory, Occupied",twoLetterAbbreviation:"PS",threeLetterAbbreviation:"PSE",isoNumber:"275"),
                            new  TypeOfCountryUnit(description:"Panama",twoLetterAbbreviation:"PA",threeLetterAbbreviation:"PAN",isoNumber:"591"),
                            new  TypeOfCountryUnit(description:"Papua New Guinea",twoLetterAbbreviation:"PG",threeLetterAbbreviation:"PNG",isoNumber:"598"),
                            new  TypeOfCountryUnit(description:"Paraguay",twoLetterAbbreviation:"PY",threeLetterAbbreviation:"PRY",isoNumber:"600"),
                            new  TypeOfCountryUnit(description:"Peru",twoLetterAbbreviation:"PE",threeLetterAbbreviation:"PER",isoNumber:"604"),
                            new  TypeOfCountryUnit(description:"Philippines",twoLetterAbbreviation:"PH",threeLetterAbbreviation:"PHL",isoNumber:"608"),
                            new  TypeOfCountryUnit(description:"Pitcairn",twoLetterAbbreviation:"PN",threeLetterAbbreviation:"PCN",isoNumber:"612"),
                            new  TypeOfCountryUnit(description:"Poland",twoLetterAbbreviation:"PL",threeLetterAbbreviation:"POL",isoNumber:"616"),
                            new  TypeOfCountryUnit(description:"Portugal",twoLetterAbbreviation:"PT",threeLetterAbbreviation:"PRT",isoNumber:"620"),
                            new  TypeOfCountryUnit(description:"Puerto Rico",twoLetterAbbreviation:"PR",threeLetterAbbreviation:"PRI",isoNumber:"630"),
                            new  TypeOfCountryUnit(description:"Qatar",twoLetterAbbreviation:"QA",threeLetterAbbreviation:"QAT",isoNumber:"634"),
                            new  TypeOfCountryUnit(description:"Reunion",twoLetterAbbreviation:"RE",threeLetterAbbreviation:"REU",isoNumber:"638"),
                            new  TypeOfCountryUnit(description:"Romania",twoLetterAbbreviation:"RO",threeLetterAbbreviation:"ROU",isoNumber:"642"),
                            new  TypeOfCountryUnit(description:"Russian Federation",twoLetterAbbreviation:"RU",threeLetterAbbreviation:"RUS",isoNumber:"643"),
                            new  TypeOfCountryUnit(description:"Rwanda",twoLetterAbbreviation:"RW",threeLetterAbbreviation:"RWA",isoNumber:"646"),
                            new  TypeOfCountryUnit(description:"Saint Helena",twoLetterAbbreviation:"SH",threeLetterAbbreviation:"SHN",isoNumber:"654"),
                            new  TypeOfCountryUnit(description:"Saint Kitts And Nevis",twoLetterAbbreviation:"KN",threeLetterAbbreviation:"KNA",isoNumber:"659"),
                            new  TypeOfCountryUnit(description:"Saint Lucia",twoLetterAbbreviation:"LC",threeLetterAbbreviation:"LCA",isoNumber:"662"),
                            new  TypeOfCountryUnit(description:"Saint Pierre And Miquelon",twoLetterAbbreviation:"PM",threeLetterAbbreviation:"SPM",isoNumber:"666"),
                            new  TypeOfCountryUnit(description:"Saint Vincent And The Grenadines",twoLetterAbbreviation:"VC",threeLetterAbbreviation:"VCT",isoNumber:"670"),
                            new  TypeOfCountryUnit(description:"Samoa",twoLetterAbbreviation:"WS",threeLetterAbbreviation:"WSM",isoNumber:"882"),
                            new  TypeOfCountryUnit(description:"San Marino",twoLetterAbbreviation:"SM",threeLetterAbbreviation:"SMR",isoNumber:"674"),
                            new  TypeOfCountryUnit(description:"Sao Tome And Principe",twoLetterAbbreviation:"ST",threeLetterAbbreviation:"STP",isoNumber:"678"),
                            new  TypeOfCountryUnit(description:"Saudi Arabia",twoLetterAbbreviation:"SA",threeLetterAbbreviation:"SAU",isoNumber:"682"),
                            new  TypeOfCountryUnit(description:"Senegal",twoLetterAbbreviation:"SN",threeLetterAbbreviation:"SEN",isoNumber:"686"),
                            new  TypeOfCountryUnit(description:"Serbia And Montenegro",twoLetterAbbreviation:"CS",threeLetterAbbreviation:"SCG",isoNumber:"891"),
                            new  TypeOfCountryUnit(description:"Seychelles",twoLetterAbbreviation:"SC",threeLetterAbbreviation:"SYC",isoNumber:"690"),
                            new  TypeOfCountryUnit(description:"Sierra Leone",twoLetterAbbreviation:"SL",threeLetterAbbreviation:"SLE",isoNumber:"694"),
                            new  TypeOfCountryUnit(description:"Singapore",twoLetterAbbreviation:"SG",threeLetterAbbreviation:"SGP",isoNumber:"702"),
                            new  TypeOfCountryUnit(description:"Slovakia",twoLetterAbbreviation:"SK",threeLetterAbbreviation:"SVK",isoNumber:"703"),
                            new  TypeOfCountryUnit(description:"Slovenia",twoLetterAbbreviation:"SI",threeLetterAbbreviation:"SVN",isoNumber:"705"),
                            new  TypeOfCountryUnit(description:"Solomon Islands",twoLetterAbbreviation:"SB",threeLetterAbbreviation:"SLB",isoNumber:"090"),
                            new  TypeOfCountryUnit(description:"Somalia",twoLetterAbbreviation:"SO",threeLetterAbbreviation:"SOM",isoNumber:"706"),
                            new  TypeOfCountryUnit(description:"South Africa",twoLetterAbbreviation:"ZA",threeLetterAbbreviation:"ZAF",isoNumber:"710"),
                            new  TypeOfCountryUnit(description:"South Georgia And The South Sandwich Islands",twoLetterAbbreviation:"GS",threeLetterAbbreviation:"SGS",isoNumber:"239"),
                            new  TypeOfCountryUnit(description:"Spain",twoLetterAbbreviation:"ES",threeLetterAbbreviation:"ESP",isoNumber:"724"),
                            new  TypeOfCountryUnit(description:"Sri Lanka",twoLetterAbbreviation:"LK",threeLetterAbbreviation:"LKA",isoNumber:"144"),
                            new  TypeOfCountryUnit(description:"Sudan",twoLetterAbbreviation:"SD",threeLetterAbbreviation:"SDN",isoNumber:"736"),
                            new  TypeOfCountryUnit(description:"Suriname",twoLetterAbbreviation:"SR",threeLetterAbbreviation:"SUR",isoNumber:"740"),
                            new  TypeOfCountryUnit(description:"Svalbard And Jan Mayen Islands",twoLetterAbbreviation:"SJ",threeLetterAbbreviation:"SJM",isoNumber:"744"),
                            new  TypeOfCountryUnit(description:"Swaziland",twoLetterAbbreviation:"SZ",threeLetterAbbreviation:"SWZ",isoNumber:"748"),
                            new  TypeOfCountryUnit(description:"Sweden",twoLetterAbbreviation:"SE",threeLetterAbbreviation:"SWE",isoNumber:"752"),
                            new  TypeOfCountryUnit(description:"Switzerland",twoLetterAbbreviation:"CH",threeLetterAbbreviation:"CHE",isoNumber:"756"),
                            new  TypeOfCountryUnit(description:"Syrian Arab Republic",twoLetterAbbreviation:"SY",threeLetterAbbreviation:"SYR",isoNumber:"760"),
                            new  TypeOfCountryUnit(description:"Taiwan",twoLetterAbbreviation:"TW",threeLetterAbbreviation:"TWN",isoNumber:"158"),
                            new  TypeOfCountryUnit(description:"Tajikistan",twoLetterAbbreviation:"TJ",threeLetterAbbreviation:"TJK",isoNumber:"762"),
                            new  TypeOfCountryUnit(description:"Tanzania, United Republic Of",twoLetterAbbreviation:"TZ",threeLetterAbbreviation:"TZA",isoNumber:"834"),
                            new  TypeOfCountryUnit(description:"Thailand",twoLetterAbbreviation:"TH",threeLetterAbbreviation:"THA",isoNumber:"764"),
                            new  TypeOfCountryUnit(description:"Timor-leste",twoLetterAbbreviation:"TL",threeLetterAbbreviation:"TLS",isoNumber:"626"),
                            new  TypeOfCountryUnit(description:"Togo",twoLetterAbbreviation:"TG",threeLetterAbbreviation:"TGO",isoNumber:"768"),
                            new  TypeOfCountryUnit(description:"Tokelau",twoLetterAbbreviation:"TK",threeLetterAbbreviation:"TKL",isoNumber:"772"),
                            new  TypeOfCountryUnit(description:"Tonga",twoLetterAbbreviation:"TO",threeLetterAbbreviation:"TON",isoNumber:"776"),
                            new  TypeOfCountryUnit(description:"Trinidad And Tobago",twoLetterAbbreviation:"TT",threeLetterAbbreviation:"TTO",isoNumber:"780"),
                            new  TypeOfCountryUnit(description:"Tunisia",twoLetterAbbreviation:"TN",threeLetterAbbreviation:"TUN",isoNumber:"788"),
                            new  TypeOfCountryUnit(description:"Turkey",twoLetterAbbreviation:"TR",threeLetterAbbreviation:"TUR",isoNumber:"792"),
                            new  TypeOfCountryUnit(description:"Turkmenistan",twoLetterAbbreviation:"TM",threeLetterAbbreviation:"TKM",isoNumber:"795"),
                            new  TypeOfCountryUnit(description:"Turks And Caicos Islands",twoLetterAbbreviation:"TC",threeLetterAbbreviation:"TCA",isoNumber:"796"),
                            new  TypeOfCountryUnit(description:"Tuvalu",twoLetterAbbreviation:"TV",threeLetterAbbreviation:"TUV",isoNumber:"798"),
                            new  TypeOfCountryUnit(description:"Uganda",twoLetterAbbreviation:"UG",threeLetterAbbreviation:"UGA",isoNumber:"800"),
                            new  TypeOfCountryUnit(description:"Ukraine",twoLetterAbbreviation:"UA",threeLetterAbbreviation:"UKR",isoNumber:"804"),
                            new  TypeOfCountryUnit(description:"United Arab Emirates",twoLetterAbbreviation:"AE",threeLetterAbbreviation:"ARE",isoNumber:"784"),
                            new  TypeOfCountryUnit(description:"United Kingdom",twoLetterAbbreviation:"GB",threeLetterAbbreviation:"GBR",isoNumber:"826"),
                            new  TypeOfCountryUnit(description:"United States",twoLetterAbbreviation:"US",threeLetterAbbreviation:"USA",isoNumber:"840"),
                            new  TypeOfCountryUnit(description:"United States Minor Outlying Islands",twoLetterAbbreviation:"UM",threeLetterAbbreviation:"UMI",isoNumber:"581"),
                            new  TypeOfCountryUnit(description:"Uruguay",twoLetterAbbreviation:"UY",threeLetterAbbreviation:"URY",isoNumber:"858"),
                            new  TypeOfCountryUnit(description:"Uzbekistan",twoLetterAbbreviation:"UZ",threeLetterAbbreviation:"UZB",isoNumber:"860"),
                            new  TypeOfCountryUnit(description:"Vanuatu",twoLetterAbbreviation:"VU",threeLetterAbbreviation:"VUT",isoNumber:"548"),
                            new  TypeOfCountryUnit(description:"Vatican City State (holy See)",twoLetterAbbreviation:"VA",threeLetterAbbreviation:"VAT",isoNumber:"336"),
                            new  TypeOfCountryUnit(description:"Venezuela",twoLetterAbbreviation:"VE",threeLetterAbbreviation:"VEN",isoNumber:"862"),
                            new  TypeOfCountryUnit(description:"Viet Nam",twoLetterAbbreviation:"VN",threeLetterAbbreviation:"VNM",isoNumber:"704"),
                            new  TypeOfCountryUnit(description:"Virgin Islands (british)",twoLetterAbbreviation:"VG",threeLetterAbbreviation:"VGB",isoNumber:"092"),
                            new  TypeOfCountryUnit(description:"Virgin Islands (u.s.)",twoLetterAbbreviation:"VI",threeLetterAbbreviation:"VIR",isoNumber:"850"),
                            new  TypeOfCountryUnit(description:"Wallis And Futuna Islands",twoLetterAbbreviation:"WF",threeLetterAbbreviation:"WLF",isoNumber:"876"),
                            new  TypeOfCountryUnit(description:"Western Sahara",twoLetterAbbreviation:"EH",threeLetterAbbreviation:"ESH",isoNumber:"732"),
                            new  TypeOfCountryUnit(description:"Yemen",twoLetterAbbreviation:"YE",threeLetterAbbreviation:"YEM",isoNumber:"887"),
                            new  TypeOfCountryUnit(description:"Zambia",twoLetterAbbreviation:"ZM",threeLetterAbbreviation:"ZMB",isoNumber:"894"),
                            new  TypeOfCountryUnit(description:"Zimbabwe",twoLetterAbbreviation:"ZW",threeLetterAbbreviation:"ZWE",isoNumber:"716")
            };
        }

        public DefaultTypeOfCountryCreator(CORPACCOUNTINGDbContext context)
        {
            _context = context;
        }


        public void Create()
        {
          CreateTypeOfCountryList();
        }

        private void CreateTypeOfCountryList()
        {
            foreach (var countryList in InitialTypeOfCountryList)
            {
                AddCountryListIfNotExists(countryList);
            }
        }

        private void AddCountryListIfNotExists(TypeOfCountryUnit countryList)
        {
            if (_context.TypeOfCountryUnit.Any(l => l.Description == countryList.Description))
            {
                return;
            }

            _context.TypeOfCountryUnit.Add(countryList);

            _context.SaveChanges();
        }

    }


}
