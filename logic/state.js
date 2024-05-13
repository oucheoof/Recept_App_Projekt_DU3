const _state = {
    recipes: [
        {
            id: 1,
            name: "Amerikanska Pannkakor",
            ingredients: ["vetemjöl", "bakpulver", "strösocker", "salt", "yoghurt", "ägg", "smör"],

            renderIngredients: "Vetemjöl 3 dl\nBakpulver 2 tsk\nStrösocker 1 msk\nSalt ½ tsk\nMild yoghurt naturell, filmjölk eller mjölk 3½ dl\nÄgg 1\nSmör ",

            howTo: "1. Blanda de torra ingredienserna i en bunke.\n2. Rör ner yoghurt, äggula och rapsolja. Vispa till en slät smet.\n3. Vispa äggvitan till ett hårt skum och vänd ner i smeten.\n4. Hetta upp lite rapsolja i en stekpanna. Stek små pannkakor på låg medelvärme i omgångar. När det bildas bubblor på ovansidan är det dags att vända. 5. Servera amerikanska pannkakor med lönnsirap och bär. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/amerikanskapannkakor.jpg"
        },
        {
            id: 2,
            name: "Lövbiffspasta",
            ingredients: ["lövbiff", "champinjoner", "salt", "svartpeppar", "purjolök", "vitlöksklyftor", "smör", "crèmefraiche", "matlagningsgrädde", "dijonsenap", "sambaloelek", "hönsbuljong"],

            renderIngredients: "Lövbiff ca 400 g\nSalt och svartpeppar\nChampinjoner 250 g\nPurjolök 1/2\nSmör\nVitlöksklyftor, finrivna 2\ncrèmefraiche 2 dl\nMatlagningsgrädde 2½ dl\nDijonsenap 1 msk\nsambaloelek 1 msk\nHönsbuljong ",

            howTo: "1. Sätt på vatten till pastakoket.\n2. Strimla lövbiffen grovt. Salta och peppra. Ställ åt sidan medan resten förbereds.\n3. Skär svampen i klyftor. Skölj och skiva purjolöken grovt. Fräs svampen i en stekpanna tills vätskan kokat in. Tillsätt en klick smör, purjolök och vitlök. Fräs 2–3 min. Rör ner crèmefraiche, grädde, senap, sambaloelek och smulad buljong. Låt koka ihop 2–3 min. Ställ åt sidan.\n 4. Koka pastan enligt anvisning på förpackningen. Spara 1 dl av pastavattnet.\n5. Hetta upp en stekpanna med smör. Stek lövbiffen hastigt i omgångar.\n6.Blanda ner i såsen tillsammans med pastan. Rör ev ner det sparade pastavattenet till önskad konsistens.Toppa med smulad ost och timjan. Servera direkt. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/lovbiffspasta.jpg"
        },
        {
            id: 3,
            name: "Fläderdryck",
            ingredients: ["fläderblomsklasar", "citron", "vatten", "socker", "citronsyra", "natriumbensoat"],

            renderIngredients: "Fläderblomsklasar 35 - 40\nCitroner 3\nVatten 1½ liter\nStrösocker 1½ liter\nCitronsyra 50 g\nNatriumbensoat ev. 2 krm",

            howTo: "1. Skölj blomklasarna i ljummet vatten, låt rinna av. Ta bort grova skaft, de kan göra saften besk.\n2. Tvätta citronerna noga i ljummet vatten. Skär citronerna i skivor.\n3. Varva blomklasar och citronskivor i en stor bunke.\n4. Koka upp vatten och socker. Rör om tills sockret löst upp sig. Blanda ner citronsyran och natriumbensoat . Häll den heta sockerlagen i bunken.\n5. Låt svalna i rumstemperatur. Täck sedan över bunken och låt stå i kylskåp 2-3 dygn.\n6. Sila saften genom silduk. Häll flädersaften på rena flaskor, fyll ända upp och sätt på skruvkork.\n7. Förvara flädersaften svalt. Späd till nskad smak med med kallt vatten, gärna kolsyrat! Fyll på med isbitar och ev citronskivor. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/flaaderdryck.png"
        },
        {
            id: 4,
            name: "Spagetti med krämig pesto",
            ingredients: ["basilika", "pinjenötter", "pasta", "vitlöksklyfta", "svecia", "kvarg", "salt", "svartpeppar"],

            renderIngredients: "Pasta\nbasilika 2 krukor\nPinjenötter 50 g\nVitlöksklyfta 1\nsvecia 100 g\nKvarg 250 g\nSalt\nSvartpeppar ",

            howTo: "1. Bryt av basilikabladen. Mixa ingredienserna till peston väl. Spar lite ost, pinjenötter och basilika till servering.Smaka av med salt och peppar.\n2. Koka spaghettin enligt anvisning på förpackningen. Blanda spaghetti och pesto. Toppa med extra basilika och ost. Servera genast.",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/spagetti_pesto.jpg"
        },
        {
            id: 5,
            name: "Köttbullar",
            ingredients: ["köttfärs", "ströbröd", "standarmjölk", "lök", "ägg", "salt", "svartpeppar", "smör"],

            renderIngredients: "Köttfärs 500 g\nStröbröd ½ dl\nStandardmjölk 1 dl\nFinhackad lök 2 msk\nÄgg 1\nSalt 1 tsk\nSvartpeppar 1 krm\nSmör & rapsolja 2 msk ",

            howTo: "1. Blanda ströbröd och mjölk. Låt svälla 10 min.\n2. Lägg i färs, lök, ägg, salt och peppar. Rör till en jämn smet.\n3. Forma smeten till jämna köttbullar. Stek dem i rapsolja på medelvärme ca 5 min. ",

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
            name: "Stekt ris",
            ingredients: ["jasminris", "morot", "paprika", "sockerärtor", "vitlöksklyftor", "matolja", "chilliflakes", "ägg"],

            renderIngredients: "Jasminris 3 dl\nMorot 1\npaprika 1\nSockerärter 150 g\nVitlöksklyftor 3\nMatolja 2 msk\nChili flakes 1 tsk\nÄgg 2",

            howTo: "1. Koka riset enligt anvisning på förpackningen.\n2. Skala och skär tunna stavar av moroten. Strimla paprika och sockerärter. 3. Skala och finhacka vitlöken.\n4. Bryn smöret till dressingen under omrörning. Häll över i en värmetålig skål och rör ner övriga ingredienser.\n5. Hetta upp matoljan i en rymlig stekpanna. Stek alla grönsaker med vitlök och chili flakes på hög värme 2–3 min.\n6. Tillsätt riset och knäck ner äggen. Stek under omrörning tills äggen stelnat. Blanda ner dressingen.\n7. Toppa stekt ris med koriander och rostadlök. Servera direkt. ",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/stektris.jpg"
        },
        {
            id: 8,
            name: "Frallor",
            ingredients: ["jäst", "vatten", "kvarg", "honung", "salt", "vetemjöl", "solrosfrön", "sesamfrön", "flingsalt"],

            renderIngredients: "Jäst 25 g\nVatten 4 dl\nKvarg 1 dl\nFlytande honung 1 msk\nSalt 1 tsk\nVetemjöl 10 dl\nSolrosfrön 2 dl\nsesamfrön½ dl\nFlingsalt ",

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
            ingredients: ["vitlöksklyftor", "färsk ingefära", "smör", "fläskfärs", "chillipasta", "sake", "ägg", "nudlar", "pakchoi", "böngroddar", "salladslökar", "ost"],

            renderIngredients: "Vitlöksklyftor 4\nFärsk ingefära 25 g\nSmör 1 msk\nFläskfärs 200 g\nBön och chilipasta 3 msk\nSake 4 msk\nÄgg 2\nNudlar, snabbnudlar 4 förp\npakchoi 1\nBöngroddar 4 dl\nSalladslökar 2\nOst 4 skivor ",
            
            howTo: "1. Skala och finhacka vitlök och ingefära.\n2. Hetta upp smör i en stekpanna. Fräs vitlök och ingefära på medelvärme i ca 30 sek.\n3. Tillsätt färs och bryn tills den fått fin färg.\n4. Tillsätt doubanjiang och fräs ytterligare 1 min. Rör ner shaoxingvin och låt koka in. Smaka av med salt och svartpeppar. Ställ åt sidan.\n5. Koka upp vatten och koka äggen i exakt 6 min och 45 sek. Häll av och kyl ner äggen. Skala och halvera äggen. Ställ åt sidan.\n6. Koka upp vatten i en kastrull, Plocka bladen från pakchoi. Koka först pakchoi i 30 sek. Plocka upp med hålslev. Gör sedan likadant med groddarna. Plocka upp med hålslev. Ställ åt sidan.\n7. Koka nudlar al dente utan kryddpåse. Skölj nudlarna i kallt vatten för att få bort stärkelse, doppa dem sedan i hett vatten igen precis innan servering.\n8. Strimla salladslöken.\n9. Koka upp vatten, mjölk och kycklingbuljong. Låt sjuda tills buljongen lösts upp. Tillsätt smör.\n10. SLURP!",

            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/ramen.png"
        },
        {
            id: 11,
            name: "Smoothie Bowl",
            ingredients: ["grekiskyoghurt", "banan", "hallon", "vaniljpulver", "havregryn", "draktfrukt", "mango"],

            renderIngredients: "grekiskyoghurt 3 dl\nBanan 1\nFrysta hallon 2 dl\nVaniljpulver 2 krm\nHavregryn ½ dl\nDrakfrukt 1\nMango ½\nHallon 1 dl ",

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

            howTo: "1. Skala potatisen och ansa purjolöken. Skär potatis och purjolök i bitar.\n2. Fräs purjolöken i rapsolja i en kastrull.\n3. Tillsätt potatis och hälften av buljongen.\n4. Låt koka på medelvärme ca 10 min. Mixa soppa slät.\n5. Häll i resterande buljong och syrad grädde. Koka upp. Smaka av med salt och peppar. Strö över persilja och servera med bröd. ",

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
        {
            id: 14,
            name: "Kärleksmums",
            ingredients: ["tomat", "pasta"],
            renderIngredients: "smör 200 g\n standardmjölk 2 dl\n standardmjölk 2 dl\nÄgg 4\nStrösocker 4 dl\nVetemjöl 4 dl\nBakpulver 2½ tsk\nVaniljsocker 2 tsk\nKakao 1½ dl\nSalt 2 krm",
            howTo: "Sätt ugnen på 175°.\nSmörj och bröa en form med hög kant, 25x35 cm eller lägg i ett bakplåtspapper.\nSmält smöret, häll i mjölken och låt svalna.\nVispa ägg och socker riktigt pösigt med elvisp. Det tar ca 5 min.\nBlanda mjöl, vaniljsocker, kakao, bakpulver och salt. Sikta ner i smeten genom en sil. Tillsätt smör och mjölk och blanda allt till en jämn smet. Häll smeten i formen.\nGrädda i mitten av ugnen ca 25 min. Känn efter med en trästicka så kakan är helt genomgräddad. Låt kakan svalna",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/karleksmums.jpg"
        },
        {
            id: 15,
            name: "Chokladbollar",
            ingredients: ["smör", "strösocker", "kakao", "vaniljsocker", "vatten", "havregryn"],
            renderIngredients: "smör 100 g\nströsocker 1½ dl\nkakao ½ dl\nvaniljsocker 1 tsk\nvatten 2 msk\nhavregryn 5 dl",
            howTo: "Rör ihop smör och socker. Tillsätt kakao, vaniljsocker och vatten. Blanda i havregryn. Forma smeten till bollar och rulla i strössel eller kokosflingor. Förvara i kylen.",
            like: [],
            rating: [],
            image: "./media/thumbnails/chokladbollar.jpg"
        },
        {
            id: 16,
            name: "Picklad rödlök",
            ingredients: ["ättiksprit", "strösocker", "vatten", "rödlökar"],
            renderIngredients: "ättiksprit 12% 1 dl\nströsocker 2 dl\nvatten 3 dl\nrödlökar 2 st",
            howTo: "Koka upp ättika, socker och vatten, låt svalna något. Skala och skiva löken tunt och lägg i en glasburk. Häll på den ljumna lagen och låt stå tills den kallnat. Löken är sedan klar att serveras men håller ytterligare 1-2 veckor i kyl.",
            like: [],
            rating: [],
            image: "./media/thumbnails/picklad_rodlok.jpg"
        },
        {
            id: 17,
            name: "Grekisk sallad",
            ingredients: ["rödlök", "gurka", "tomater", "fetaost", "oregano", "kalamataoliver", "olivolja", "rödvinsvinäger", "svartpeppar"],
            renderIngredients: "rödlök 1 st\n gurka 1 st\ntomater 4 st\nfetaost 150 g\noregano ½ kruka\nKalamataoliver 1½ dl\nolivolja ½ dl\nrödvinsvinäger 1 msk\nsvartpeppar 1 krm",
            howTo: "Skala och skiva löken. Skär gurka och tomater i bitar. Bryt osten i bitar. Plocka bladen från oreganon. Rör ihop olja och vinäger till en dressing. Varva lök, gurka, tomat, oliver och ost på tallrikar. Ringla över dressingen. Strö över oregano och svartpeppar.",
            like: [],
            rating: [],
            image: "./media/thumbnails/grekisk_sallad.jpg"
        },
        {
            id: 18,
            name: "Kokt potatis",
            ingredients: ["potatis", "vatten", "salt", "smör", "flingsalt", "persilja"],
            renderIngredients: "potatis 900 g\nvatten tillräckligt för att täcka potatisen\nsalt 2 tsk\nsmör 2 msk\nflingsalt 1 tsk\npersilja 2 msk (valfritt)",
            howTo: "Tvätta eller skala potatisen och lägg i en kastrull. Täck med kallt vatten och salta. Koka under lock tills potatisen är genomkokt, ca 20 minuter. Häll av vattnet och låt potatisen ånga av. Servera med smör, flingsalt och hackad persilja.",
            like: [],
            rating: [],
            image: "./media/thumbnails/kokt_potatis.jpg"
        },
        {
            id: 19,
            name: "Stuvad spenat",
            ingredients: ["spenat", "smör", "vetemjöl", "standardmjölk", "salt", "svartpeppar"],
            renderIngredients: "spenat 450 g\nsmör 3 msk\nvetemjöl 3 msk\nstandardmjölk 4 dl\nsalt ½ tsk\nsvartpeppar 1 krm",
            howTo: "Smält smöret i en kastrull, vispa ner mjölet. Späd med mjölken och låt koka ihop. Krama ur spenaten och rör ner i såsen. Smaka av med salt och peppar.",
            like: [],
            rating: [],
            image: "./media/thumbnails/stuvad_spenat.jpg"
        },
        {
            id: 20,
            name: "Enkel kycklinggryta",
            ingredients: ["kycklingbröstfilé", "rapsolja", "svartpeppar", "soja", "hönsbuljong", "vetemjöl", "matlagningsgrädde"],
            renderIngredients: "kycklingbröstfilé 450 g\nrapsolja 1 msk\nsvartpeppar 1 krm\nsoja ½ msk\nhönsbuljong 1 tärning\nvetemjöl 1 msk\nmatlagningsgrädde 5 dl",
            howTo: "Skär kycklingen i strimlor, krydda med peppar och bryn i rapsolja. Tillsätt soja, buljongtärning och grädde. Vispa vetemjölet i lite vatten och rör ner i grytan. Låt allt koka ca 5 min. Servera med ris och sallad.",
            like: [],
            rating: [],
            image: "./media/thumbnails/enkel_kycklinggryta.jpg"
        },
        {
            id: 21,
            name: "Smoothie med hallon",
            ingredients: ["hallon", "vaniljyoghurt", "standardmjölk"],
            renderIngredients: "frysta hallon 1 dl\nvaniljyoghurt 1 dl\nstandardmjölk 1 dl",
            howTo: "Lägg hallon, yoghurt och mjölk i en mixer eller skål om du använder stavmixer. Mixa till en jämn smoothie. Servera direkt.",
            like: [],
            rating: [],
            image: "./media/thumbnails/smoothie_med_hallon.jpg"
        },
        {
            id: 22,
            name: "Kålsoppa",
            ingredients: ["potatis", "lök", "vitlöksklyftor", "rapsolja", "grönsaksbuljong", "vispgrädde", "grönkål", "äldelostkräm", "kantareller", "salt", "svartpeppar"],
            renderIngredients: "potatis 500 g\nlök 1 st\nvitlöksklyftor 2 st\nrapsolja 3 msk\ngrönsaksbuljong 9 dl\nvispgrädde 3 dl\ngrönkål 200 g\näldelostkräm 170 g\nkantareller 150 g\nsalt och svartpeppar",
            howTo: "Fräs hackad lök och vitlök i olja, tillsätt buljong och grädde och koka. Lägg i grönkål och äldelostkräm, koka vidare. Mixa soppan lite grovt, stek svamp och toppa soppan med den.",
            like: [],
            rating: [],
            image: "./media/thumbnails/kalsoppa.jpg"
        },
        {
            id: 23,
            name: "Tryffelpasta med Gruyère",
            ingredients: ["pasta", "vitlöksklyftor", "smör", "vin", "vispgrädde", "tryffelolja", "salt", "svartpeppar", "gruyèreost"],
            renderIngredients: "pasta 4 portioner\nvitlöksklyftor 3 st\nsmör 25 g\nvin 1 dl\nvispgrädde 3 dl\ntryffelolja 2 tsk\nsalt och svartpeppar\ngruyèreost 150 g",
            howTo: "Koka pastan al dente och spara lite av kokvattnet. Fräs vitlöken i smör, tillsätt vin och grädde och låt sjuda. Krydda med tryffelolja, salt och peppar. Blanda pastan med såsen och toppa med finriven Gruyère.",
            like: [],
            rating: [],
            image: "./media/thumbnails/tryffelpasta_med_gruyere.jpg"
        },
        {
            id: 24,
            name: "Ayran",
            ingredients: ["yoghurt", "vatten", "salt", "mynta"],
            renderIngredients: "yoghurt naturell 5 dl\nvatten 5 dl\nsalt 1-2 tsk\nmynta (valfritt)",
            howTo: "Vispa eller skaka ihop yoghurt och vatten tills det blir skummigt. Smaka av med salt och ställ i kylen för att bli riktigt kall. Servera iskall ayran i glas, eventuellt garnerad med mynta.",
            like: [],
            rating: [],
            image: "./media/thumbnails/ayran.jpg"
        },
        {
            id: 25,
            name: "Pastasallad med ost och kronärtskocka",
            ingredients: ["pasta", "vitmögelost", "rödlök", "paprika", "kronärtskockshjärtan", "hackad basilika", "oregano", "dijonsenap", "rödvinsvinäger", "salt", "svartpeppar"],
            renderIngredients: "orecchiette pasta 300 g\nvitmögelost 150 g\nrödlök 1 st\npaprika 1 st\nkronärtskockshjärtan 300 g\nhackad basilika, salvia och oregano 1 dl\ndijonsenap 1 tsk\nrödvinsvinäger 2 tsk\nsalt 1 krm\nsvartpeppar 1 krm",
            howTo: "Koka pasta enligt anvisning. Blanda skuren ost, hackad lök, paprika och kronärtskockshjärtan med örter. Kombinera senap, vinäger och oljan från kronärtskockorna, salta och peppra, och blanda med pastan.",
            like: [],
            rating: [],
            image: "./media/thumbnails/pastasallad_med_ost_och_kronartsskocka.jpg"
        },
        {
            id: 26,
            name: "Banankaka",
            ingredients: ["smör", "standardmjölk", "ägg", "strösocker", "bananer", "kanel", "vetemjöl", "bakpulver"],
            renderIngredients: "smör 75 g\nstandardmjölk ½ dl\nägg 2 st\nströsocker 2 dl\nbananer2 st\nkanel 1 tsk\nvetemjöl 3 dl\nbakpulver 1 tsk",
            howTo: "Sätt ugnen på 175°. Smörj och bröa en avlång form. Smält smöret och blanda med mjölken. Vispa ägg och socker pösigt och rör ner mosade bananer, kanel, mjöl och bakpulver. Blanda snabbt ihop med mjölkblandningen och häll i formen. Grädda i 55-60 min.",
            like: [],
            rating: [],
            image: "./media/thumbnails/banankaka.jpg"
        },
        {
            id: 27,
            name: "Fattiga Riddare",
            ingredients: ["ägg", "mjölk", "strösocker", "vaniljsocker", "kanel", "bröd", "smör"],
            renderIngredients: "ägg 2 st\nmjölk 3 dl\nströsocker 3 msk\nvaniljsocker 2 tsk\nkanel 1 tsk\nbröd 8 skivor\nsmör",
            howTo: "Vispa samman ägg, mjölk, socker, vaniljsocker och kanel. Doppa brödskivorna i blandningen. Stek dem gyllenbruna i smör. Servera med sylt eller socker.",
            like: [],
            rating: [],
            image: "./media/thumbnails/fattiga_riddare.jpg"
        },
        {
            id: 28,
            name: "Halloumigryta med ris",
            ingredients: ["ris", "blomkål", "halloumi", "olja", "curry", "kokosmjölk", "krossadetomater", "peppar", "rostadlök"],
            renderIngredients:"4 port ris\n1/2 blomkålshuvud (à ca 300 g)\n400 g halloumi eller grillost\n1 msk olja\n2 tsk curry\n200 ml kokosmjölk\n1 förp krossadetomater (à 390 g)\npeppar\n1/2 dl rostadlök",
            howTo: "Koka riset enligt anvisningen på förpackningen.\nAnsa och skär blomkålen i mindre bitar.\nSkär halloumin i tärningar och fräs dem och hälften av blomkålen i oljan i en stor stekpanna eller gryta.\nKrydda med curry och rör i kokosmjölken och krossadetomater. Sjud i ca 5 minuter eller tills blomkålen är mjuk. Smaka av med peppar.\nServera grytan med riset, resten av blomkålen och rostadlök."
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
                "ägg",
                "majs",
                "tonfisk",
                "matlagningsyoghurt",
                "vitlöksklyftor",
                "kapris",
                "salt",
                "peppar"
            ],
            renderIngredients:"4 bakpotatisar (à ca 180 g)\n2 hårdkokta ägg\n1/2 majs (à 150 g)\n1 tonfisk (à 170 g)\n1 1/2 dl matlagningsyoghurt\n2 vitlöksklyftor\n2 msk kapris\n1/2 tsk salt\n1 tsk peppar",
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
                "laxfile",
                "salladslök",
                "majonnäs",
                "sesamfrö"
            ],
            renderIngredients:"250 g sushiris (250 g motsvarar ca 3 dl)\n1/2 tsk salt\n1 noriark (ca 18x20 cm)\n150 g lax\n1 salladslök\n1 msk majonnäs\n1 tsk sesamfrö",
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
                "citronskal",
                "kapris",
                "makrillfilé",
                "spaghetti",
                "persilja",
                "salt",
                "svartpeppar"
            ],
            renderIngredients:"2 vitlöksklyftor\n3 msk olivolja\n1/2 tsk chiliflakes\n1 msk citronskal\n3 msk hackad kapris\n2 förp makrillfilé (à 125 g)\n400 g spaghetti\n1 dl persilja\nsalt\nsvartpeppar" ,
            howTo:"Skala och hacka vitlöken. Fräs vitlöken i oljan några minuter i en stekpanna. Tillsätt chiliflakes, citronskal och kapris och fräs ytterligare några minuter.\nBryt makrillen i bitar och lägg ner tillsammans med tomatsåsen.\nKoka pastan enligt anvisning på förpackningen. Häll av och spar 1 dl av kokvattnet (för 4 port). Tillsätt pastan, kokvattnet och persiljan i stekpannan och blanda. Smaka av med salt och peppar.\nTill servering: Toppa med parmesan och servera med citronklyftor.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/pasta_makrilltomat.jpg"
        },
        {
            id: 32,
            name: "Laxfilé i ugn med citron",
            ingredients: [
                "laxfilé",
                "olja",
                "salt",
                "svartpeppar",
                "citronskal"
            ],
            renderIngredients:"ca 1 1/4 kg laxfilé\n2 msk olja\n1 1/2 tsk salt\n1 tsk svartpeppar\n1 msk citronskal" ,
            howTo:"Sätt ugnen på 175°C.\nLägg laxen i en smord ugnsform. Ringla över olja och strö över salt, peppar och citronskal.\nStäll in i mitten av ugnen ca 25 minuter eller tills laxen har en innertemperatur på 52-56°C.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/lax_ungsbakad.jpg"
        },
        {
            id: 33,
            name:"Fyllda paprikor med ris",
            ingredients:[
                "lök",
                "vitlöksklyftor",
                "selleristjälkar",
                "zucchini",
                "olivolja",
                "ris",
                "tomatpuré",
                "chilipulver",
                "örter",
                "vatten",
                "grönsaksbuljongtärning",
                "oliver",
                "valnötter",
                "parmesan",
                "salt",
                "paprika"
            ],
            renderIngredients:"1 lök\n2 vitlöksklyftor\n3 selleristjälkar\n1 zucchini\n4 msk olivolja\n1 dl råris\n2 msk tomatpuré\n2 tsk chilipulver\n1 tsk örter\n2 1/2 dl vatten\n1 grönsaksbuljongtärning\n1 1/2 dl oliver\n1 1/2 dl valnötter\n1 1/2 dl parmesan\nsalt\n4 paprikor",
            howTo:"Skala och hacka lök och vitlök. Hacka selleri och zucchini. Stek lök, vitlök, selleri och zucchini i hälften av oljan ca 10 minuter tills allt mjuknar.\nTillsätt ris, tomatpuré, chilipulver och örter. Fräs ytterligare ca 5 minuter.\nTillsätt vatten och smulad buljongtärning. Sätt på lock och låt koka ca 10 minuter eller tills riset är mjukt. Rör ner oliver, nötter och ost. Smaka av med salt.\nSätt ugnen på 200°C.\nSkär bort toppen på paprikan som ett lock och gröp ur kärnorna. Lägg paprikorna i en ugnsform ca 20 x 25 cm (för 4 port). Fyll dem med risblandningen och lägg på toppen av paprikan. Ringla över resten av oljan och häll vatten i formen. Ställ in i nedre delen av ugnen 25–35 minuter eller tills paprikorna är mjuka.\nServeringsförslag: Servera med yoghurt eller crèmefraiche och ev bröd och en sallad.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/paprikor_fyllda.jpg"
        },
        {
            id: 34,
            name:"Kycklingbuljong",
            ingredients:[
                "lök",
                "vitlöksklyftor",
                "kyckling",
                "vatten",
                "salt"
            ],
            renderIngredients:"1 lök\n2 vitlöksklyftor\n1 kyckling (à ca 1 kg)\n2 1/2 l vatten\nev salt"            ,
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
                "citronskal",
                "parmesan",
                "salt",
                "svartpeppar"
            ],
            renderIngredients:"400 g pasta\n50 g smör\n2 vitlöksklyftor\n1 msk citronskal\n1 dl finparmesan (+ ev extra till servering)\n1/2 tsk salt\n1/2 tsk svartpeppar",
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
                "sweetchilisås",
                "soja",
                "tofu",
                "morötter",
                "avokador",
                "salladslök",
                "böngroddar",
                "koriander",
                "rispapper",
                "sesamfrön"
            ],
            renderIngredients:"1 dl vatten\n1/2 dl jordnötssmör\n1/2 dl sweetchilisås\n3 msk soja\n230 g tofu\n2 morötter\n2 avokador\n1/2 påse salladslök (à 125 g)\n180 g böngroddar\n20 g koriander\n12 ark rispapper\n1 msk sesamfrön",
            howTo:"Koka riset enligt anvisningen på förpackningen.\nDipp: Koka upp vattnet. Dra av kastrullen från värmen och blanda ner jordnötssmör, sweetchilisås och soja. Låt svalna.\nVårrullar: Skär tofun i stavar. Skala morötterna och skär i tunna strimlor. Dela, kärna ur och gröp ur avokadorna, skiva dem. Ansa och skiva salladslöken. Lägg upp alla grönsaker och koriander på ett serveringsfat.\nVid bordet: Sätt fram en stor skål med ljummet vatten på bordet. Var och en doppar sitt eget rispapper i vattnet ca 30 sekunder. Lyft upp, låt droppa av och lägg det på tallriken. Lägg på grönsaker och sesamfrö och vik ihop till en rulle.\nServera rullarna med dipp och ris.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/varrullar.jpg"
        },
        {
            id: 37,
            name:"Lax teriyaki",
            ingredients:[
                "ris",
                "pakchoi",
                "lime",
                "salt",
                "peppar",
                "laxfilé",
                "olja",
                "teriyakimarinad"
            ],
            renderIngredients:"4 port ris\n250 g pakchoi\n1 lime\nsalt\npeppar\n600 g laxfilé\n1 tsk olja\n150 ml teriyakimarinad",
            howTo:"Koka riset enligt anvisningen på förpackningen.\nAnsa, skölj och skiva pakchoi tunt. Pressa över saft från limen och krydda med salt och peppar.\nSkär bort skinnet på laxen och skär den i portionsbitar. Stek fisken i oljan i en stekpanna, ca 3 minuter på varje sida eller tills fisken har en innertemperatur på 56°C. Häll i teriyakimarinaden och låt sjuda någon minut.\nServera laxen med ris och pakchoi.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/lax_teriyaki.jpg"
        },
        {
            id:38 ,
            name:"Tofu bowl",
            ingredients:[
                "tahini",
                "sesamfrön",
                "vatten",
                "mirin",
                "soja",
                "citronjuice",
                "chilipulver",
                "nudlar",
                "rapsolja",
                "spenat",
                "salt",
                "rödkål",
                "svamp",
                "tofu",
                "majsstärkelse",
                "noriark",
                "sesamfrön"
            ],
            renderIngredients:
            "1 1/2 dl tahini\n1 1/2 dl sesamfrön\n3/4 dl vatten\n3 msk mirin\n4 1/2 msk soja\n3/4 dl citronjuice\n2 krm chilipulver\n200 g nudlar (t ex soba- eller glasnudlar)\n1 msk rapsolja\n200 g färsk spenat\nsalt\n100 g rödkål\n250 g svamp (t ex portabello, champinjon, ostronskivling)\n1 msk rapsolja (till stekning av svamp)\n1 förp tofu (à ca 270 g)\n1 dl majsstärkelse\n2 msk rapsolja (till stekning av tofu)\n2 noriark (torkade sjögräsark)\n2 msk rostade sesamfrön",
            howTo:"Goma dare-sås: Vispa tahini och sesamfrönmed vatten slätt. Tillsätt resten av ingredienserna och rör ihop till en sås.\nKoka nudlarna enligt anvisning på förpackningen. Kyl i kallt vatten och blanda med olja.\nKoka upp en kastrull med saltat vatten. Tillsätt spenaten och koka några sekunder. Häll av och spola kallt. Krama ur vätskan.\nStrimla rödkålen fint.\nAnsa och bryt svampen i mindre bitar. Stek svampen krispig i lite olja.\nSkär tofun i mindre bitar och vänd i majsstärkelsen. Stek krispig och gyllene i olja.\nLägg nudlarna i portionsskålar. Toppa med svampen, rödkålen, spenaten och tofun. Ringla över såsen och strö över sesamfrönoch nori.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/tofu_bowl.jpg"
        },
        {
            id: 39,
            name: "Ramen Miso",
            ingredients:[
                "majskorn",
                "smör",
                "vatten",
                "snabbnudlar",
                "misopasta",
                "ingefära",
                "rostadlök",
                "sesamfrön",
                "babyspenat",
                "salladslökar"
            ],
            renderIngredients:"2 majskorn (à 150 g)\n100 g smör\n1 1/2 l vatten\n4 paket snabbnudlar (à ca 85 g)\n4 msk misopasta eller soja (4 msk misopasta motsvarar 4 tsk soja)\n2 msk ingefära\n4 msk rostadlök\n4 msk sesamfrön (sesamfröblandning)\nca 1/2 påse babyspenat (à 65 g)\n1 - 2 salladslökar",
            howTo:"Häll av vätskan från majsen och torka torr med hushållspapper. Stek i en torr stekpanna på medelvärme 5–10 minuter tills den fått färg. Höj värmen och tillsätt smöret och låt det bli lite karamelliserat. \nKoka upp vattnet med buljongpåsarna från nudelpaketen. Vispa ner miso och ingefära. Tillsätt nudlarna och koka dem enligt anvisning på förpackningen. \nTill servering: Fördela nudelsoppan i tallrikar och toppa med den smörstekta majsen, rostadlök och sesamfrön. Toppa gärna med salladslök och spenat.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/ramen_miso.jpg"
        },
        {
            id:40 ,
            name:"Biffwok",
            ingredients:[
                "jasminris",
                "ryggbiff",
                "lök",
                "vitlöksklyfta",
                "broccoli",
                "paprika",
                "ostronsås",
                "soja",
                "oxfond",
                "strösocker",
                "balsamico",
                "majsstärkelse",
                "vatten",
                "sesamolja",
                "salt",
                "svartpeppar",
                "bambuskott",
                "finskurna salladslökar"
            ],
            renderIngredients:"4 port jasminris\ca 450 g ryggbiff\n1 lök\n1 vitlöksklyfta\n1/2 broccoli\n1/2 paprika\nSås\n1 dl ostronsås\n2 msk soja\n1 msk oxfond\n1 msk strösocker\n1 tsk balsamico\n1 tsk majsstärkelse\n1/2 dl vatten\n2 msk sesamolja\n2 krm salt\n1 krm svartpeppar\n1 burk bambuskott (à ca 200 g)\n2 finskurna salladslökar",
            howTo:"Koka riset enligt anvisning på förpackningen.\nSkär ryggbiffen i strimlor. Skala lök och vitlök. Skär löken i stora bitar och finhacka vitlöken. Skär broccolin i buketter och skiva stammen tunt. Dela, kärna ur och skär paprikan i bitar.\nSås: Blanda ostronsås, soja, fond, socker, balsamico, majsstärkelse och vatten.\nHetta upp en stekpanna med sesamolja och tillsätt biff, lök, vitlök, salt och peppar. Låt fräsa 3 minuter tills det får lite färg. Tillsätt såsen och låt koka 2–3 minuter.\nHäll av bambuskotten. Tillsätt broccoli, paprika, bambuskott och salladslök. Fräs ytterligare 2–3 minuter. Servera med ris.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/biffwok.jpg"
        },
        {
            id: 41,
            name:"Kycklingcurry med ris",
            ingredients:[
                "ris",
                "gula lökar",
                "morötter",
                "paprika",
                "kycklingfilé",
                "olja",
                "curry",
                "kokosmjölk",
                "hönsbuljong",
                "honung",
                "salt",
                "peppar",
                "matyoghurt"
            ],
            renderIngredients:"4 port ris\n2 gula lökar\n2 morötter\n1 paprika\n500 g kycklingfilé\n2 msk olja\n2 tsk curry\n400 ml kokosmjölk\n2 dl hönsbuljong\n2 tsk honung\nsalt och peppar\n2 dl matyoghurt",
            howTo:"Koka riset enligt anvisningen på förpackningen.\nSkala lök och morötter, strimla löken och skiva morötterna. Dela, kärna ur och strimla paprikan.\nStrimla kycklingen. Stek den i oljan i en gryta tillsammans med curry och lök ca 3 min.\nTillsätt morötter, paprika, kokosmjölk och buljong. Låt sjuda under lock ca 10 minuter. Smaka av med honung, salt och peppar.\nTill servering: Servera kycklingcurryn med ris och en klick yoghurt.",
            like: [4, 7],
            rating: [{ "user_id": 7, "rating": 10 }],
            image: "./media/thumbnails/kycklingcurry.jpg"
        },
    ],
    ingredients: [ "vetemjöl", "bakpulver", "strösocker", "salt", "yoghurt", "ägg", "smör", "lövbiff", "champinjoner", "svartpeppar", "purjolök", "vitlöksklyftor", "crèmefraiche", "matlagningsgrädde", "dijonsenap", "sambaloelek", "hönsbuljong", "fläderblomsklasar", "citron", "vatten", "socker", "citronsyra", "natriumbensoat", "basilika", "pinjenötter", "pasta", "vitlöksklyfta", "svecia", "kvarg", "köttfärs", "ströbröd", "standarmjölk", "lök", "smör", "torskfilé", "dill", "cornflakes", "potatis", "jasminris", "morot", "paprika", "sockerärtor", "matolja", "chilliflakes", "jäst", "honung", "solrosfrön", "sesamfrön", "flingsalt", "standardmjölk", "ingefära", "fläskfärs", "chillipasta", "sake", "nudlar", "pakchoi", "böngroddar", "salladslökar", "ost", "grekiskyoghurt", "banan", "hallon", "vaniljpulver", "havregryn", "draktfrukt", "mango", "grönsaksbuljong", "peppar", "persilja", "fläsk", "vispgrädde", "äggulor", "tomat", "smör", "kakao", "vaniljsocker", "ättiksprit", "rödlökar", "rödlök", "gurka", "tomater", "fetaost", "oregano", "kalamataoliver", "olivolja", "rödvinsvinäger", "persilja", "spenat", "kycklingbröstfilé", "rapsolja", "soja", "vaniljyoghurt", "lök", "grönkål", "Ädelostkräm", "kantareller", "pasta", "vin", "tryffelolja", "yoghurt", "mynta", "vitmögelost", "kronärtskockshjärtan", "basilika", "oregano", "bananer", "kanel", "mjölk", "kanel", "bröd", "ris", "blomkål", "halloumi", "olja", "curry", "kokosmjölk", "krossadetomater", "rostadlök", "bakpotatisar", "majs", "tonfisk", "matlagningsyoghurt", "vitlöksklyftor", "kapris", "sushiris", "noriark", "salladslök", "majonnäs", "sesamfrö", "chiliflakes", "citronskal", "kapris", "makrillfilé", "spaghetti", "persilja", "selleristjälkar", "zucchini", "tomatpuré", "chilipulver", "örter", "grönsaksbuljongtärning", "oliver", "valnötter", "parmesan", "paprika", "kyckling", "jordnötssmör", "sweetchilisås", "soja", "tofu", "morötter", "avokador", "böngroddar", "koriander", "rispapper", "lime", "laxfilé", "teriyakimarinad", "tahini", "sesamfrön", "mirin", "citronjuice", "rapsolja", "spenat", "rödkål", "svamp", "tofu", "majsstärkelse", "noriark", "majskorn", "snabbnudlar", "misopasta", "ingefära", "sesamfrön", "babyspenat", "salladslök", "jasminris", "ryggbiff", "broccoli", "ostronsås", "oxfond", "balsamico", "sesamolja", "bambuskott", "ris", "gullök", "kycklingfilé", "hönsbuljong", "honung", "matyoghurt" ]

};





const STATE = {
    get,
/*     Post,
    Patch,
    Delete, */
    
    // token: () => {return 'ec24b88c7f3f7a3d488f29d59f70baba7f86414e';},

    renderApp,
    /* renderLogin */
}

// async function Get(entity){
//     let entityArray = _state[entity];
//     let entityClone = JSON.parse(JSON.stringify(entityArray));

//     return entityClone;
// }

// async function Post(entity, rqst){}

// async function Patch(entity){}

// async function Delete(entity){}

function renderApp() {


    
    //const response = await fetch ('./api/database/recepies.json');
    //const data = await response.json();
    
    //_state.recipes = data.artists;

   /*
    let recipeRequest = new Request(`./api/database/recepies.php`);
    const recipeData = await fetch_function (recipeRequest);
    _state.recipes = recipeData;
*/

    // Startsidan
render_wrapper_DOM (); // startsidans wrapper anrop
    render_header(head); // header anrop
    render_sorted_recipes_DOM(matched_recipes); // anropar på container för alla sorterade/filtrerade recept
    render_ALL_recipes_DOM(recipes_all)
    update_sorted_recipes(ingredientsBox2);
    renderPopup();
    renderBox1("sort");
    renderFooter();


}




function get(entity) {

    // klonar
    return JSON.parse(JSON.stringify( _state[ entity ]));

    renderIngredientBox("wrapper");
/* renderChosenIngredientsBox("wrapper"); */ 
}

function renderLogReg(){
    
    renderLogRegContainer('wrapper');
}