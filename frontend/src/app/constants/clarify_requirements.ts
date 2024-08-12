export const CLARIFY_REQUIREMENTS: { [key: string]: { [key: string]: Array<string> } } = {
    "en": {
        "headings": ["Step 1: Clarify Requirements", "Functional Requirements:",
            "Non-functional Requirements:"],
        "funcReqQuestions": ["What are the core features that the system should support?",
            "Are there any particular features that are more critical than others?",
            "Who will use this system (customers, internal teams etc..)?",
            "What specific actions should users be able to perform on the system?",
            "How will users interact with the system (web, mobile app, API, etc.)?",
            "Does the system need to support multiple languages or locales?",
            "What are the key data types the system must handle (text, images, structured data, etc)?",
            "Are there any external systems or third-party services the system needs to integrate with?"],
        "nonFuncReqQuestions": [
            "What is the expected scale of the system in terms of users and requests?",
            "How much data volume is expected to be handled by the system?",
            "What are the inputs and outputs of the system?",
            "What is the expected read-to-write ratio?",
            "Can the system have some downtime, or does it need to be highly available?",
            "Are there any specific latency requirements?",
            "How critical is data consistency? Can some eventual consistency be tolerated for the sake of availability?",
            "Are there any specific non-functional requirements (performance, scalability, reliability) we should focus on?"
        ]
    },

    "ua": {
        "headings": ["Крок 1: Уточнення вимог", "Функціональні Вимоги:",
            "Нефункціональні Вимоги:"],
        "funcReqQuestions": [
            "Які основні функції має підтримувати система?", 
            "Чи є якісь особливості, які важливіші за інші?", 
            "Хто буде використовувати цю систему (клієнти, внутрішні команди тощо)?",
            "Які конкретні дії користувачі повинні мати можливість виконувати в системі?",
            "Як користувачі взаємодіятимуть із системою (веб, мобільний додаток, API тощо)?", 
            "Чи потрібна системі підтримка кількох мов чи локалей?", 
            "Які ключові типи даних має обробляти система (текст, зображення, структуровані дані тощо)?", 
            "Чи є якісь зовнішні системи або сторонні служби, з якими система повинна інтегруватися?"
        ],
        "nonFuncReqQuestions": [
            "Який очікуваний масштаб системи з точки зору користувачів і запитів?",
            "Скільки обсяг даних очікується для обробки системою?",
            "Які входи та виходи системи?",
            "Яке очікуване співвідношення читання-запису?",
            "Чи може система мати деякий час простою, чи вона повинна бути високодоступною?",
            "Чи існують якісь особливі вимоги до затримки?",
            "Наскільки важливою є узгодженість даних? Чи можна допускати певну узгодженість заради доступності?",
            "Чи є якісь особливі нефункціональні вимоги (продуктивність, масштабованість, надійність), на які нам слід зосередитися?"
        ]
    }
}