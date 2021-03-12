


    var dictionary = {
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
            "team_role_ferhat": "Game Developer",
            "team_role_mehmet": "Web Developer",
            "team_role_serkan": "2D Artist",
            "team_role_omer": "3D Artist",
            "team_role_hakan": "3D Animator",
            "team_role_ad": "Community Manager",
            "email_form_name": "Name",
            "email_form_email": "Email",
            "email_form_message": "Message",
            "email_form_button": "Send",
            "get_in_touch": "GET IN TOUCH",
            "about_description": `
                Gnarly Game Studio is a game development company based in Istanbul, Turkey.
                <br/>
                We aim to develop multiplayer online games by combining innovative game concepts with scalable network systems.
                <br/>
                We are currently working on a mobile battle royale game (Cetchy) that has a non-trivial combat system. 
            `,
            "contact": "Contact",
            "slogan": "Cetchy",
            "subtitle": "Get ready for an extraordinary battle royale experience!",
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
            `,
        }
    };


    function translate(language) {

        var language = dictionary.hasOwnProperty(language) ? language : "en";
        $("[data-translate]").each(function() {

            var key = $(this).data('translate');
            $(this).html(dictionary[language][key]);
        });
    }
