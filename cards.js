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
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 2,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 3,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 4,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 5,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 6,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 7,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 8,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 9,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 10,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 11,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 12,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 13,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 14,
    cardOrder: null,
    cardName: 'tempura',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/tempura.png",
   },
   {
    cardNum: 15,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 16,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 17,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 18,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 19,
    cardOrder: null,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 20,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 21,
    cardName: 'sashimi',
    cardOrder: null,
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 22,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 23,
    cardName: 'sashimi',
    cardOrder: null,
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 24,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 25,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 26,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 27,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 28,
    cardOrder: null,
    cardName: 'sashimi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/sashimi.png",
   },
   {
    cardNum: 29,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 30,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 31,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 32,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 33,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 34,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 35,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 36,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 37,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 38,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 39,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 40,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 41,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 42,
    cardName: 'dumpling',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/dumpling.png",
   },
   {
    cardNum: 43,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 44,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 45,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 46,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 47,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 48,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 49,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 50,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 51,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 52,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 53,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 54,
    cardName: 'maki 2',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 2.png",
   },
   {
    cardNum: 55,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 56,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 57,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 58,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 59,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 60,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 61,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 62,
    cardName: 'maki 3',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 3.png",
   },
   {
    cardNum: 63,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 64,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 65,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 66,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 67,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 68,
    cardName: 'maki 1',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/maki 1.png",
   },
   {
    cardNum: 69,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 70,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 71,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 72,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 73,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 74,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 75,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 76,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 77,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 78,
    cardName: 'salmon',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/salmon.png",
   },
   {
    cardNum: 79,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 80,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 81,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 82,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 83,
    cardName: 'squid',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/squid.png",
   },
   {
    cardNum: 84,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 85,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 86,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 87,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 88,
    cardName: 'egg',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/egg.png",
   },
   {
    cardNum: 89,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 90,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 91,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 92,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 93,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 94,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 95,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 96,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 97,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 98,
    cardName: 'pudding',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/pudding.png",
   },
   {
    cardNum: 99,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 100,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 101,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 102,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 103,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 104,
    cardName: 'wasabi',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/wasabi.png",
   },
   {
    cardNum: 105,
    cardName: 'chopsticks',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/chopsticks.png",
   },
   {
    cardNum: 106,
    cardName: 'chopsticks',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/chopsticks.png",
   },
   {
    cardNum: 107,
    cardName: 'chopsticks',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/chopsticks.png",
   },
   {
    cardNum: 108,
    cardName: 'chopsticks',
    cardStatus: 1, //card status 1=deck 2=hand 3=played 4=discard
    imgsrc: "/img/small cards/chopsticks.png",
   }
   
     ]
   };