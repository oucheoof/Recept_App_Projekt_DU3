const _state = {
    recipes: [
        {
            id: 1,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            howTo: "",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 2,
            name: "Pasta",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 3,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 4,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 5,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 6,
            name: "Köttbullar",
            ingredients: ["tomat", "pasta"],
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },






        {
            id: 28,
            name: "Halloumigryta med ris",
            ingredients: ["ris", "blomkål", "halloumi", "olja", "curry", "kokosmjölk", "krossade tomater", "peppar", "rostad lök"],
            renderIngredients:"4 port ris eller annat gryn\n1/2 blomkålshuvud (à ca 300 g)\n400 g halloumi eller grillost\n1 msk olja\n2 tsk curry\n200 ml kokosmjölk\n1 förp krossade tomater (à 390 g)\npeppar\n1/2 dl rostad lök",
            howTo: "Koka riset enligt anvisningen på förpackningen.\nAnsa och skär blomkålen i mindre bitar.\nSkär halloumin i tärningar och fräs dem och hälften av blomkålen i oljan i en stor stekpanna eller gryta.\nKrydda med curry och rör i kokosmjölken och krossade tomater. Sjud i ca 5 minuter eller tills blomkålen är mjuk. Smaka av med peppar.\nServera grytan med riset, resten av blomkålen och rostad lök."
            ,
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/halloumigryta.jpg"
        },
        {
            id: 29,
            name: "Bakad potatis med tonfiskröra",
            ingredients: [
                "bakpotatisar",
                "hårdkokta ägg",
                "förp majs",
                "förp tonfisk i vatten",
                "gräddfil eller matlagningsyoghurt",
                "rivna vitlöksklyftor",
                "kapris",
                "salt",
                "peppar"
            ],
            renderIngredients:"4 bakpotatisar (à ca 180 g)\n2 hårdkokta ägg\n1/2 förp majs (à 150 g)\n1 förp tonfisk i vatten (à 170 g)\n1 1/2 dl gräddfil eller matlagningsyoghurt\n2 rivna vitlöksklyftor\n2 msk kapris\n1/2 tsk salt\n1 tsk peppar",
            howTo: "Sätt ugnen på 225 °C.\nSkölj ev potatisen. Picka potatis­ar­­­na med en sticka och baka på ugnsgallret i mitten av ugnen 50–60 minuter tills de är mjuka eller tillaga i mikrovågs­ugnen, full effekt (max 800 W), 10–15 minuter.\nSkala och hacka äggen. Häll av majs och tonfisk. Blanda ägg, majs, tonfisk, gräddfil, vitlök, kapris, salt och peppar.\nSkär ett kryss i varje potatis och tryck till. Fyll med tonfiskröran och toppa gärna med extra kapris.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/bakadpotatis.jpg"
        },
        {
            id: 30,
            name: "Onigiri",
            ingredients: [
                "sushiris",
                "salt",
                "noriark",
                "rimmad eller gravad lax",
                "salladslök",
                "majonnäs",
                "sesamfrö"
            ],
            renderIngredients:"250 g sushiris (250 g motsvarar ca 3 dl)\n1/2 tsk salt\n1 noriark (ca 18x20 cm)\n150 g rimmad eller gravad lax\n1 salladslök\n1 msk majonnäs\n1 tsk sesamfrö",
            howTo:"Koka riset enligt anvisningen på förpackningen med saltet. Låt riset svalna i rumstemperatur under lock.\nHacka laxen i små bitar och strimla salladslöken. Blanda lax och lök med majonnäs och sesamfrö.\nDela upp riset i 8 delar (för 8 st). Lägg en portion ris på en bit plastfolie och platta ut riset till en cirkel på ca 14 cm i diameter. Lägg på en klick av fyllningen i mitten och vik ihop till en risboll med hjälp av plastfolien. Forma en bred triangel av riset, tryck ihop det så att det blir kompakt och håller formen. Ta bort plasten.\nDela noriarket på mitten och därefter i fyra remsor (ca 4 cm breda). Vik noribladet runt riset i underkanten.\nDoppa kanterna i valfri topping.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/onigiri.jpg"
        },
        {
            id: 31,
            name: "Pasta med makrill i tomatsås",
            ingredients: [
                "vitlöksklyftor",
                "olivolja",
                "chiliflakes",
                "finrivet citronskal",
                "hackad kapris",
                "makrillfilé i tomatsås",
                "spaghetti",
                "finhackad persilja",
                "salt",
                "svartpeppar"
            ],
            renderIngredients:"2 vitlöksklyftor\n3 msk olivolja\n1/2 tsk chiliflakes\n1 msk finrivet citronskal\n3 msk hackad kapris\n2 förp makrillfilé i tomatsås (à 125 g)\n400 g spaghetti\n1 dl finhackad persilja\nsalt\nsvartpeppar" ,
            howTo:"Skala och hacka vitlöken. Fräs vitlöken i oljan några minuter i en stekpanna. Tillsätt chiliflakes, citronskal och kapris och fräs ytterligare några minuter.\nBryt makrillen i bitar och lägg ner tillsammans med tomatsåsen.\nKoka pastan enligt anvisning på förpackningen. Häll av och spar 1 dl av kokvattnet (för 4 port). Tillsätt pastan, kokvattnet och persiljan i stekpannan och blanda. Smaka av med salt och peppar.\nTill servering: Toppa med riven parmesan och servera med citronklyftor.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/pasta_makrilltomat.jpg"
        },
        {
            id: 32,
            name: "Laxfilé i ugn med citron",
            ingredients: [
                "färsk laxfilé utan skinn",
                "olja",
                "salt",
                "svartpeppar",
                "finrivet citronskal"
            ],
            renderIngredients:"ca 1 1/4 kg färsk laxfilé utan skinn\n2 msk olja\n1 1/2 tsk salt\n1 tsk svartpeppar\n1 msk finrivet citronskal" ,
            howTo:"Sätt ugnen på 175°C.\nLägg laxen i en smord ugnsform. Ringla över olja och strö över salt, peppar och citronskal.\nStäll in i mitten av ugnen ca 25 minuter eller tills laxen har en innertemperatur på 52-56°C.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/lax_ungsbakad.jpg"
        },
        {
            id: 33,
            name:"Fyllda paprikor med ris",
            ingredients:[
                "gul lök",
                "vitlöksklyftor",
                "selleristjälkar",
                "liten zucchini",
                "olivolja",
                "råris",
                "tomatpuré",
                "chilipulver",
                "torkade örter (t ex timjan eller basilika)",
                "vatten",
                "grönsaksbuljongtärning",
                "hackade oliver",
                "hackade valnötter",
                "riven parmesan",
                "salt",
                "paprika"
            ],
            renderIngredients:"1 gul lök\n2 vitlöksklyftor\n3 selleristjälkar\n1 liten zucchini\n4 msk olivolja\n1 dl råris\n2 msk tomatpuré\n2 tsk chilipulver\n1 tsk torkade örter (t ex timjan eller basilika)\n2 1/2 dl vatten\n1 grönsaksbuljongtärning\n1 1/2 dl hackade oliver\n1 1/2 dl hackade valnötter\n1 1/2 dl riven parmesan\nsalt\n4 paprikor",
            howTo:"Skala och hacka lök och vitlök. Hacka selleri och zucchini. Stek lök, vitlök, selleri och zucchini i hälften av oljan ca 10 minuter tills allt mjuknar.\nTillsätt ris, tomatpuré, chilipulver och örter. Fräs ytterligare ca 5 minuter.\nTillsätt vatten och smulad buljongtärning. Sätt på lock och låt koka ca 10 minuter eller tills riset är mjukt. Rör ner oliver, nötter och ost. Smaka av med salt.\nSätt ugnen på 200°C.\nSkär bort toppen på paprikan som ett lock och gröp ur kärnorna. Lägg paprikorna i en ugnsform ca 20 x 25 cm (för 4 port). Fyll dem med risblandningen och lägg på toppen av paprikan. Ringla över resten av oljan och häll vatten i formen. Ställ in i nedre delen av ugnen 25–35 minuter eller tills paprikorna är mjuka.\nServeringsförslag: Servera med yoghurt eller crème fraiche och ev bröd och en sallad.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/paprikor_fyllda.jpg"
        },
        {
            id: 34,
            name:"Kycklingbuljong",
            ingredients:[
                "gul lök",
                "vitlöksklyftor",
                "hel kyckling",
                "vatten",
                "salt"
            ],
            renderIngredients:"1 gul lök\n2 vitlöksklyftor\n1 hel kyckling (à ca 1 kg)\n2 1/2 l vatten\nev salt"            ,
            howTo:"Skala lök och vitlök och halvera. Lägg i en kastrull med kyckling och vatten och sjud under lock 1–3 timmar. Ju längre den sjuder desto mer smak och fett ger kycklingen ifrån sig och buljongen blir godare.\nTa upp kycklingen och plocka köttet. Köttet kan du använda till en soppa, sallad, pasta eller gryta.\nSila buljongen, smaka ev av med salt och låt ­svalna. Förvara i kylen, buljongen håller ca 5 dagar i kylen eller frys in den buljong du inte använder direkt.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kycklingbuljong.jpg"
        },
        {
            id: 35,
            name:"Citron-och smörpasta",
            ingredients:[
                "pasta",
                "smör",
                "vitlöksklyftor",
                "finrivet citronskal",
                "finriven parmesan",
                "salt",
                "svartpeppar"
            ],
            renderIngredients:"400 g pasta\n50 g smör\n2 vitlöksklyftor\n1 msk finrivet citronskal\n1 dl finriven parmesan (+ ev extra till servering)\n1/2 tsk salt\n1/2 tsk svartpeppar",
            howTo:"Koka pastan enligt anvisning på förpackningen. Häll av men spara 3 dl av kokvattnet (för 4 port).\nBryn smöret i en stekpanna.\nSänk värmen och riv ner vitlöken i smöret och låt fräsa lite.\nRör i pasta, citronskal, parmesan, salt, peppar och lite pastavatten i taget. Rör till en krämig pasta. Toppa gärna med extra parmesan.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/pasta_smorcitron.jpg"
        },
        {
            id: 36,
            name:"Vårrullar med jordnötsdipp",
            ingredients:[
                "vatten",
                "jordnötssmör",
                "sweet chilisås",
                "japansk soja",
                "tofu",
                "morötter",
                "avokador",
                "salladslök",
                "färska böngroddar",
                "färsk koriander",
                "rispapper",
                "sesamfrön"
            ],
            renderIngredients:"1 dl vatten\n1/2 dl jordnötssmör\n1/2 dl sweet chilisås\n3 msk japansk soja\n230 g tofu\n2 morötter\n2 avokador\n1/2 påse salladslök (à 125 g)\n180 g färska böngroddar\n20 g färsk koriander\n12 ark rispapper\n1 msk sesamfrön",
            howTo:"Koka riset enligt anvisningen på förpackningen.\nDipp: Koka upp vattnet. Dra av kastrullen från värmen och blanda ner jordnötssmör, sweet chilisås och soja. Låt svalna.\nVårrullar: Skär tofun i stavar. Skala morötterna och skär i tunna strimlor. Dela, kärna ur och gröp ur avokadorna, skiva dem. Ansa och skiva salladslöken. Lägg upp alla grönsaker och koriander på ett serveringsfat.\nVid bordet: Sätt fram en stor skål med ljummet vatten på bordet. Var och en doppar sitt eget rispapper i vattnet ca 30 sekunder. Lyft upp, låt droppa av och lägg det på tallriken. Lägg på grönsaker och sesamfrö och vik ihop till en rulle.\nServera rullarna med dipp och ris.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/varrullar.jpg"
        },
        {
            id: 37,
            name:"Lax teriyaki",
            ingredients:[
                "ris",
                "pak choi",
                "lime",
                "salt",
                "peppar",
                "laxfilé",
                "olja",
                "teriyakimarinad"
            ],
            renderIngredients:"4 port ris eller annat gryn\n250 g pak choi\n1 lime\nsalt\npeppar\n600 g laxfilé\n1 tsk olja\n150 ml teriyakimarinad",
            howTo:"Koka riset enligt anvisningen på förpackningen.\nAnsa, skölj och skiva pak choi tunt. Pressa över saft från limen och krydda med salt och peppar.\nSkär bort skinnet på laxen och skär den i portionsbitar. Stek fisken i oljan i en stekpanna, ca 3 minuter på varje sida eller tills fisken har en innertemperatur på 56°C. Häll i teriyakimarinaden och låt sjuda någon minut.\nServera laxen med ris och pak choi.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/lax_teriyaki.jpg"
        },
        {
            id:38 ,
            name:"Tofu bowl",
            ingredients:[
                "tahini",
                "mortlade sesamfrön",
                "vatten",
                "mirin",
                "japansk soja",
                "färskpressad citronjuice",
                "chilipulver",
                "nudlar",
                "rapsolja",
                "spenat",
                "salt",
                "rödkål",
                "svamp",
                "fast tofu eller silkestofu",
                "majsstärkelse",
                "strimlade noriark",
                "rostade sesamfrön"
            ],
            renderIngredients:
            "1 1/2 dl tahini\n1 1/2 dl mortlade sesamfrön\n3/4 dl vatten\n3 msk mirin\n4 1/2 msk japansk soja\n3/4 dl färskpressad citronjuice\n2 krm chilipulver\n200 g nudlar (t ex soba- eller glasnudlar)\n1 msk rapsolja\n200 g färsk spenat\nsalt\n100 g rödkål\n250 g svamp (t ex portabello, champinjon, ostronskivling)\n1 msk rapsolja (till stekning av svamp)\n1 förp fast tofu eller silkestofu (à ca 270 g)\n1 dl majsstärkelse\n2 msk rapsolja (till stekning av tofu)\n2 strimlade noriark (torkade sjögräsark)\n2 msk rostade sesamfrön",
            howTo:"Goma dare-sås: Vispa tahini och mortlade sesamfrön med vatten slätt. Tillsätt resten av ingredienserna och rör ihop till en sås.\nKoka nudlarna enligt anvisning på förpackningen. Kyl i kallt vatten och blanda med olja.\nKoka upp en kastrull med saltat vatten. Tillsätt spenaten och koka några sekunder. Häll av och spola kallt. Krama ur vätskan.\nStrimla rödkålen fint.\nAnsa och bryt svampen i mindre bitar. Stek svampen krispig i lite olja.\nSkär tofun i mindre bitar och vänd i majsstärkelsen. Stek krispig och gyllene i olja.\nLägg nudlarna i portionsskålar. Toppa med svampen, rödkålen, spenaten och tofun. Ringla över såsen och strö över sesamfrön och nori.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/tofu_bowl.jpg"
        },
        {
            id: 39,
            name:,
            ingredients:[
                "burkar majskorn",
                "smör",
                "vatten",
                "snabbnudlar med grönsaks- eller kycklingsmak",
                "misopasta eller japansk soja",
                "finriven ingefära",
                "rostad lök",
                "rostade sesamfrön eller furikake",
                "färsk babyspenat",
                "skivade salladslökar"
            ],
            renderIngredients:"2 burkar majskorn (à 150 g)\n100 g smör\n1 1/2 l vatten\n4 paket snabbnudlar med grönsaks- eller kycklingsmak (à ca 85 g)\n4 msk misopasta eller japansk soja (4 msk misopasta motsvarar 4 tsk soja)\n2 msk finriven ingefära\n4 msk rostad lök\n4 msk rostade sesamfrön eller furikake (sesamfröblandning)\nca 1/2 påse färsk babyspenat (à 65 g)\n1 - 2 skivade salladslökar",
            howTo:"Häll av vätskan från majsen och torka torr med hushållspapper. Stek i en torr stekpanna på medelvärme 5–10 minuter tills den fått färg. Höj värmen och tillsätt smöret och låt det bli lite karamelliserat. \nKoka upp vattnet med buljongpåsarna från nudelpaketen. Vispa ner miso och ingefära. Tillsätt nudlarna och koka dem enligt anvisning på förpackningen. \nTill servering: Fördela nudelsoppan i tallrikar och toppa med den smörstekta majsen, rostad lök och sesamfrön. Toppa gärna med salladslök och spenat.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/ramen_miso.jpg"
        },
        {
            id:40 ,
            name:"Biffwok",
            ingredients:[
                "jasminris eller äggnudlar",
                "ryggbiff",
                "gul lök",
                "vitlöksklyfta",
                "broccoli",
                "röd paprika",
                "ostronsås",
                "japansk soja",
                "konc oxfond",
                "strösocker",
                "crema di balsamico",
                "majsstärkelse",
                "vatten",
                "sesamolja",
                "salt",
                "svartpeppar",
                "skivade bambuskott",
                "finskurna salladslökar"
            ],
            renderIngredients:"4 port jasminris eller äggnudlar\ca 450 g ryggbiff\n1 gul lök\n1 vitlöksklyfta\n1/2 broccoli\n1/2 röd paprika\nSås\n1 dl ostronsås\n2 msk japansk soja\n1 msk konc oxfond\n1 msk strösocker\n1 tsk crema di balsamico\n1 tsk majsstärkelse\n1/2 dl vatten\n2 msk sesamolja\n2 krm salt\n1 krm svartpeppar\n1 burk skivade bambuskott (à ca 200 g)\n2 finskurna salladslökar",
            howTo:"Koka riset enligt anvisning på förpackningen.\nSkär ryggbiffen i strimlor. Skala lök och vitlök. Skär löken i stora bitar och finhacka vitlöken. Skär broccolin i buketter och skiva stammen tunt. Dela, kärna ur och skär paprikan i bitar.\nSås: Blanda ostronsås, soja, fond, socker, balsamico, majsstärkelse och vatten.\nHetta upp en stekpanna med sesamolja och tillsätt biff, lök, vitlök, salt och peppar. Låt fräsa 3 minuter tills det får lite färg. Tillsätt såsen och låt koka 2–3 minuter.\nHäll av bambuskotten. Tillsätt broccoli, paprika, bambuskott och salladslök. Fräs ytterligare 2–3 minuter. Servera med ris.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/biffwok.jpg"
        },
        {
            id: 41,
            name:"Kycklingcurry med ris",
            ingredients:[
                "ris eller annat gryn",
                "gula lökar",
                "morötter",
                "röd paprika",
                "kycklingfilé",
                "olja",
                "curry",
                "kokosmjölk",
                "hönsbuljong (vatten och buljongtärning eller fond)",
                "honung",
                "salt",
                "peppar",
                "matyoghurt"
            ],
            renderIngredients:"4 port ris eller annat gryn\n2 gula lökar\n2 morötter\n1 röd paprika\n500 g kycklingfilé\n2 msk olja\n2 tsk curry\n400 ml kokosmjölk\n2 dl hönsbuljong (vatten och buljongtärning eller fond)\n2 tsk honung\nsalt och peppar\n2 dl matyoghurt",
            howTo:"Koka riset enligt anvisningen på förpackningen.\nSkala lök och morötter, strimla löken och skiva morötterna. Dela, kärna ur och strimla paprikan.\nStrimla kycklingen. Stek den i oljan i en gryta tillsammans med curry och lök ca 3 min.\nTillsätt morötter, paprika, kokosmjölk och buljong. Låt sjuda under lock ca 10 minuter. Smaka av med honung, salt och peppar.\nTill servering: Servera kycklingcurryn med ris och en klick yoghurt.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kycklincurry.jpg"
        },
    ]
};


const STATE = {
 
    get

};





function render_App() {


    
    //const response = await fetch ('./api/database/recepies.json');
    //const data = await response.json();
    
    //_state.recipes = data.artists;
    console.log(_state);

   /*
    let recipeRequest = new Request(`./api/database/recepies.php`);
    const recipeData = await fetch_function (recipeRequest);
    _state.recipes = recipeData;
*/

    // Startsidan
    render_wrapper_DOM (); // startsidans wrapper anrop
    render_header(head); // header anrop
    renderLogRegContainer('wrapper');
    render_sorted_recipes_DOM("matched_recepies"); // anropar på container för alla sorterade/filtrerade recept 
    
    renderBox1("sort");
    renderFooter();
    
    //render_instance_recipe();


}




function get(entity) {

    // klonar
    return JSON.parse(JSON.stringify( _state[ entity ]));

}