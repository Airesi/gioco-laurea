// =========================================================
// MODIFICA IL MENU QUI. Non serve toccare HTML o CSS.
// price: numero = prezzo in E¢ | 0 = GRATIS
// premium: true mette in evidenza la voce.
// available: false nasconde temporaneamente la voce.
// =========================================================
window.MENU = [
  {
    id: "cocktail",
    label: "Cocktail",
    kicker: "Investimenti ad alto rischio",
    items: [
      { name: "Acqua", description: "Sorprendentemente gratis.", price: 0 },
      { name: "Coca-Cola & analcolici", description: "Gratis. La Banca incoraggia almeno alcune decisioni responsabili.", price: 0 },
      { name: "Birra", description: "Economicamente sostenibile. Almeno questa.", price: 5 },
      { name: "Shottino", description: "Piccolo investimento. Conseguenze potenzialmente sproporzionate.", price: 10 },
      { name: "Spritz", description: "Il classico. Una scelta quasi responsabile.", price: 20 },
      { name: "Gin Tonic", description: "Gin, tonica e un ottimismo non supportato dai fatti.", price: 30 },
      { name: "Cuba Libre", description: "Rum, Coca-Cola e libertà finanziaria temporanea.", price: 30 },
      { name: "Caipirinha", description: "Cachaça, lime, zucchero. Deliberatamente costosa.", note: "Disponibile solo dalle 19:00 alle 20:00.", price: 50, premium: true, badge: "SCELTA FINANZIARIAMENTE IRRESPONSABILE" }
    ]
  },
  {
    id: "buffet",
    label: "Buffet libero",
    kicker: "Perché il capitalismo ha dei limiti",
    items: [
      { name: "Mini Causas", description: "Un omaggio all’anima peruviana di Martin, in formato buffet.", price: 0 },
      { name: "Mini empanadas", description: "Perché l’anima peruviana di Martin non poteva fermarsi alle causas.", price: 0 },
      { name: "Pizza & pizzette", description: "Il pilastro costituzionale di ogni buffet.", price: 0 },
      { name: "Panini al latte ripieni", description: "Morbidi, ripieni e senza conseguenze economiche.", price: 0 },
      { name: "Cous cous", description: "Preparato per prevenire il collasso.", price: 0 },
      { name: "Torte salate", description: "Due varietà. Il mercato non decide tutto.", price: 0 },
      { name: "Riso freddo / pasta fredda", description: "A seconda di come ci gira il giorno prima. Pianificazione strategica.", price: 0 },
      { name: "Snack", description: "Capitale circolante.", price: 0 }
    ]
  },
  {
    id: "premium",
    label: "Extra",
    kicker: "Il lusso ha un prezzo",
    items: [
      { name: "Kebab on demand", description: "Un kebab vero. Ordinato appositamente per te.", price: 100, premium: true, badge: "OPERAZIONE STRAORDINARIA" }
    ]
  }
];