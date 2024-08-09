const TRANSLATIONS = {
  common: {
    "workspaces-name": "Workspace Name",
    error: "Fehler",
    success: "Erfolg",
    user: "Benutzer",
    selection: "Modellauswahl",
    saving: "Speichern...",
    save: "Änderungen Speichern",
    previous: "Vorherige Seite",
    next: "Nächste Seite",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "Instanzeinstellungen",
    system: "Allgemeine Einstellungen",
    invites: "Einladungen",
    users: "Benutzer",
    workspaces: "Workspaces",
    "workspace-chats": "Workspace Chats",
    customization: "Anpassungen",
    "api-keys": "Entwickler-API",
    llm: "LLM",
    transcription: "Transkription",
    embedder: "Embedder",
    "text-splitting": "Text Splitter & Chunking",
    "voice-speech": "Stimme & Sprache",
    "vector-database": "Vektordatenbank",
    embeds: "Chateinbettung",
    "embed-chats": "Chateinbettungsverlauf",
    security: "Sicherheit",
    "event-logs": "Ereignisprotokoll",
    privacy: "Privatsphäre & Daten",
    "ai-providers": "AI Provider",
    "agent-skills": "Agent fähigkeiten",
    admin: "Admin",
    tools: "Tools",
    "experimental-features": "Experimentelle Features",
    contact: "Support kontaktieren",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "Willkommen zu",
      "placeholder-username": "Benutzer",
      "placeholder-password": "Passwort",
      login: "Anmelden",
      validating: "Überprüfen...",
      "forgot-pass": "Passwort vergessen",
      reset: "Zurücksetzen",
    },
    "sign-in": {
      start: "In Ihrem Account",
      end: "anmelden",
    },
    "password-reset": {
      title: "Passwort Zurücksetzen",
      description:
        "Gib die notwendingen Informationen an, um das Passwort zurückzusetzen.",
      "recovery-codes": "Recovery Codes",
      "recovery-code": "Recovery Code {{index}}",
      "back-to-login": "Zurück zur Anmeldung",
    },
  },

  welcomeMessage: {
    part1:
      "Welcome to AnythingLLM, AnythingLLM is an open-source AI tool by Mintplex Labs that turns anything into a trained chatbot you can query and chat with. AnythingLLM is a BYOK (bring-your-own-keys) software so there is no subscription, fee, or charges for this software outside of the services you want to use with it.",
    part2:
      "AnythingLLM is the easiest way to put powerful AI products like OpenAi, GPT-4, LangChain, PineconeDB, ChromaDB, and other services together in a neat package with no fuss to increase your productivity by 100x.",
    part3:
      "AnythingLLM can run totally locally on your machine with little overhead you wont even notice it's there! No GPU needed. Cloud and on-premises installation is available as well.\nThe AI tooling ecosystem gets more powerful everyday. AnythingLLM makes it easy to use.",
    githubIssue: "Create an issue on Github",
    user1: "How do I get started?!",
    part4:
      "It's simple. All collections are organized into buckets we call \"Workspaces\". Workspaces are buckets of files, documents, images, PDFs, and other files which will be transformed into something LLM's can understand and use in conversation.\n\nYou can add and remove files at anytime.",
    createWorkspace: "Create your first workspace",
    user2:
      "Is this like an AI dropbox or something? What about chatting? It is a chatbot isn't it?",
    part5:
      "AnythingLLM is more than a smarter Dropbox.\n\nAnythingLLM offers two ways of talking with your data:\n\n<i>Query:</i> Your chats will return data or inferences found with the documents in your workspace it has access to. Adding more documents to the Workspace make it smarter! \n\n<i>Conversational:</i> Your documents + your on-going chat history both contribute to the LLM knowledge at the same time. Great for appending real-time text-based info or corrections and misunderstandings the LLM might have. \n\nYou can toggle between either mode \n<i>in the middle of chatting!</i>",
    user3: "Wow, this sounds amazing, let me try it out already!",
    part6: "Have Fun!",
    starOnGithub: "Star on GitHub",
    contact: "Mintplex Labs kontaktieren",
  },

  "new-workspace": {
    title: "Neuer Workspace",
    placeholder: "Mein Workspace",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "Allgemeine Einstellungen",
    chat: "Chateinstellungen",
    vector: "Vektordatenbank",
    members: "Mitglieder",
    agent: "Agenteneinstellungen",
  },

  // General Appearance
  general: {
    vector: {
      title: "Vektorzahl",
      description: "Gesamtzahl der Vektoren in Ihrer Datenbank.",
    },
    names: {
      description: "Dies ändert nur den Anzeigenamen des Workspace",
    },
    message: {
      title: "Vorgeschlagene Chatnachrichten",
      description:
        "Passen Sie die Nachrichten an, die Benutzern in Ihrem Workspace vorgeschlagen werden.",
      add: "Neue Nachricht hinzufügen",
      save: "Nachrichten speichern",
      heading: "Erkläre mir",
      body: "die Vorteile von AnythingLLM",
    },
    pfp: {
      title: "Profilbild Assistent",
      description:
        "Passe das Profilbild des Workspaceassistenten an.",
      image: "Workspace Bild",
      remove: "Workspacebild entfernen",
    },
    delete: {
      title: "Workspace löschen",
      description:
        "Den Workspace und seine Daten löschen. Dies löscht den Workspace für alle Benutzer.",
      delete: "Workspace löschen",
      deleting: "Workspace wird gelöscht...",
      "confirm-start": "Sie sind davor, den gesamten Workspace zu löschen.",
      "confirm-end":
        "Dies löscht alle eingebetteten Vektoren in der Datenbank.\n\nDie Originaldateien bleiben unberührt. Dies kann nicht Rückgängig gemacht werden.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "Workspace LLM Provider",
      description:
        "Der LLM-Provider und das Modell, die für den Workspace verwendet werden. Standardmäßig wird der Systemprovider und -einstellungen verwendet",
      search: "LLM-Provider auswählen",
    },
    model: {
      title: "Workspace Chatmodell",
      description:
        "Das spezifische Chatmodell, das für den Workspace verwendet wird. Wenn leer wird das Systemmodell verwendet",
      wait: "-- warten auf Modelle --",
    },
    mode: {
      title: "Chatmodus",
      chat: {
        title: "Chat",
        "desc-start": "Antwortet mit dem allgemeinen Wissen des LLM",
        and: "und",
        "desc-end": "gefundenem Dokumentenkontext.",
      },
      query: {
        title: "Suche",
        "desc-start": "gibt Antworten",
        only: "nur",
        "desc-end": "wenn es einen Dokumentenkontext gibt.",
      },
    },
    history: {
      title: "Chatverlauf",
      "desc-start":
        "Die Anzahl der vorherigen Chats, die für das Kurzzeitgedächtnis der Antworten verwendet wird",
      recommend: "Empfohlen: 20. ",
      "desc-end":
        "Alles über 45 kann, abhängig von der Nachrichtengröße, mit hoher Wahrscheinlichkeit zu wiederholten Chatfehlern führen."
    },
    prompt: {
      title: "Prompt",
      description:
        "Der Prompt, der für diesen Workspace verwendet wird. Definiert den Kontext und die Anweisungen für die KI um Antworten zu generieren. Dieser sollte sorgfältig vorbereitet werden, damit die KI relevante und genaue Antworten generieren kann",
    },
    refusal: {
      title: "Antwort bei Ablehnung des Suchmodus",
      "desc-start": "Wenn im",
      query: "Such",
      "desc-end":
        "Modus kann es sinnvoll sein, eine individuelle Ablehnungsantwort zu geben, wenn kein Kontext gefunden wurde",
    },
    temperature: {
      title: "LLM Temperatur",
      "desc-start":
        'Diese Einstellung steuert, wie "kreativ" das LLM antwortet',
      "desc-end":
        "Je höher die Zahl, desto kreativer. Bei manchen Modellen können zu hohe Zahlen zu unverständlichen Antworten führen",
      hint: "Die meisten LLMs haben verschiedene gültige Bereiche. Lassen Sie sich von ihrem LLM-Provider beraten.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "Vektordatenbankkennung",
    snippets: {
      title: "Max Context Schnipsel",
      description:
        "Diese Einstellung steuert die maximale anzahl von Context-Schnipseln die pro Anfrage ans LLM geschickt werden",
      recommend: "Empfohlen: 4",
    },
    doc: {
      title: "Dokumentenähnlichkeitsgrenze",
      description:
        "Der niedrigste Ähnlichkeitswert, der benötigt wird, dass eine Quelle als zum Chat passend gewertet wird. Je höher die Zahl, desto ähnlicher muss die Quelle zum Chat sein.",
      zero: "Keine Einschränkungen",
      low: "Niedrig (Ähnlichkeitswert ≥ .25)",
      medium: "Mittel (Ähnlichkeitswert ≥ .50)",
      high: "Hoch (Ähnlichkeitswert ≥ .75)",
    },
    reset: {
      reset: "Vektordatenbank zurücksetzen",
      resetting: "Lösche vektoren...",
      confirm:
        "Sie sind davor, die Vektordatenbank des Workspace zu löschen. Dies löscht alle aktuellen Vektoreinbettungen.\n\nDie Originaldateien sind nicht betroffen. Diese Aktion kann nicht rückgängig gemacht werden",
      error: "Die Vektordatenbank des Workspace konnte nicht zurückgesetzt werden!",
      success: "Vektordatenbank des Workspace zurückgesetzt!",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "Performance of LLMs that do not explicitly support tool-calling is highly dependent on the model's capabilities and accuracy. Some abilities may be limited or non-functional.",
    provider: {
      title: "Workspace Agent LLM Provider",
      description:
        "The specific LLM provider & model that will be used for this workspace's @agent agent.",
    },
    mode: {
      chat: {
        title: "Workspace Agent Chat model",
        description:
          "The specific chat model that will be used for this workspace's @agent agent.",
      },
      title: "Workspace Agent model",
      description:
        "The specific LLM model that will be used for this workspace's @agent agent.",
      wait: "-- waiting for models --",
    },

    skill: {
      title: "Default agent skills",
      description:
        "Improve the natural abilities of the default agent with these pre-built skills. This set up applies to all workspaces.",
      rag: {
        title: "RAG & long-term memory",
        description:
          'Allow the agent to leverage your local documents to answer a query or ask the agent to "remember" pieces of content for long-term memory retrieval.',
      },
      view: {
        title: "View & summarize documents",
        description:
          "Allow the agent to list and summarize the content of workspace files currently embedded.",
      },
      scrape: {
        title: "Scrape websites",
        description:
          "Allow the agent to visit and scrape the content of websites.",
      },
      generate: {
        title: "Generate charts",
        description:
          "Enable the default agent to generate various types of charts from data provided or given in chat.",
      },
      save: {
        title: "Generate & save files to browser",
        description:
          "Enable the default agent to generate and write to files that save and can be downloaded in your browser.",
      },
      web: {
        title: "Live web search and browsing",
        "desc-start":
          "Enable your agent to search the web to answer your questions by connecting to a web-search (SERP) provider.",
        "desc-end":
          "Web search during agent sessions will not work until this is set up.",
      },
    },
  },

  // Workspace Chats
  recorded: {
    title: "Workspace Chats",
    description:
      "These are all the recorded chats and messages that have been sent by users ordered by their creation date.",
    export: "Export",
    table: {
      id: "Id",
      by: "Sent By",
      workspace: "Workspace",
      prompt: "Prompt",
      response: "Response",
      at: "Sent At",
    },
  },

  // Appearance
  appearance: {
    title: "Appearance",
    description: "Customize the appearance settings of your platform.",
    logo: {
      title: "Customize Logo",
      description: "Upload your custom logo to make your chatbot yours.",
      add: "Add a custom logo",
      recommended: "Recommended size: 800 x 200",
      remove: "Remove",
      replace: "Replace",
    },
    message: {
      title: "Customize Messages",
      description: "Customize the automatic messages displayed to your users.",
      new: "New",
      system: "system",
      user: "user",
      message: "message",
      assistant: "AnythingLLM Chat Assistant",
      "double-click": "Double click to edit...",
      save: "Save Messages",
    },
    icons: {
      title: "Custom Footer Icons",
      description:
        "Customize the footer icons displayed on the bottom of the sidebar.",
      icon: "Icon",
      link: "Link",
    },
  },

  // API Keys
  api: {
    title: "API Keys",
    description:
      "API keys allow the holder to programmatically access and manage this AnythingLLM instance.",
    link: "Read the API documentation",
    generate: "Generate New API Key",
    table: {
      key: "API Key",
      by: "Created By",
      created: "Created",
    },
  },

  llm: {
    title: "LLM Preference",
    description:
      "These are the credentials and settings for your preferred LLM chat & embedding provider. Its important these keys are current and correct or else AnythingLLM will not function properly.",
    provider: "LLM Provider",
  },

  transcription: {
    title: "Transcription Model Preference",
    description:
      "These are the credentials and settings for your preferred transcription model provider. Its important these keys are current and correct or else media files and audio will not transcribe.",
    provider: "Transcription Provider",
    "warn-start":
      "Using the local whisper model on machines with limited RAM or CPU can stall AnythingLLM when processing media files.",
    "warn-recommend":
      "We recommend at least 2GB of RAM and upload files <10Mb.",
    "warn-end":
      "The built-in model will automatically download on the first use.",
  },

  embedding: {
    title: "Embedding Preference",
    "desc-start":
      "When using an LLM that does not natively support an embedding engine - you may need to additionally specify credentials to for embedding text.",
    "desc-end":
      "Embedding is the process of turning text into vectors. These credentials are required to turn your files and prompts into a format which AnythingLLM can use to process.",
    provider: {
      title: "Embedding Provider",
      description:
        "There is no set up required when using AnythingLLM's native embedding engine.",
    },
  },

  text: {
    title: "Text splitting & Chunking Preferences",
    "desc-start":
      "Sometimes, you may want to change the default way that new documents are split and chunked before being inserted into your vector database.",
    "desc-end":
      "You should only modify this setting if you understand how text splitting works and it's side effects.",
    "warn-start": "Changes here will only apply to",
    "warn-center": "newly embedded documents",
    "warn-end": ", not existing documents.",
    size: {
      title: "Text Chunk Size",
      description:
        "This is the maximum length of characters that can be present in a single vector.",
      recommend: "Embed model maximum length is",
    },

    overlap: {
      title: "Text Chunk Overlap",
      description:
        "This is the maximum overlap of characters that occurs during chunking between two adjacent text chunks.",
    },
  },

  // Vector Database
  vector: {
    title: "Vector Database",
    description:
      "These are the credentials and settings for how your AnythingLLM instance will function. It's important these keys are current and correct.",
    provider: {
      title: "Vector Database Provider",
      description: "There is no configuration needed for LanceDB.",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "Embeddable Chat Widgets",
    description:
      "Embeddable chat widgets are public facing chat interfaces that are tied to a single workspace. These allow you to build workspaces that then you can publish to the world.",
    create: "Create embed",
    table: {
      workspace: "Workspace",
      chats: "Sent Chats",
      Active: "Active Domains",
    },
  },

  "embed-chats": {
    title: "Embed Chats",
    description:
      "These are all the recorded chats and messages from any embed that you have published.",
    table: {
      embed: "Embed",
      sender: "Sender",
      message: "Message",
      response: "Response",
      at: "Sent At",
    },
  },

  multi: {
    title: "Multi-User Mode",
    description:
      "Set up your instance to support your team by activating Multi-User Mode.",
    enable: {
      "is-enable": "Multi-User Mode is Enabled",
      enable: "Enable Multi-User Mode",
      description:
        "By default, you will be the only admin. As an admin you will need to create accounts for all new users or admins. Do not lose your password as only an Admin user can reset passwords.",
      username: "Admin account username",
      password: "Admin account password",
    },
    password: {
      title: "Password Protection",
      description:
        "Protect your AnythingLLM instance with a password. If you forget this there is no recovery method so ensure you save this password.",
    },
    instance: {
      title: "Password Protect Instance",
      description:
        "By default, you will be the only admin. As an admin you will need to create accounts for all new users or admins. Do not lose your password as only an Admin user can reset passwords.",
      password: "Instance password",
    },
  },

  // Event Logs
  event: {
    title: "Event Logs",
    description:
      "View all actions and events happening on this instance for monitoring.",
    clear: "Clear Event Logs",
    table: {
      type: "Event Type",
      user: "User",
      occurred: "Occurred At",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "Privacy & Data-Handling",
    description:
      "This is your configuration for how connected third party providers and AnythingLLM handle your data.",
    llm: "LLM Selection",
    embedding: "Embedding Preference",
    vector: "Vector Database",
    anonymous: "Anonymous Telemetry Enabled",
  },
};

export default TRANSLATIONS;
