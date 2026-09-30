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
      { name: "Spritz", description: "Il classico. Una scelta quasi responsabile.", price: 20 },
      { name: "Gin Tonic", description: "Gin, tonica e un ottimismo non supportato dai fatti.", price: 30 },
      { name: "Cuba Libre", description: "Rum, Coca-Cola e libertà finanziaria temporanea.", price: 30 },
      { name: "Caipirinha", description: "Cachaça, lime, zucchero. Disponibile solo dalle 19:00 alle 20:00.", price: 50, premium: true, badge: "SOLO 19:00–20:00" }
    ]
  },
  {
    id: "buffet",
    label: "Buffet libero",
    kicker: "Perché il capitalismo ha dei limiti",
    items: [
      { name: "Mini empanadas", description: "Finché ce n'è.", price: 0 },
      { name: "Pizza", description: "A quadrotti, come ogni buffet che si rispetti.", price: 0 },
      { name: "Mini Causa", description: "Piccole, pericolosamente facili da far sparire.", price: 0 },
      { name: "Panini al latte ripieni", description: "Morbidi, ripieni e senza conseguenze economiche.", price: 0 },
      { name: "Pizzette", description: "Il pilastro costituzionale di ogni buffet.", price: 0 },
      { name: "Cous cous", description: "Vegetariano e preparato per prevenire il collasso.", price: 0 },
      { name: "Torte salate", description: "Due varietà. Il mercato non decide tutto.", price: 0 },
      { name: "Snack, olive & taralli", description: "Capitale circolante.", price: 0 },
      { name: "Acqua", description: "Sorprendentemente gratis.", price: 0 }
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