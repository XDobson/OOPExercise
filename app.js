const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
    quote: () => `Dishonor! Dishonor on your whole family!`,
    storyline: function () {
        return `The movie ${this.title} is about ${this.main}`;
    }
};

const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    quote: () => `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`,
    storyline: function () {
        return `The movie ${this.title} is about ${this.main}`;
    }
};

function DisneyMovie(t, m) {
    this.title = t;
    this.main = m;
}

DisneyMovie.prototype.storyline = function () {
    return `The movie ${this.title} is about ${this.main}`;
}

const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
console.log(mulan1); // DisneyMovie { title: 'Mulan', main: 'Fa Mulan' }

const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
console.log(tangled1); // DisneyMovie { title: 'Tangled', main: 'Rapunzel' }

class DM {
    constructor(t, m) {
        this.title = t;
        this.main = m;
    }
    storyline() {
        return `The movie ${this.title} is about ${this.main}`;
    }
    static loveDisneyMovies() {
        return `I Love Disney Movies!`;
    }
}

const mulan2 = new DM(`Mulan`, `Fa Mulan`);
console.log(mulan2); // DM { title: 'Mulan', main: 'Fa Mulan' }
console.log(mulan2.storyline()); // The movie Mulan is about Fa Mulan

const tangled2 = new DM(`Tangled`, `Rapunzel`);
console.log(tangled2); // DM { title: 'Tangled', main: 'Rapunzel' }
console.log(tangled2.storyline()); // The movie Tangled is about Rapunzel

console.log(DM.loveDisneyMovies()); // I Love Disney Movies!

class DMCast extends DM {
    constructor(t, m, c) {
        super(t, m);
        this.cast = c;
    }
}

const mulan3 = new DMCast(
    `Mulan`,
    `Fa Mulan`,
    {
        mulan: `Ming-Na Wen`,
        mushu: `Eddie Murphy`,
        shang: `BD Wong`,
        theEmperor: `Pat Morita`
    }
);
console.log(mulan3);
/*
DMCast {
  title: 'Mulan',
  main: 'Fa Mulan',
  cast: {
    mulan: 'Ming-Na Wen',
    mushu: 'Eddie Murphy',
    shang: 'BD Wong',
    theEmperor: 'Pat Morita'
  }
}
*/

console.log(mulan3.storyline());
console.log(DMCast.loveDisneyMovies());

const rapunzel3 = new DMCast(
    `Tangled`,
    `Rapunzel`,
    {
        rapunzel: `Mandy Moore`,
        flynnRider: `Zachary Levi`,
        motherGothel: `Donna Murphy`
    }
);
console.log(rapunzel3);
/*
DMCast {
  title: 'Tangled',
  main: 'Rapunzel',
  cast: {
    rapunzel: 'Mandy Moore',
    flynnRider: 'Zachary Levi',
    motherGothel: 'Donna Murphy'
  }
}
*/
console.log(rapunzel3.storyline()); 