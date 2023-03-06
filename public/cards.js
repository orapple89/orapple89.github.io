var players = {
    "members" : [
    {
      playerNum: 1,
      userName: 'Available',
      score: 0
    },
    {
      playerNum: 2,
      userName: 'Available',
      score: 0
    },
    {
      playerNum: 3,
      userName: 'Available',
      score: 0
    },
    {
      playerNum: 4,
      userName: 'Available',
      score: 0
    },
    {
      playerNum: 5,
      userName: 'Available',
      score: 0
    }



]
};

/*
shuffle() {
  let numberOfCards = this.cards.length;  
  for (var i=0; i<numberOfCards; i++) {
    let j = Math.floor(Math.random() * numberOfCards);
    let tmp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = tmp;
  }
} //End of shuffle()
*/

var deck = {
    "cards" : [
    {
    cardNum: 1,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 2,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 3,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 4,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 5,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 6,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 7,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 8,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 9,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 10,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 11,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 12,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 13,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 14,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 15,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 16,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 17,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 18,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 19,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 20,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 21,
    cardName: 'sashimi',
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 22,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 23,
    cardName: 'sashimi',
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 24,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 25,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 26,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 27,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 28,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 29,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 30,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 31,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 32,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 33,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 34,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 35,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 36,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 37,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 38,
    cardName: 'dumpling',
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 39,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 40,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 41,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 42,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 43,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 44,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 45,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 46,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 47,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 48,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 49,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 50,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 51,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 52,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 53,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 54,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 55,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 56,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 57,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 58,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 59,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 60,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 61,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 62,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 63,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 64,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 65,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 66,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 67,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 68,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 69,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 70,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 71,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 72,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 73,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 74,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 75,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 76,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 77,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 78,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 79,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 80,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 81,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 82,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 83,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 84,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 85,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 86,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 87,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 88,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 89,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 90,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 91,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 92,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 93,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 94,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 95,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 96,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 97,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 98,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 99,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 100,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 101,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 102,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 103,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 104,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 105,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'chopsticks',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/chopsticks.png",
   },
   {
    cardNum: 106,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'chopsticks',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/chopsticks.png",
   },
   {
    cardNum: 107,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'chopsticks',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/chopsticks.png",
   },
   {
    cardNum: 108,
    cardOrder: null,
    cardDeck: true,
    cardHand: false,
    cardPlayed: false,
    cardDiscard: false,
    cardName: 'chopsticks',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/chopsticks.png",
   }
   
     ]
   };