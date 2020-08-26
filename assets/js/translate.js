var dictionary = {
    "tr": {
        "home": "Anasayfa",
        "ourgame": "Oyunumuz",
        "betaprogram": "Beta Programı",
        "betaprogram_summary": `
            Henüz ilk oyunumuzun kapalı beta sürecindeyiz.
            <br /> <br />
            Oyunumuzu erken aşamada deneyerek; oynanış, kullanıcı deneyimi, oyun mekaniği, ve tasarım hakkında 
            bize geri bildirimlerde bulunabilirsin. 
            `,
        "betaprogram_button": "Beta Programına Katıl",
        "about": "BİZ KİMİZ",
        "team_role_ferhat": "Oyun Geliştirici, Kurucu Ortak",
        "team_role_mehmet": "Web Geliştirici, Kurucu Ortak",
        "team_role_serkan": "2D Tasarımcı",
        "team_role_gokturk": "Satış",
        "team_role_omer": "3D Tasarımcı",
        "email_form_name": "İsim",
        "email_form_email": "E-posta",
        "email_form_message": "Mesaj",
        "email_form_button": "Gönder",
        "get_in_touch": "ULAŞIM KANALLARI",
        "about_description": `
                Gnarly Game Studio'yu, 5 kişilik bir ekip ile Istanbul/Türkiye'de kurduk.
                <br/> <br/>
                Multiplayer online oyun geliştirme konusunda uzman ekibimiz,
                tek elle oynanabilen mobil MOBA; Cetchy'yi geliştiriyor.
            `,
        "contact": "İLETİŞİM",
        "slogan": "İşler çığrından çıkacak",
        "subtitle": "ONLINE BİR SAVAŞ OYUNU TEK ELLE OYNANABİLİR Mİ?",
        "seemore": "DEVAMI",
        "game_summary": `
            <b>Cetchy</b> tek el ile oynayabileceğin bir <b>multiplayer savaş oyunu</b>.
            <br/> <br/>
            Farklı oyun tarzı ile hızlı ve zengin bir oyun deneyimini, sade ve zarif bir oyunanışla sunuyor.
            </p>
            `,
        "feature_engaging": "SÜRÜKLEYİCİ",
        "feature_engaging_description": `
                Cetchy sürekli güncellenen savaş arenaları ile yeni maceralara kapı açıyor.
                <br/> <br/>
                Yeni karakterler ve kostümleri ile alışkanlıklarını değiştiriyor.
            `,
        "feature_smooth": "AKICI",
        "feature_smooth_description": `
            Pürüssüz bir oyun deneyimi sunmak için; Cetchy'yi geliştirirken en yeni teknolojileri kullandık.
                <br/> <br/>
            Cetchy'nin oyun mekaniklerini kolay öğrenilebilecek fakat ustalaşmaya kabiliyet gerektirecek
            şekilde tasarladık.
            `,
        "feature_rewarding": "DOYURUCU",
        "feature_rewarding_description": `
                Cetchy çok hızlı ve eğlenceli olacak şekilde tasarlandı.
                <br/> <br/>
                Her oyun sonunda, <b>Oyna</b> butonuna tekrar basmak isteyeceksiniz.
            `
    },
    "en": {
        "home": "Home",
        "ourgame": "Our Game",
        "betaprogram": "Beta Program",
        "betaprogram_summary": `
             We are in the early stages of developing our first game.
            <br /> <br />
            You can try the beta version and help us by giving feedbacks about the functionality, user experience, gameplay, mechanics, and art direction.
            `,
        "betaprogram_button": "Join Beta Program",
        "about": "About",
        "team_role_ferhat": "Game Developer, Co-Founder",
        "team_role_mehmet": "Web Developer, Co-Founder",
        "team_role_serkan": "2D Artist",
        "team_role_gokturk": "Marketing",
        "team_role_omer": "3D Artist",
        "email_form_name": "Name",
        "email_form_email": "Email",
        "email_form_message": "Message",
        "email_form_button": "Send",
        "get_in_touch": "GET IN TOUCH",
        "about_description": `
                Gnarly Game Studio is a game development company based in Istanbul, Turkey.
                <br/>
                We are specialized in crafting multiplayer mobile games.
                <br/>
                We are currently working on a mobile battle royale game (Cetchy) that can be played with only one hand. 
            `,
        "contact": "Contact",
        "slogan": "Things are about to get gnarly!",
        "subtitle": "Can an online battle game be played with only one hand?",
        "seemore": "SEE MORE",
        "game_summary": `
            <b>Cetchy</b> is a <b>multiplayer shooter game</b>.
            <br/><br />
            It offers a <b>fast-paced battle royale</b> gaming experience with elegant game mechanics.
            </p>
            `,
        "feature_engaging": "Engaging",
        "feature_engaging_description": `
                Cetchy drags you into new adventures with constantly updated battle arenas.
                <br/><br />
                Changes your habits with new characters and costumes.
            `,
        "feature_smooth": "Smooth",
        "feature_smooth_description": `
                 We use the latest technologies while developing Cetchy to give you a smooth gaming experience.
                <br/><br />
                It's game mechanics are also thought out to be easy to adapt but difficult to master.
            `,
        "feature_rewarding": "Rewarding",
        "feature_rewarding_description": `
                Cetchy is designed to be super fast and fun. 
                <br/><br />
                You will find yourself just about to hit the <b>Play</b> button again after every game.
            `
    }
};

var browser_lang = navigator.language || navigator.userLanguage;
var current_lang = browser_lang.split("-")[0];
   console.log(browser_lang);
function translate(language) {

    var language = dictionary.hasOwnProperty(language) ? language : "en";
    $("[data-translate]").each(function() {

        var key = $(this).data('translate');
        $(this).html(dictionary[language][key]);
    });
}

translate(current_lang);