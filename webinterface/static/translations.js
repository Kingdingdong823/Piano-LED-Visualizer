const translations = {
    en: {
        //index
        loading: "Loading...",
        home: "Home",
        led_settings: "LED Settings",
        songs: "Songs",
        sequences: "Sequences",
        ports_settings: "Ports Settings",
        led_animations: "LED Animations",
        wifi: "Wi-Fi",
        switch_ports: "Switch Ports",
        view_on_github: "View on GitHub",
        join_discord: "Join Discord server",

        //ledcolor
        led_color: "LED Color",
        multicolor: "Multicolor",
        rainbow_colors: "Rainbow Colors",
        speed: "Speed",
        gradient: "Gradient",
        scale_coloring: "Scale Coloring",
        velocity_rainbow: "Velocity Rainbow",

        offset:  "Offset",
        scale: "Scale",
        timeshift: "Timeshift",
        scale_percent: "Scale %",
        curve_percent: "Curve %",
        slow_color: "Slow Color",
        fast_color: "Fast Color",
        max_notes: "Max Notes",
        period_in_seconds: "Period in seconds",
        start: "Start",
        end: "End",
        color_for_in_scale: "Color for in scale",
        color_for_not_in_scale: "Color for not in scale",
        scale_key: "Scale key",

        //lightmode
        fading: "Fading",
        velocity: "Velocity",
        instant: "Instant",
        very_fast: "Very Fast",
        fast: "Fast",
        medium: "Medium",
        slow: "Slow",
        very_slow: "Very Slow",

        //ledsettings
        backlight: "Backlight",
        sides_colors:  "Sides Colors",
        off: "Off",
        same_as_led_color: "Same as LED Color",
        rgb: "RGB",
        adjustments: "Adjustments",
        skipped_notes: "Skipped Notes",
        finger_based_ignore: "Finger Based: ignore notes with information about which hand to play",
        normal_ignore_all_other: "Normal:ignore all other notes",
        none: "None",
        finger_based: "Finger Based",
        reverse: "Reverse",
        inverted: "Inverted",
        shift: "Shift",
        led_count: "Led Count",
        leds_per_meter: "Leds per meter",
        led_note_offsets: "LED Note Offsets",
        shift_notes_for_better_alignment: "Shift notes for better alignment",
        light_number_means: "Light number: 92 and Offset: 2 means that notes after the LED 92 will be shifted by 2 lefts to the left",
        light_number: "Light Number",
        offset: "Offset",
        note_offset: "Note offset",

        //songs
        status: "Status",
        start_recording: "Start Recording",
        starting: "starting",
        stop_and_save: "Stop and Save",
        cancel_recording: "Cancel Recording",
        canceling:  "canceling",
        upload_songs: "Upload Songs",
        drag_and_drop_midi: "Drag and drop midi file(s) here",
        or_click_to_choose: "or click to choose file(s) to upload",
        play_on_piano: "Play on piano",
        stop: "Stop",
        stop_learning: "Stop learning",
        loop: "Loop",
        practice: "Practice",
        melody: "Melody",
        rhytm: "Rhytm",
        listen:  "Listen",
        tempo:  "Tempo",
        hands: "Hands",
        both: "Both",
        right: "Right",
        left: "Left",
        mute_hands: "Mute Hands",
        wrong_notes: "Wrong Notes",
        disabled: "Disabled",
        enabled: "Enabled",
        future_notes: "Future Notes",
        start_point: "Start Point",
        set_the_current_track_time: "Set the current track time as the loop start",
        end_point: "End Point",
        set_the_current_track_time_as_the_loop_end: "Set the current track time as the loop end",
        left_hand_color: "Left hand color",
        right_hand_color: "Right hand color",
        songs_list: "Songs List",
        getting_songs_list: "Getting songs list",

        //sheetmusic
        load_custom_sheet: "Load custom sheet",
        offset_ms: "Offset (ms)",
        sheet_tip_line_1: "If the automatic conversion does not suit your expectations, you can load your own musical notation.",
        sheet_tip_line_2: "The highlighted part of the music notation is only an approximate indicator. Use the offset tool to improve synchronization.",
        sheet_tip_line_3: "For the best result do the following:",
        sheet_tip_line_4: "1. Convert your music notation to a midi file using Musescore or similar program, name it the same as the midi file you want to load. (E.g. my_music.mid and my_music.xml)",
        sheet_tip_line_5: "2. Upload the midi file and the music notation file.",

        //songslist
        name: "Name",
        date: "Date",
        action: "Action",
        songs_per_page: "Songs per page",
        total_songs: "Total songs: ",

        //sequences
        sequence: "Sequence",
        active_sequence: "Active Sequence",
        color: "Color",
        next_step: "Next Step",
        press_spacebar:  "Press spacebar",
        add: "Add",
        remove: "Remove",
        step: "Step",
        activation_method:  "Activation Method",
        button_press: "Button Press",
        sustain_pedal: "Sustain Pedal",
        portamento_pedal:  "Portamento Pedal",
        sostuneto_pedal: "Sostuneto Pedal",
        soft_pedal: "Soft Pedal",
        next_step_value:  "Next Step Value",
        next_step_tip_line_1: "This value decides if next step is activated when you press or release the pedal.",
        next_step_tip_line_2: "For example if you want to change settings after fully pressing Sostenuto pedal you should set it to 126",
        next_step_tip_line_3: "(127 is the maximum value when pedal is fully pressed).",
        next_step_tip_line_4: "Set value to -1 to change settings with your pedal by releasing it fully.",
        sequence_name: "Sequence name",
        save_current_settings_to_step: "Save current settings to step",

        //ports
        for_lighting_leds: "For lighting LEDs with your keyboard, set your piano port as an active input.",
        set_your_synthesia: "Set your Synthesia's port for learning mode.",
        active: "Active",
        switch: "Switch",
        secondary: "Secondary",
        used_for_sound: "Used for sound when playing a midi file.",
        list_of_ports: "List of ports and connections",
        disconnect_ports: "Disconnect ports",
        restart_rtp: "Restart RTP MIDI service",
        midi_events: "MIDI events",
        show_midi_events: "Show midi events (might degrade performance)",

        //network
        connected_wifi: "Connected Wi-Fi",
        disconnect_wifi_and_create_hotspot: "Disconnect Wi-Fi and create Hotspot",
        disconnecting_warning_line_1: "Disconnecting from Wi-Fi will start the process of creating a Hotspot. This might take a moment.",
        disconnecting_warning_line_2: "You'll need to connect to the newly created Hotspot to access the web interface again.",
        wifi_list: "Wi-Fi List",

        //ledanimations
        stop_animation: "Stop animation",

        //homepage
        advanced_mode: "Advanced mode",
        system_cpu_usage: "System CPU usage",
        ram_usage: "Ram usage",
        disk_usage: "Disk Usage",
        bandwidth_usage: "Bandwidth Usage",
        process_cpu_usage: "Process CPU usage",
        metronome: "Metronome",
        beats_per_measure: "Beats Per Measure",
        volume: "Volume",
        color_mode: "Color Mode",
        single: "Single",
        light_mode: "Light Mode",
        normal: "Normal",
        brightness: "Brightness",
        backlight_brightness: "Backlight Brightness",
        input_port: "Input Port",
        playback_port: "Playback Port",
        cover_state: "Cover State",
        screen: "Screen",
        reset_settings_to_default: "Reset settings to default",
        confirm: "Confirm",
        restart_rpi: "Restart RPi",
        restart_visualizer: "Restart Visualizer",
        power_off: "Power Off",
        update_visualizer: "Update Visualizer",
        connect_ports: "Connect Ports",
        clean_led_strip: "Clean LED Strip",
        logs: "Logs",
        show_last: "Show last",
        lines: "lines",

        //dynamic content
        incorrect_password: "If an incorrect password is entered, it might take a few minutes for the hotspot to be reestablished.",
        if_the_hotspot: "If the Hotspot doesn't appear after 5 minutes, please restart the device",
        connect: "Connect",


    },
    pl: {
        //index
        loading: "Ładowanie...",
        home: "Strona główna",
        led_settings: "Ustawienia LED",
        songs: "Nuty",
        sequences: "Sekwencje",
        ports_settings: "Ustawienia Portów",
        led_animations: "Animacje LED",
        wifi: "Wi-Fi",
        switch_ports: "Zamień Porty",
        view_on_github: "Sprawdź GitHub",
        join_discord: "Dołącz do serwera Discord",

        offset: "Przesunięcie",
        scale: "Skala",
        timeshift: "Przesunięcie czasu",
        scale_percent: "Skala %",
        curve_percent: "Krzywa %",
        slow_color: "Wolno - kolor",
        fast_color: "Szybko - kolor",
        max_notes: "Maksymalna liczba nut",
        period_in_seconds: "Okres w sekundach",
        start: "Początek",
        end: "Koniec",
        color_for_in_scale: "Kolor dla nut w skali",
        color_for_not_in_scale: "Kolor dla nut poza skalą",
        scale_key: "Klucz skali",


        //ledcolor
        led_color: "Kolor LED",
        multicolor: "Wiele kolorów",
        rainbow_colors: "Tęcza",
        speed: "Prędkość",
        gradient: "Gradient",
        scale_coloring: "Skala kolorów",
        velocity_rainbow: "Tęcza-Prędkość",

        //lightmode
        fading: "Zanikanie",
        velocity: "Szybkość nacisku",
        instant: "Natychmiast",
        very_fast: "Bardzo szybko",
        fast: "Szybko",
        medium: "Średnio",
        slow: "Wolno",
        very_slow: "Bardzo wolno",

        //ledsettings
        backlight: "Podświetlenie",
        sides_colors:  "Sąsiadujące diody",
        off: "Wyłącz",
        same_as_led_color: "Takie same jak kolor LED",
        rgb: "RGB",
        adjustments: "Poprawki",
        skipped_notes: "Pominięte nuty",
        finger_based_ignore: "Finger Based: ignoruj nuty z informacją którą ręką należy grać",
        normal_ignore_all_other: "Normal: ignoruj wszystkie inne nuty",
        none: "Brak",
        finger_based: "Finger Based",
        reverse: "Kierunek",
        inverted: "Odwrócone",
        shift: "Przesunięcie",
        led_count: "Liczba diód",
        leds_per_meter: "Ledów na metr",
        led_note_offsets: "Przesunięcie nut względem diód",
        shift_notes_for_better_alignment: "Przesuń by wyrównać diody względem klawiszy",
        light_number_means: "Numer diody: 92 i Wyrównanie: 2 oznaczają, że diody od 92 wzwyż będą przesunięte o dwie pozycje w lewo",
        light_number: "Numer diody",
        offset: "Wyrównanie",
        note_offset: "Przesunięcie",

        //songs
        status: "Status",
        start_recording: "Rozpocznij nagrywanie",
        stop_recording: "Zatrzymaj nagrywanie",
        starting: "Rozpoczynanie",
        stop_and_save: "Zatrzymaj i zapisz",
        cancel_recording: "Anuluj nagrywanie",
        canceling: "Anulowanie",
        upload_songs: "Prześlij Nuty",
        drag_and_drop_midi: "Przeciągnij i upuść MIDI",
        or_click_to_choose: "Lub kliknij aby wybrać",
        play_on_piano: "Odtwórz na pianie",
        stop: "Zatrzymaj",
        stop_learning: "Zatrzymaj naukę",
        loop: "Pętla",
        practice: "Ćwiczenia",
        melody:  "Melodia",
        rhytm: "Rytm",
        listen: "Słuchaj",
        tempo:  "Tempo",
        hands: "Ręce",
        both: "Obie",
        right: "Prawa",
        left: "Lewa",
        mute_hands: "Wycisz ręce",
        wrong_notes: "Niepoprawne nuty",
        disabled: "Wyłączone",
        enabled: "Włączone",
        future_notes: "Przyszłe nuty",
        start_point: "Początek",
        set_the_current_track_time: "Ustaw aktualny czas jako początek",
        end_point: "Koniec",
        set_the_current_track_time_as_the_loop_end: "Ustaw aktualny czas jako koniec",
        left_hand_color: "Kolor lewej ręki",
        right_hand_color: "Kolor prawej ręki",
        songs_list: "Lista Nut",
        getting_songs_list: "Ładowanie listy nut",

        //sheetmusic
        load_custom_sheet: "Wczytaj własny zapis nutowy",
        offset_ms: "Przesunięcie (ms)",
        sheet_tip_line_1: "Jeśli automatyczna konwersja nie spełnia oczekiwań możesz wczytać własny zapis nutowy",
        sheet_tip_line_2: "Podświetlona część zapisu nutowego jest tylko szacunkową wskazówką. Użyj narzędzia do zmiany przesunięcia by poprawić synchronizację",
        sheet_tip_line_3: "W celu osiągnięcia najlepszych efektów wykonaj następujące kroki:",
        sheet_tip_line_4: "1. Przekonwertuj zapis nutowy na plik MIDI używając MuseScore lub podobnego programu. Nazwij oba pliki tak samo",
        sheet_tip_line_5: "2. Wczytaj plik MIDI oraz zapis nutowy",

        //songslist
        name: "Tytuł",
        date: "Data",
        action: "Akcja",
        songs_per_page: "Nut na stronę",
        total_songs: "Łącznie nut: ",

        //sequences
        sequence: "Sekwencja",
        active_sequence: "Aktywna sekwencja",
        color: "Kolor",
        next_step: "Następny krok",
        press_spacebar:  "Wciśnij spację",
        add: "Dodaj",
        remove: "Usuń",
        step: "Krok",
        activation_method:  "Metoda aktywacji",
        button_press: "Wciśnięcie przycisku",
        sustain_pedal: "Pedał Sustain",
        portamento_pedal:  "Pedał Portamento",
        sostuneto_pedal: "Pedał Sostuneto",
        soft_pedal: "Pedał Soft",
        next_step_value:  "Wartość następnego kroku",
        next_step_tip_line_1: "Wartość następnego kroku odpowiada za to czy następny krok aktywuje się przy wciśnięciu lub puszczeniu pedała.",
        next_step_tip_line_2: "Dla przykładu: jeśli chcesz zmienić ustawienia po pełnym wciśnięciu prawego pedała ustaw wartość następnego kroku na 126",
        next_step_tip_line_3: "(127 to maksymalna wartość przy wciśniętym pedale)",
        next_step_tip_line_4: "Ustaw wartość na -1, aby zmienić ustawienia za pomocą pedału, w pełni go zwalniając.",
        sequence_name: "Nazwa sekwencji",
        save_current_settings_to_step: "Zapisz ustawienia aktualnego kroku",

        //ports
        for_lighting_leds: "By podświetla klawisze grając ustaw swoje pianino jako aktywny port",
        set_your_synthesia: "Ustaw port Synthesii ucząc się grać",
        active: "Aktywny",
        switch: "Zamień",
        secondary: "Zastępczy port",
        used_for_sound: "Używany przy odtwarzaniu MIDI",
        list_of_ports: "Lista portów i połączeń",
        disconnect_ports: "Rozłącz porty",
        restart_rtp: "Zrestartuj usługę RTP MIDI",
        midi_events: "Wiadomości MIDI",
        show_midi_events: "Pokaż wiadomości MIDI (może obniżyć wydajność)",

        //network
        connected_wifi: "Połączone Wi-Fi",
        disconnect_wifi_and_create_hotspot: "Rozłącz Wi-Fi i utwórz Hotspot",
        disconnecting_warning_line_1: "Rozłączenie z Wi-Fi rozpocznie proces tworzenia Hotspota. Może to zająć kilka minut",
        disconnecting_warning_line_2: "By uzyskać dostęp do interfejsu, należy najpierw połaczyć się z Hotspotem",
        wifi_list: "Lista dostępnych Wi-Fi",

        //ledanimations
        stop_animation: "Zatrzymaj animacje",

        //homepage
        advanced_mode: "Tryb zaawansowany",
        system_cpu_usage: "Użycie procesora przez system",
        ram_usage: "Użycie RAM",
        disk_usage: "Użycie dysku",
        bandwidth_usage: "Wykorzystanie sieci",
        process_cpu_usage: "Użycie procesora przez aplikacje",
        metronome: "Metronom",
        beats_per_measure: "Uderzeń na takt",
        volume: "Głośność",
        color_mode: "Tryb koloru",
        single: "Pojendynczy",
        light_mode: "Tryb świecenia",
        normal: "Normalny",
        brightness: "Jasność",
        backlight_brightness: "Jasność podświetlenia",
        input_port: "Port wejścia",
        playback_port: "Port odtwarzania",
        cover_state: "Stan pokrywy",
        screen: "Ekran",
        reset_settings_to_default: "Przywróć ustawienia domyślne",
        confirm: "Potwierdź",
        restart_rpi: "Zrestartuj RPi",
        restart_visualizer: "Zrestartuj Visualizator",
        power_off: "Wyłącz",
        update_visualizer: "Aktualizuj Visualizator",
        connect_ports: "Połącz Porty",
        clean_led_strip: "Wyczyść taśmę LED",
        logs: "Logi",
        show_last: "Pokaż ostatnie",
        lines: "linii",

        //dynamic content
        incorrect_password: "Jeśli wprowadzone zostało niepoprawne hasło, może minąć kilka minut zanim hotspot zostanie ponownie utworzony." ,
        if_the_hotspot: "Jeśli Hotspot nie pojawi się po 5 minutach, proszę zrestartować urządzenie",
        connect: "Połącz",
    },

    fr: {
        //index
        loading: "Chargement...",
        home: "Accueil",
        led_settings: "Paramètres LED",
        songs: "Chansons",
        sequences: "Séquences",
        ports_settings: "Paramètres des Ports",
        led_animations: "Animations LED",
        wifi: "Wi-Fi",
        switch_ports: "Ports de commutation",
        view_on_github: "Voir sur GitHub",
        join_discord: "Rejoindre le serveur Discord",

        //ledcolor
        led_color: "Couleur LED",
        multicolor: "Multicolore",
        rainbow_colors: "Couleurs d'arc-en-ciel",
        speed: "Vitesse",
        gradient: "Dégradé",
        scale_coloring: "Coloration d'échelle",
        velocity_rainbow: "Arc-en-ciel de vitesse",

        offset:  "Décalage",
        scale: "Échelle",
        timeshift: "Décalage temporel",
        scale_percent: "Échelle %",
        curve_percent: "Courbe %",
        slow_color: "Couleur lente",
        fast_color: "Couleur rapide",
        max_notes: "Notes maximales",
        period_in_seconds: "Période en secondes",
        start: "Début",
        end: "Fin",
        color_for_in_scale: "Couleur pour la gamme",
        color_for_not_in_scale: "Couleur pour hors échelle",
        scale_key: "Clé d'échelle",

        //lightmode
        fading: "Disparition",
        velocity: "Vélocité",
        instant: "Instantané",
        very_fast: "Très rapide",
        fast: "Rapide",
        medium: "Moyenne",
        slow: "Lent",
        very_slow: "Très lent",

        //ledsettings
        backlight: "Rétro-éclairage",
        sides_colors:  "Couleurs latérales",
        off: "Arrêt",
        same_as_led_color: "Identique à la couleur LED",
        rgb: "RGB",
        adjustments: "Ajustements",
        skipped_notes: "Notes ignorées",
        finger_based_ignore: "Doigt basé: ignore les notes avec informations sur quelle main à jouer",
        normal_ignore_all_other: "Normal: ignore toutes les autres notes",
        none: "Aucun",
        finger_based: "Doigt basé",
        reverse: "Inverse",
        inverted: "Inversé",
        shift: "Décalage",
        led_count: "Nombre de LED",
        leds_per_meter: "Leds par mètre",
        led_note_offsets: "Décalages de note LED",
        shift_notes_for_better_alignment: "Décaler les notes pour un meilleur alignement",
        light_number_means: "Numéro de lumière : 92 et Décalage : 2 signifient que les notes après la LED 92 seront déplacées de 2 positions vers la gauche",
        light_number: "Numéro de lumière",
        offset: "Décalage",
        note_offset: "Décalage des notes",

        //songs
        status: "Statut",
        start_recording: "Commencer l'enregistrement",
        starting: "Démarrage",
        stop_and_save: "Arrêtez et Sauvegardez",
        cancel_recording: "Annuler l'enregistrement",
        canceling:  "Annulation",
        upload_songs: "Téléchargez des chansons",
        drag_and_drop_midi: "Déposez le fichier midi ici",
        or_click_to_choose: "ou cliquez pour choisir les fichiers à télécharger",
        play_on_piano: "Jouer au piano",
        stop: "Arrêter",
        stop_learning: "Arrêter d'apprendre",
        loop: "Boucle",
        practice: "Pratique",
        melody: "Mélodie",
        rhytm: "Rythme",
        listen:  "Écoutez",
        tempo:  "Tempo",
        hands: "Mains",
        both: "Les deux",
        right: "Droite",
        left: "Gauche",
        mute_hands: "Mains muettes",
        wrong_notes: "Notes fausses",
        disabled: "Désactivé",
        enabled: "Activé",
        future_notes: "Notes futures",
        start_point: "Point de départ",
        set_the_current_track_time: "Réglez l'heure de la piste actuelle comme début de boucle",
        end_point: "Fin de boucle",
        set_the_current_track_time_as_the_loop_end: "Réglez l'heure de la piste actuelle comme fin de boucle",
        left_hand_color: "Couleur main gauche",
        right_hand_color: "Couleur main droite",
        songs_list: "Liste des chansons",
        getting_songs_list: "Obtenir la liste des chansons",

        //sheetmusic
        load_custom_sheet: "Charger la feuille personnalisée",
        offset_ms: "Décalage (ms)",
        sheet_tip_line_1: "Si la conversion automatique ne répond pas à vos attentes, vous pouvez charger votre propre notation musicale.",
        sheet_tip_line_2: "La partie en surbrillance de la notation musicale est uniquement un indicateur approximatif. Utilisez l'outil de décalage pour améliorer la synchronisation.",
        sheet_tip_line_3: "Pour obtenir le meilleur résultat, faites ce qui suit :",
        sheet_tip_line_4: "1. Convertissez votre notation musicale en un fichier midi en utilisant Musescore ou un programme similaire, nommez-le comme le fichier midi que vous souhaitez charger. (ex: ma_musique.mid et ma_musique.xml)",
        sheet_tip_line_5: "2. Téléchargez le fichier midi et le fichier de notation musicale.",

        //songslist
        name: "Nom",
        date: "Date",
        action: "Action",
        songs_per_page: "Chansons par page",
        total_songs: "Total des chansons: ",

        //sequences
        sequence: "Séquence",
        active_sequence: "Séquence active",
        color: "Couleur",
        next_step: "Prochaine étape",
        press_spacebar:  "Appuyez sur espace",
        add: "Ajouter",
        remove: "Retirer",
        step: "Étape",
        activation_method:  "Méthode d'activation",
        button_press: "Appui sur bouton",
        sustain_pedal: "Pédale de sustain",
        portamento_pedal:  "Pédale de portamento",
        sostuneto_pedal: "Pédale de sostenuto",
        soft_pedal: "Pédale douce",
        next_step_value:  "Valeur de l'étape suivante",
        next_step_tip_line_1: "Cette valeur détermine si l'étape suivante est activée lorsque vous appuyez ou relâchez la pédale.",
        next_step_tip_line_2: "Par exemple, si vous souhaitez changer les paramètres après avoir complètement appuyé sur la pédale Sostenuto, vous devez le définir à 126",
        next_step_tip_line_3: "(127 est la valeur maximale lorsque la pédale est complètement enfoncée).",
        next_step_tip_line_4: "Réglez la valeur à -1 pour changer les paramètres en relâchant complètement la pédale.",
        sequence_name: "Nom de la séquence",
        save_current_settings_to_step: "Enregistrer les paramètres actuels à l'étape",

        //ports
        for_lighting_leds: "Pour éclairer les LED avec votre clavier, définissez votre port de piano comme entrée active.",
        set_your_synthesia: "Définissez votre port Synthesia pour le mode d'apprentissage.",
        active: "Actif",
        switch: "Switch",
        secondary: "Secondaire",
        used_for_sound: "Utilisé pour le son lors de la lecture d'un fichier midi.",
        list_of_ports: "Liste des ports et connexions",
        disconnect_ports: "Déconnecter les ports",
        restart_rtp: "Redémarrez le service RTP MIDI",
        midi_events: "Événements MIDI",
        show_midi_events: "Afficher les événements midi (peut dégrader les performances)",

        //network
        connected_wifi: "Wi-Fi connecté",
        disconnect_wifi_and_create_hotspot: "Déconnecter le Wi-Fi et créer un hotspot",
        disconnecting_warning_line_1: "La déconnexion du Wi-Fi commencera le processus de création d'un hotspot. Cela peut prendre un moment.",
        disconnecting_warning_line_2: "Vous devrez vous connecter au nouveau hotspot créé pour accéder à nouveau à l'interface Web.",
        wifi_list: "Liste Wi-Fi",

        //ledanimations
        stop_animation: "Arrêter l'animation",


        //homepage
        advanced_mode: "Mode avancé",
        system_cpu_usage: "Utilisation du CPU du système",
        ram_usage: "Utilisation de la RAM",
        disk_usage: "Utilisation du disque",
        bandwidth_usage: "Utilisation de la bande passante",
        process_cpu_usage: "Utilisation du CPU par le processus",
        metronome: "Métronome",
        beats_per_measure: "Bats par mesure",
        volume: "Volume",
        color_mode: "Mode couleur",
        single: "Unique",
        light_mode: "Mode lumière",
        normal: "Normal",
        brightness: "Luminosité",
        backlight_brightness: "Luminosité du rétro-éclairage",
        input_port: "Port d'entrée",
        playback_port: "Port de lecture",
        cover_state: "État de la couverture",
        screen: "Écran",
        reset_settings_to_default: "Réinitialiser les paramètres par défaut",
        confirm: "Confirmer",
        restart_rpi: "Redémarrer RPi",
        restart_visualizer: "Redémarrer le visualiseur",
        power_off: "Éteindre",
        update_visualizer: "Mettre à jour le visualiseur",
        connect_ports: "Connecter les ports",
        clean_led_strip: "Nettoyer la bande LED",
        logs: "Logs",
        show_last: "Voir dernier",
        lines: "lignes",


        //dynamic content
        incorrect_password: "Si un mot de passe incorrect est entré, il peut falloir quelques minutes pour que le hotspot soit rétabli.",
        if_the_hotspot: "Si le hotspot n'apparaît pas après 5 minutes, veuillez redémarrer l'appareil",
        connect: "Connecter",
    },

    de: {
        //index
        loading: "Lädt...",
        home: "Startseite",
        led_settings: "LED Einstellungen",
        songs: "Songs",
        sequences: "Sequenzen",
        ports_settings: "Port Einstellungen",
        led_animations: "LED Animationen",
        wifi: "Wi-Fi",
        switch_ports: "Ports wechseln",
        view_on_github: "Auf GitHub ansehen",
        join_discord: "Discord-Server beitreten",

        //ledcolor
        led_color: "LED Farbe",
        multicolor: "Mehrfarbig",
        rainbow_colors: "Regenbogen Farben",
        speed: "Geschwindigkeit",
        gradient: "Verlauf",
        scale_coloring: "Skalenfärbung",
        velocity_rainbow: "Velocity-Regenbogen",

        offset:  "Versatz",
        scale: "Skala",
        timeshift: "Zeitverschiebung",
        scale_percent: "Skala %",
        curve_percent: "Kurve %",
        slow_color: "Langsame Farbe",
        fast_color: "Schnelle Farbe",
        max_notes: "Maximal Noten",
        period_in_seconds: "Zeitraum in Sekunden",
        start: "Start",
        end: "Ende",
        color_for_in_scale: "Farbe für skaliert",
        color_for_not_in_scale: "Farbe für nicht skaliert",
        scale_key: "Tonschlüssel",

        //lightmode
        fading: "Verblassen",
        velocity: "Geschwindigkeit",
        instant: "Sofort",
        very_fast: "Sehr schnell",
        fast: "Schnell",
        medium: "Mittel",
        slow: "Langsam",
        very_slow: "Sehr langsam",

        //ledsettings
        backlight: "Hintergrundbeleuchtung",
        sides_colors:  "Seitenfarben",
        off: "Aus",
        same_as_led_color: "Selbe wie LED Farbe",
        rgb: "RGB",
        adjustments: "Anpassungen",
        skipped_notes: "Übersprungene Noten",
        finger_based_ignore: "Fingerverweise ignorieren",
        normal_ignore_all_other: "Normal: Alle anderen ignorieren",
        none: "Keine",
        finger_based: "Fingerbasierend",
        reverse: "Umkehren",
        inverted: "Invertiert",
        shift: "Verschieben",
        led_count: "LED Anzahl",
        leds_per_meter: "LEDs pro Meter",
        led_note_offsets: "LED-Notenversatz",
        shift_notes_for_better_alignment: "Noten verschieben für bessere Ausrichtung",
        light_number_means: "Lichtnummer: 92 und Versatz: 2 bedeutet, dass Noten nach LED 92 um 2 Positionen nach links verschoben werden",
        light_number: "Lichtnummer",
        offset: "Versatz",
        note_offset: "Notenversatz",

        //songs
        status: "Status",
        start_recording: "Aufnahme starten",
        starting: "Startet",
        stop_and_save: "Stoppen und Speichern",
        cancel_recording: "Aufnahme abbrechen",
        canceling:  "Wird abgebrochen",
        upload_songs: "Songs hochladen",
        drag_and_drop_midi: "Ziehen und Ablegen von Midi-Datei(en) hier möglich",
        or_click_to_choose: "oder klicke zum Hochladen der Datei(en)",
        play_on_piano: "Auf Klavier spielen",
        stop: "Stoppen",
        stop_learning: "Lernen stoppen",
        loop: "Schleife",
        practice: "Übung",
        melody: "Melodie",
        rhytm: "Rhythmus",
        listen:  "Hören",
        tempo:  "Tempo",
        hands: "Hände",
        both: "Beide",
        right: "Rechte",
        left: "Linke",
        mute_hands: "Hände stummschalten",
        wrong_notes: "Falsche Noten",
        disabled: "Deaktiviert",
        enabled: "Aktiviert",
        future_notes: "Zukünftige Noten",
        start_point: "Startpunkt",
        set_the_current_track_time: "Setze die aktuelle Track-Zeit als Start der Schleife",
        end_point: "Endpunkt",
        set_the_current_track_time_as_the_loop_end: "Setze die aktuelle Track-Zeit als Ende der Schleife",
        left_hand_color: "Farbe linke Hand",
        right_hand_color: "Farbe rechte Hand",
        songs_list: "Songs Liste",
        getting_songs_list: "Songliste bekommen",

        //sheetmusic
        load_custom_sheet: "Benutzerdefinierte Partitur laden",
        offset_ms: "Versatz (ms)",
        sheet_tip_line_1: "Wenn die automatische Konvertierung nicht Ihren Erwartungen entspricht, können Sie Ihre eigene Notenschrift laden.",
        sheet_tip_line_2: "Der hervorgehobene Teil der Musiknotation ist nur ein ungefährer Anhaltspunkt. Verwenden Sie das Offset-Tool, um die Synchronisation zu verbessern.",
        sheet_tip_line_3: "Für das beste Ergebnis machen Sie folgendes:",
        sheet_tip_line_4: "1. Konvertieren Sie Ihre Musiknotation in eine Midi-Datei mit Musescore oder einem ähnlichen Programm, nennen Sie es gleich wie die Midi-Datei, die Sie laden wollen. (z.B. meine_musik.mid und meine_musik.xml)",
        sheet_tip_line_5: "2. Laden Sie die Midi-Datei und die Musiknotationsdatei hoch.",

        //songslist
        name: "Name",
        date: "Datum",
        action: "Action",
        songs_per_page: "Songs pro Seite",
        total_songs: "Total Songs: ",

        //sequences
        sequence: "Sequenz",
        active_sequence: "Aktive Sequenz",
        color: "Farbe",
        next_step: "Nächster Schritt",
        press_spacebar:  "Leertaste drücken",
        add: "Hinzufügen",
        remove: "Entfernen",
        step: "Schritt",
        activation_method:  "Aktivierungsmethode",
        button_press: "Tastendruck",
        sustain_pedal: "Sustain Pedal",
        portamento_pedal:  "Portamento Pedal",
        sostuneto_pedal: "Sostuneto Pedal",
        soft_pedal: "Weiches Pedal",
        next_step_value:  "Nächster Schrittwert",
        next_step_tip_line_1: "Dieser Wert entscheidet, ob der nächste Schritt aktiviert wird, wenn Sie das Pedal drücken oder loslassen.",
        next_step_tip_line_2: "Zum Beispiel, wenn Sie die Einstellungen ändern möchten, nachdem Sie das Sostenuto-Pedal vollständig gedrückt haben, sollten Sie es auf 126 setzen",
        next_step_tip_line_3: "(127 ist der maximale Wert, wenn das Pedal vollständig gedrückt ist).",
        next_step_tip_line_4: "Stellen Sie den Wert auf -1, um die Einstellungen zu ändern, indem Sie das Pedal vollständig loslassen.",
        sequence_name: "Sequenzname",
        save_current_settings_to_step: "Aktuelle Einstellungen in Schritt speichern",

        //ports
        for_lighting_leds: "Um die LEDs mit Ihrer Tastatur zu beleuchten, stellen Sie Ihren Klavierport als aktiven Eingang ein.",
        set_your_synthesia: "Stellen Sie Ihren Synthesia-Port für den Lernmodus ein.",
        active: "Aktiv",
        switch: "Wechseln",
        secondary: "Sekundär",
        used_for_sound: "Wird für den Klang beim Abspielen einer MIDI-Datei verwendet.",
        list_of_ports: "Liste von Ports und Verbindungen",
        disconnect_ports: "Ports trennen",
        restart_rtp: "RTP MIDI Service neu starten",
        midi_events: "MIDI-Events",
        show_midi_events: "MIDI-Events anzeigen (kann die Leistung beeinträchtigen)",

        //network
        connected_wifi: "Verbundenes Wi-Fi",
        disconnect_wifi_and_create_hotspot: "Wi-Fi trennen und Hotspot erstellen",
        disconnecting_warning_line_1: "Das Trennen des Wi-Fi startet den Prozess zum Erstellen eines Hotspots. Das kann eine Weile dauern.",
        disconnecting_warning_line_2: "Sie müssen sich mit dem neu erstellten Hotspot verbinden, um wieder auf die Weboberfläche zugreifen zu können.",
        wifi_list: "Wi-Fi-Liste",

        //ledanimations
        stop_animation: "Animation stoppen",

        //homepage
        advanced_mode: "Erweiterter Modus",
        system_cpu_usage: "Verwendung der System-CPU",
        ram_usage: "Ram-Verwendung",
        disk_usage: "Festplattenverbrauch",
        bandwidth_usage: "Bandbreitennutzung",
        process_cpu_usage: "Verwendung der Prozess-CPU",
        metronome: "Metronom",
        beats_per_measure: "Schläge pro Maß",
        volume: "Lautstärke",
        color_mode: "Farbmodus",
        single: "Einzel",
        light_mode: "Lichtmodus",
        normal: "Normal",
        brightness: "Helligkeit",
        backlight_brightness: "Hintergrundbeleuchtung Helligkeit",
        input_port: "Eingangsport",
        playback_port: "Wiedergabe Port",
        cover_state: "Abdeckungszustand",
        screen: "Bildschirm",
        reset_settings_to_default: "Einstellungen auf Default zurücksetzen",
        confirm: "Bestätigen",
        restart_rpi: "RPi neu starten",
        restart_visualizer: "Visualizer neu starten",
        power_off: "Ausschalten",
        update_visualizer: "Visualizer aktualisieren",
        connect_ports: "Ports verbinden",
        clean_led_strip: "LED-Streifen säubern",
        logs: "Logs",
        show_last: "Letzte anzeigen",
        lines: "Linien",


        //dynamic content
        incorrect_password: "Wenn ein falsches Passwort eingegeben wird, kann es einige Minuten dauern, bis der Hotspot wieder hergestellt ist.",
        if_the_hotspot: "Wenn der Hotspot nach 5 Minuten nicht erscheint, starten Sie bitte das Gerät neu",
        connect: "Verbinden",
    },
};