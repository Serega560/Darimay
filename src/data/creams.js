export const creams = [
    {
        id: 1,
        title: "Пептиды",
        subtitle: "Омолаживающий крем для лица и век с пептидами",
        weight: "30 мл",
        description: "Откройте для себя секрет молодости и сияния с нашим омолаживающим кремом для лица и век Darimay. " +
            "Этот продукт создан для тех, кто стремится вернуть коже упругость, свежесть и здоровое сияние. " +
            "Наша инновационная формула, обогащенная пептидами, антиоксидантами, NUФ-комплексом, гиалуроновой кислотой, " +
            "пантенолом, витаминами F и E, обеспечивает коже питание, защиту и глубокое увлажнение, " +
            "необходимые для восстановления и замедления признаков старения.",
        link: "https://www.ozon.ru/product/darimay-omolazhivayushchiy-krem-dlya-litsa-i-vek-s-peptidami-antioksidantami-nuf-ot-morshchin-1731390411",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "photo_1.png",
        imgFileMb: "photo_1mb.png",
        gallery: [
            {
                fallback: new URL('../assets/img/photo_1.png', import.meta.url).href,
                webp1x: new URL('../assets/img/photo_1.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/photo_1.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/photo_1mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/photo_1mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/photo_1mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/doc_dp.jpg', import.meta.url).href,
                webp1x: new URL('../assets/img/doc_dp.jpg?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/doc_dp.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        imgDoc:"doc.dp.jpg",
        bgFile: "bg_photo_1.png",
        skinNeeds:"Крем подойдет всем типам кожи, обезвоженной, раздраженной, против борьбы с возрастными изменениями, " +
            "в период восстановления после пилингов.",
        compound:"Water, C12-16 Alcohols, NMF (glycerin, betaine, sodium PCA, sorbitol,  serine, glycine, glutamic acid, " +
            "alanine, lysine, arginine, threonine,  proline), c12-13 alkyl lactate, Peptide- Complex (glycerin, water,  " +
            "hydroxypropyl cyclodextrin, palmitoyl tripeptide-38), panthenol,  biosaccharide gum-1, caprylic/capric " +
            "triglyceride,  coco-caprylate/caprate, hydrogenated lecithin, palmitic acid,  troxerutin, persea gratissima " +
            "(avocado) oil, dL–alpha tocopheryl  acetate, butyrospermum parkii butter, squalane, cetearyl alcohol,  " +
            "phenoxyethanol and ethylhexylglycerin, allantoin, Borealine Expert  (glycerin (and) acer rubrum extract), " +
            "Borealine Protect (glycerin (and)  picea mariana bark extract), linoleic acid, linolenic acid, arachidonic  " +
            "acid, carbomer, hyaluronic acid SLMW, xanthan gum, aminomethylpropanol.",
        info: {
            name:"Darimay Омолаживающий крем для лица и век с пептидами, антиоксидантами, НУФ от морщин и отечности.",
            advertising: "Крем восстанавливает и глубоко увлажняет кожу, придает здоровый и сияющий вид. Подходит для кожи лица, вокруг глаз, шеи и декольте.",
            advantages: "В состав крема входят:",
            descriptionAdvantages: "2% Пептидного комплекса MATRIXYL®synthe’6 - запатентованный пептид, который стимулирует синтез шести " +
                "незаменимых компонентов кожи (коллаген I, IV, III, HSP47, ламин-5, гиалуроновая кислота), способствует разглаживаю морщин, " +
                "повышает упругость кожи.",
            choice: "6% компонентов НУФ – компонентов натурального увлажняющего фактора, физиологичного и родственного нашей коже. " +
                "Обеспечивает глубокое, качественное увлажнение с пролонгированным эффектом, обеспечивая восполнение полезных веществ, " +
                "дефициты которых возникают после 30 лет.",
            choiceAdvantages: "Растительные высококонцентрированные комплексы:",
            way: "Borealine Expert - комплекс на основе бореальных деревьев с максимально рекомендованной дозировкой является мощным антиоксидантом, " +
                "стимулирует акварорины, повышая увлажненность кожи, а также усиливает синтез коллагена, способствуя разглаживанию морщин.",
            wayAdvantages: "Borealine Protect - разглаживает морщины за счет комбинации антиоксидантного и противовоспалительного действия, " +
                "обеспечиваемого экстрактом коры черной ели (Picea Mariana), который богат ресвератролом. Этот актив ингибирует перекисное " +
                "окисление липидов, поглощает ультрафиолетовые лучи и нейтрализует свободные радикалы, которые вызывают повреждение кожи. " +
                "Таким образом, он защищает кожу от оксидативного стресса, замедляет разрушение коллагена и стимулирует процессы восстановления.",
            add_1: "Супернизкомолекулярная гиалуроновая кислота и биосахаридная камедь-1 (фукогель) – надежно удерживают влагу в коже.",
            add_2: "2% Пантенол и аллантоин - успокаивают кожу, ускоряя восстановление поврежденной кожи.",
            add_3: "Троксерутин - усиливает микроциркуляцию, укрепляет сосуды и снижает отечность.",
            add_4: "Масло авокадо – природный антиоксидант, богат витаминами, помогает восстановлению кожи.",
            add_5: "Витамин F – помогает в укреплении липидного барьера кожи, повышая увлажненность кожи.",
            application: "Способ применения:",
            applicationDescription: "Легкими массирующими движениями нанесите не большое количество крема на лицо, область вокруг глаз, шею и декольте."
        }
    },
    {
        id: 2,
        title: "Церамиды",
        subtitle: "Восстанавливающий крем для лица с церамидами",
        weight: "30 мл",
        description: "Восстанавливающий крем для лица и век с церамидами, пантенолом и NUФ-комплексом. " +
            "Увлажняет, питает и укрепляет кожу, не перегружая её. Идеален для чувствительной кожи, быстро впитывается, " +
            "подходит для ежедневного ухода. Натуральный состав и легкая текстура — всё, что нужно для здорового сияния кожи.",
        link: "https://www.ozon.ru/product/darimay-vosstanavlivayushchiy-krem-dlya-litsa-i-vek-s-tseramidami-nuf-pantenolom-i-1136886739",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "photo_2.png",
        imgFileMb: "photo_2mb.png",
        gallery: [
            {
                fallback: new URL('../assets/img/photo_2.png', import.meta.url).href,
                webp1x: new URL('../assets/img/photo_2.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/photo_2.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/photo_2mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/photo_2mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/photo_2mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/doc_dc.jpg', import.meta.url).href,
                webp1x: new URL('../assets/img/doc_dc.jpg?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/doc_dc.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        imgDoc:"doc.dc.jpg",
        bgFile: "bg_photo_2.png",
        skinNeeds:"Крем подойдет всем типам кожи, обезвоженной, раздраженной, против борьбы с возрастными изменениями, " +
            "в период восстановления после пилингов.",
        compound:"Water, c12-16 alcohols, NMF (glycerin, betaine, sodium PCA, sorbitol,  serine, glycine, glutamic acid, " +
            "alanine, lysine, arginine, threonine,  proline), Ceramide Complex (ceramide 1, ceramide 2, ceramide 3, " +
            "ceramide 6 II, butylene glycol, hydrogenated lecithin, caprylic/capric  glycerides polyglyceryl-10 esters, " +
            "pentylene glycol, water), c12-13  alkyl lactate, panthenol, caprylic/capric triglyceride, biosaccharide  " +
            "gum-1, coco-caprylate/caprate, troxerutin, palmitic acid, persea  gratissima (avocado) oil, dL–alpha tocopheryl " +
            "acetate, squalane,  butyrospermum parkii butter, tocopheryl acetate, cetearyl alcohol,  phenoxyethanol and " +
            "ethylhexylglycerin, allantoin, acer rubrum extract,  linoleic acid, linolenic acid, arachidonic acid, carbomer, " +
            "hyaluronic  acid SLMW, xanthan gum, aminomethylpropanol.",
        info: {
            name:"Darimay Восстанавливающий крем для лица и век с церамидами.",
            advertising: "Крем восстанавливает и глубоко увлажняет кожу, придает здоровый и сияющий вид. Подходит для кожи лица, вокруг глаз, шеи и декольте.",
            advantages: "В состав крема входят:",
            descriptionAdvantages: "Компоненты натурального увлажняющего фактора 6%(glycerin, betaine, sodium PCA, sorbitol, " +
                "serine, glycine, glutamic acid, alanine, lysine, arginine, threonine, proline), а также биосахаридную камедь " +
                "и гиалуроновую кислоту, которые проникают на разные слои кожи, увлажняют по каскадному принципу, " +
                "обеспечивая восполнение полезных веществ, дефициты которых возникают после 30 лет.",
            choice: "Комплекс церамидов 2% (ceramide 1, ceramide 2, ceramide 3, ceramide 6 II, butylene glycol, hydrogenated lecithin, " +
                "caprylic/capric glycerides polyglyceryl-10 esters, pentylene glycol, water) и Витамин F - восстанавливает липидный барьер, повышая общий уровень увлажненности кожи.",
            choiceAdvantages: "2% пантенола и аллантоин успокаивают кожу, ускоряя восстановление поврежденной кожи.",
            way: "1% троксерутина который усиливает микроциркуляцию, укрепляет сосуды и снижает отечность.",
            wayAdvantages: "легкими массирующими движениями нанесите не большое количество крема на лицо, область вокруг глаз, шею и декольте.",
            add_1: "0,25 % Borealine® Expert (Бореалайн эксперт) - комплекс на основе бореальных деревьев с максимально " +
                "рекомендованной дозировкой является мощным антиоксидантом, стимулирует акварорины, повышая увлажненность кожи, " +
                "а также усиливает синтез коллагена, способствуя разглаживанию морщин.",
            add_2: "0,25 % Borealine® Expert (Бореалайн эксперт) - комплекс на основе бореальных деревьев с максимально рекомендованной " +
                "дозировкой является мощным антиоксидантом, стимулирует акварорины, повышая увлажненность кожи, а также усиливает " +
                "синтез коллагена, способствуя разглаживанию морщин.",
            add_3: "Не содержит отдушек и красителей. Не комедогенно.",
            application: "Способ применения:",
            applicationDescription: "Легкими массирующими движениями нанесите не большое количество крема на лицо, область вокруг глаз, шею и декольте.",
        }
    },
    {
        id: 3,
        title: "Уход для лица",
        subtitle: "Крем-гель для умывания с пантенолом",
        weight: "150 мл",
        description: "Подарите своей коже комфортное очищение, к которому она будет стремиться каждый день. " +
            "Очищающий крем-гель Darimay с пантенолом создан для тех, кто ищет мягкий, " +
            "но эффективный способ избавиться от загрязнений, при этом сохранив ощущение увлажнённости, " +
            "гладкости и комфорта уже с первого применения. Он деликатно удаляет излишки себума, пыль и остатки макияжа, " +
            "не нарушая естественный защитный барьер и не провоцируя сухость или стянутость.",
        link: "https://www.ozon.ru/product/darimay-ochishchayushchiy-krem-gel-dlya-umyvaniya-c-pantenolom-dlya-chuvstvitelnoy-kozhi-2524523954",
        rating: "4.9",
        review: "325 отзывов",
        imgFile: "photo_3.png",
        imgFileMb: "photo_3mb.png",
        gallery: [
            {
                fallback: new URL('../assets/img/photo_3.png', import.meta.url).href,
                webp1x: new URL('../assets/img/photo_3.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/photo_3.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/photo_3mb.png', import.meta.url).href,
                webp1x: new URL('../assets/img/photo_3mb.png?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/photo_3mb.png?format=webp&width=800', import.meta.url).href
            },
            {
                fallback: new URL('../assets/img/doc_du.jpg', import.meta.url).href,
                webp1x: new URL('../assets/img/doc_du.jpg?format=webp&width=400', import.meta.url).href,
                webp2x: new URL('../assets/img/doc_du.jpg?format=webp&width=800', import.meta.url).href
            }
        ],
        imgDoc:"doc.du.jpg",
        bgFile: "bg_photo_3.png",
        skinNeeds:"Крем подойдет всем типам кожи,",
        compound:"Aqua, Acrylates Copolymer, Polyglyceryl-3 Cocoate, Sorbitan Stearate, Sodium Cocoyl Glutamate, " +
            "VP/DMAPA Acrylates Copolymer, Cocamidopropyl Betaine, Vitis Vinifera (Grape) Seed Oil, Panthenol, " +
            "Biosaccharide Gum-1, Trehalose, Decyl Glucoside, Persea Gratissima (Avocado) Oil, Butyrospermum Parkii " +
            "(Shea) Butter, Phenoxyethanol, Ethylhexylglycerin, Hydroxyethylcellulose, Parfum, Citric Acid.",
        info: {
            name:"Кремовый гель для умывания для чувствительной кожи, очищающий крем-гель с пантенолом.",
            advertising: "Бережное очищение без сухости и раздражения.",
            advantages: "Крем-гель мягко удаляет загрязнения и остатки макияжа, не нарушая липидный барьер кожи. Формула " +
                "с физиологичным pH и мягкими ПАВ растительного происхождения, " +
                "идеально подходит для сухой, нормальной и чувствительной кожи, включая атопичную, кожу век, а также после " +
                "агрессивных процедур или при лечении ретиноидами.",
            descriptionAdvantages: "Не пенится — деликатная кремовая текстура снижает дискомфорт при умывании.",
            choiceAdvantages: "С маслами ши, авокадо и виноградной косточки — питают и восстанавливают, защищая от стянутости.",
            way: "Пантенол и трегалоза — увлажняют и успокаивают. Без отдушек и красителей — минимум риска раздражения.",
            wayAdvantages: "Без SLS и агрессивных компонентов — подходит даже для чувствительной кожи.",
            add_1: "После умывания кожа — чистая, мягкая и комфортная, без ощущения плёнки или сухости.",
            application: "Способ применения",
            applicationDescription: "Нанесите небольшое количество крем-геля на влажную кожу лица и век, аккуратно помассируйте и смойте тёплой водой. " +
                "Подходит для ежедневного использования утром и вечером.",
        }
    }
].map(item => {
    const img = new URL(`../assets/img/${item.imgFile}`, import.meta.url).href;
    const imgMb = new URL(`../assets/img/${item.imgFileMb}`, import.meta.url).href;
    const imgDoc = item.imgDoc ? new URL(`../assets/img/${item.imgDoc}`, import.meta.url).href : '';
    const bg = new URL(`../assets/img/${item.bgFile}`, import.meta.url).href;
    const webp1x = new URL(`../assets/img/${item.imgFile}?format=webp&width=400`, import.meta.url).href;
    const webp2x = new URL(`../assets/img/${item.imgFile}?format=webp&width=800`, import.meta.url).href;
    const fallback = new URL(`../assets/img/${item.imgFile}?width=400`, import.meta.url).href;
    const webpMb1x = new URL(`../assets/img/${item.imgFileMb}?format=webp&width=400`, import.meta.url).href;
    const webpMb2x = new URL(`../assets/img/${item.imgFileMb}?format=webp&width=800`, import.meta.url).href;
    const fallbackMb = new URL(`../assets/img/${item.imgFileMb}?width=400`, import.meta.url).href;

    // Оставляем gallery как массив объектов
    const gallery = item.gallery
        .filter(img => img) // убираем пустые
        .map(imgObj => ({
            fallback: imgObj.fallback,
            webp1x: imgObj.webp1x,
            webp2x: imgObj.webp2x,
            title: imgObj.title || item.title
        }));

    return {
        ...item,
        img,
        imgMb,
        imgDoc,
        bg,
        webp1x,
        webp2x,
        fallback,
        webpMb1x,
        webpMb2x,
        fallbackMb,
        gallery
    };
});
