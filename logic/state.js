const _state = {
    recipes: [
        {
            id: 1,
            name: "Amerikanska Pannkakor",
            ingredients: ["vetemjöl", "bakpulver", "strösocker", "salt", "yoghurt", "ägg", "smör"],

            renderIngredients: "Vetemjöl 3 dl\nBakpulver 2 tsk\nStrösocker 1 msk\nSalt ½ tsk\nMild yoghurt naturell, filmjölk eller mjölk 3½ dl\nÄgg 1\nSmör ",

            howTo: "1. Blanda de torra ingredienserna i en bunke.\n2. Rör ner yoghurt, äggula och smör-&rapsolja. Vispa till en slät smet.\n3. Vispa äggvitan till ett hårt skum och vänd ner i smeten.\n4. Hetta upp lite smör-&rapsolja i en stekpanna. Stek små pannkakor på låg medelvärme i omgångar. När det bildas bubblor på ovansidan är det dags att vända. 5. Servera amerikanska pannkakor med lönnsirap och bär. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/amerikanskapannkakor.jpg"
        },
        {
            id: 2,
            name: "Lövbiffspasta",
            ingredients: ["lövbiff", "champinjoner", "salt", "svartpeppar", "purjolök", "vitlöksklyftor", "smör", "crème fraiche", "matlagningsgrädde", "dijonsenap", "sambal oelek", "hönsbuljong"],

            renderIngredients: "Lövbiff ca 400 g\nSalt och svartpeppar\nChampinjoner 250 g\nPurjolök 1/2\nSmör\nVitlöksklyftor, finrivna 2\nCrème fraiche 2 dl\nMatlagningsgrädde 2½ dl\nDijonsenap 1 msk\nSambal oelek 1 msk\nHönsbuljong ",

            howTo: "1. Sätt på vatten till pastakoket.\n2. Strimla lövbiffen grovt. Salta och peppra. Ställ åt sidan medan resten förbereds.\n3. Skär svampen i klyftor. Skölj och skiva purjolöken grovt. Fräs svampen i en stekpanna tills vätskan kokat in. Tillsätt en klick smör, purjolök och vitlök. Fräs 2–3 min. Rör ner crème fraiche, grädde, senap, sambal oelek och smulad buljong. Låt koka ihop 2–3 min. Ställ åt sidan.\n 4. Koka pastan enligt anvisning på förpackningen. Spara 1 dl av pastavattnet.\n5. Hetta upp en stekpanna med smör. Stek lövbiffen hastigt i omgångar.\n6.Blanda ner i såsen tillsammans med pastan. Rör ev ner det sparade pastavattenet till önskad konsistens.Toppa med smulad ost och timjan. Servera direkt. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/lovbiffspasta.jpg"
        },
        {
            id: 3,
            name: "Stekt ris",
            ingredients: ["jasminris", "morot", "röd paprika", "sockerärtor", "vitlöksklyftor", "matolja", "chilli flakes", "ägg"],

            renderIngredients: "Jasminris 3 dl\nMorot 1\nRöd paprika 1\nSockerärter 150 g\nVitlöksklyftor 3\nMatolja 2 msk\nChili flakes 1 tsk\nÄgg 2",

            howTo: "1. Koka riset enligt anvisning på förpackningen.\n2. Skala och skär tunna stavar av moroten. Strimla paprika och sockerärter. 3. Skala och finhacka vitlöken.\n4. Bryn smöret till dressingen under omrörning. Häll över i en värmetålig skål och rör ner övriga ingredienser.\n5. Hetta upp matoljan i en rymlig stekpanna. Stek alla grönsaker med vitlök och chili flakes på hög värme 2–3 min.\n6. Tillsätt riset och knäck ner äggen. Stek under omrörning tills äggen stelnat. Blanda ner dressingen.\n7. Toppa stekt ris med koriander och rostad lök. Servera direkt. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/stektris.jpg"
        },
        {
            id: 4,
            name: "Spagetti med krämig pesto",
            ingredients: ["färsk basilika", "pinjenötter", "pasta", "vitlöksklyfta", "riven svecia", "kvarg", "salt", "svartpeppar"],

            renderIngredients: "Pasta\nFärsk basilika 2 krukor\nPinjenötter 50 g\nVitlöksklyfta 1\nRiven Svecia 100 g\nKvarg 250 g\nSalt\nSvartpeppar ",

            howTo: "1. Bryt av basilikabladen. Mixa ingredienserna till peston väl. Spar lite ost, pinjenötter och basilika till servering.Smaka av med salt och peppar.\n2. Koka spaghettin enligt anvisning på förpackningen. Blanda spaghetti och pesto. Toppa med extra basilika och ost. Servera genast.",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/spagetti_pesto.jpg"
        },
        {
            id: 5,
            name: "Köttbullar",
            ingredients: ["köttfärs", "ströbröd", "standarmjölk", "lök", "ägg", "salt", "svartpeppar", "smör & rapsolja"],

            renderIngredients: "Köttfärs 500 g\nStröbröd ½ dl\nStandardmjölk 1 dl\nFinhackad lök 2 msk\nÄgg 1\nSalt 1 tsk\nSvartpeppar 1 krm\nSmör & rapsolja 2 msk ",

            howTo: "1. Blanda ströbröd och mjölk. Låt svälla 10 min.\n2. Lägg i färs, lök, ägg, salt och peppar. Rör till en jämn smet.\n3. Forma smeten till jämna köttbullar. Stek dem i smör-&rapsolja på medelvärme ca 5 min. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kottbullar.jpg"
        },
        {
            id: 6,
            name: "Cornflakes Fisk",
            ingredients: ["torskfilé", "vatten", "salt", "smör", "vitlöksklyfta", "citron", "dill", "ströbröd", "salt", "cornflakes", "potatis"],

            renderIngredients: "Torskfilé 600 g\nVatten 1 liter\nSalt ½ dl\nSmör 75 g\nVitlöksklyfta 1\nCitron, finrivet skal och saft 1 st\nDill 2 msk\nStröbröd ½ dl\nSalt 2 krm\nCornflakes 2 dl\nPotatis 900 g ",
            
            howTo: "1. Värm ugnen till 200°.\n2. Skär fisken i portionsbitar. Vispa ihop vatten och salt i en bunke. Lägg ner fisken i vattnet och låt ligga minst 10 min.\n3. Blanda alla ingredienser till gräddfilssåsen i en skål. Ställ kallt till servering.\n4. Rör ihop smör med finriven vitlök, citron, dill och ströbröd. Smaka av med salt.\n5. Torka av fisken med hushållspapper. Lägg den i en smord ugnsform och klicka smöret över fisken. Strö över lätt krossad cornflakes.\n6. Tillaga i mitten av ugnen ca 20 min.\n7. Skala och koka potatisen mjuk i saltat vatten.\n8. Servera cornflakesfisken med gräddfilssås, kokt potatis och grönsallad. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/cornflakesfisk.jpg"
        },
        {
            id: 7,
            name: "Fläderdryck",
            ingredients: ["fläderblomsklasar", "citron", "vatten", "socker", "citronsyra", "natriumbensoat"],

            renderIngredients: "Fläderblomsklasar 35 - 40\nCitroner 3\nVatten 1½ liter\nStrösocker 1½ liter\nCitronsyra 50 g\nNatriumbensoat ev. 2 krm",

            howTo: "1. Skölj blomklasarna i ljummet vatten, låt rinna av. Ta bort grova skaft, de kan göra saften besk.\n2. Tvätta citronerna noga i ljummet vatten. Skär citronerna i skivor.\n3. Varva blomklasar och citronskivor i en stor bunke.\n4. Koka upp vatten och socker. Rör om tills sockret löst upp sig. Blanda ner citronsyran och natriumbensoat . Häll den heta sockerlagen i bunken.\n5. Låt svalna i rumstemperatur. Täck sedan över bunken och låt stå i kylskåp 2-3 dygn.\n6. Sila saften genom silduk. Häll flädersaften på rena flaskor, fyll ända upp och sätt på skruvkork.\n7. Förvara flädersaften svalt. Späd till nskad smak med med kallt vatten, gärna kolsyrat! Fyll på med isbitar och ev citronskivor. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/flaaderdryck.png"
        },
        {
            id: 8,
            name: "Frallor",
            ingredients: ["jäst", "vatten", "kvarg", "flytande honung", "salt", "vetemjöl", "solrosfrön", "sesamfrön", "flingsalt"],

            renderIngredients: "Jäst 25 g\nVatten 4 dl\nKvarg 1 dl\nFlytande honung 1 msk\nSalt 1 tsk\nVetemjöl 10 dl\nSolrosfrön 2 dl\nSesamfrön ½ dl\nFlingsalt ",

            howTo: "1. Smula jästen i en bunke.\n2. Rör ut jästen med lite av vattnet. Rör ner resterande vatten, kesella, honung och salt.\n3. Arbeta in mjölet med en trägaffel. Täck bunken med plastfolie och ställ in i kylskåpet över natten.\n4. Nästa dag:\n5. Värm ugnen till 225°.\n6. Stjälp ut degen på mjölad arbetsbänk. Forma degen försiktigt till en rulle och dela i ca 12 bitar. Lägg på en plåt med bakplåtspapper och toppa bullarna med frön och lite flingsalt.\n7. Grädda mitt i ugnen 12-15 min.\n8. Servera de kalljästa frallorna direkt. Frys in de som blir över!",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/frallor.jpg"
        },
        {
            id: 9,
            name: "Pannkakor",
            ingredients: ["vetemjöl", "standardmjölk", "ägg", "salt", "smör"],

            renderIngredients: "Vetemjöl 3 dl\nStandardmjölk 6 dl\nÄgg 3\nSalt ½ tsk\nSmör 2 msk ",

            howTo: "1. Vispa ut mjölet i hälften av mjölken till en slät smet. Vispa i resterande mjölk, ägg och salt.\n2. Låt smeten svälla ca 10 min.\n3. Smält smör i en stekpanna och häll ner i smeten. Grädda tunna pannkakor. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/pannkakor.jpg"
        },
        {
            id: 10,
            name: "Ramen",
            ingredients: ["vitlöksklyftor", "färsk ingefära", "smör", "fläskfärs", "Bön och chillipasta", "sake", "ägg", "nudlar", "pak choi", "böngroddar", "salladslökar", "ost"],

            renderIngredients: "Vitlöksklyftor 4\nFärsk ingefära 25 g\nSmör 1 msk\nFläskfärs 200 g\nBön och chilipasta 3 msk\nSake 4 msk\nÄgg 2\nNudlar, snabbnudlar 4 förp\nPak choi 1\nBöngroddar 4 dl\nSalladslökar 2\nOst 4 skivor ",
            
            howTo: "1. Skala och finhacka vitlök och ingefära.\n2. Hetta upp smör i en stekpanna. Fräs vitlök och ingefära på medelvärme i ca 30 sek.\n3. Tillsätt färs och bryn tills den fått fin färg.\n4. Tillsätt doubanjiang och fräs ytterligare 1 min. Rör ner shaoxingvin och låt koka in. Smaka av med salt och svartpeppar. Ställ åt sidan.\n5. Koka upp vatten och koka äggen i exakt 6 min och 45 sek. Häll av och kyl ner äggen. Skala och halvera äggen. Ställ åt sidan.\n6. Koka upp vatten i en kastrull, Plocka bladen från pak choi. Koka först pak choi i 30 sek. Plocka upp med hålslev. Gör sedan likadant med groddarna. Plocka upp med hålslev. Ställ åt sidan.\n7. Koka nudlar al dente utan kryddpåse. Skölj nudlarna i kallt vatten för att få bort stärkelse, doppa dem sedan i hett vatten igen precis innan servering.\n8. Strimla salladslöken.\n9. Koka upp vatten, mjölk och kycklingbuljong. Låt sjuda tills buljongen lösts upp. Tillsätt smör.\n10. SLURP!",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/ramen.png"
        },
        {
            id: 11,
            name: "Smoothie Bowl",
            ingredients: ["grekisk yoghurt", "banan", "frysta hallon", "hallon", "vaniljpulver", "havregryn", "draktfrukt", "mango"],

            renderIngredients: "Grekisk yoghurt 3 dl\nBanan 1\nFrysta hallon 2 dl\nVaniljpulver 2 krm\nHavregryn ½ dl\nDrakfrukt 1\nMango ½\nHallon 1 dl ",

            howTo: "1. Mixa ihop yoghurt med banan, hallon och vanilj. Lägg upp i 2 skålar.\n2. Gör kulor av drakfrukten, skala och skär mangon i tunna skivor.\n3. Toppa din smoothiebowl med havregryn, frukt och bär. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/smoothiebowl.jpg"
        },
        {
            id: 12,
            name: "Potatis och Purjolökssoppa",
            ingredients: ["purjolök", "potatis", "smör", "grönsaksbuljong", "matlagningsgrädde", "salt", "peppar", "persilja"],

            renderIngredients: "Potatis 500 g\nPurjolök 1\nSmör 1 msk\nGrönsaksbuljong 6 dl\nMatlagningsgrädde 3 dl\nSalt och peppar\nPersilja hackad 1 dl",

            howTo: "1. Skala potatisen och ansa purjolöken. Skär potatis och purjolök i bitar.\n2. Fräs purjolöken i smör-&rapsolja i en kastrull.\n3. Tillsätt potatis och hälften av buljongen.\n4. Låt koka på medelvärme ca 10 min. Mixa soppa slät.\n5. Häll i resterande buljong och syrad grädde. Koka upp. Smaka av med salt och peppar. Strö över persilja och servera med bröd. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/potatispurjolok.jpg"
        },
        {
            id: 13,
            name: "Pasta Carbonara",
            ingredients: ["pasta", "fläsk", "smör", "vispgrädde", "salt", "vitlöksklyfta", "ost", "svartpeppar", "äggulor"],

            renderIngredients: "Pasta 300 g\nFläsk 150 g\nSmörn\nVispgrädde ½ dl\nSalt ½ tsk\nFinhackad vitlöksklyfta 1\nOst riven 3 dl\nSvartpeppar 2 krm\nÄggulor 4",

            howTo: "1. Koka spaghettin.\n2. Skär fläsket i små tärningar. Stek fläsket knaprigt i smör i en stekpanna.\n3. Vispa ihop grädde, salt, vitlök och hälften av osten.\n4. Rör ner fläsk och ostblandningen i den kokta spaghettin och rör kraftigt till en krämig konsistens. 5. Strö över resten av osten och peppar. Servera pasta carbonara med en äggula. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/pasta_carbonara.jpg"
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