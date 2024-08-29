// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Logs the outputs of each function to the cosole
console.log(returnRandBase());
console.log(mockUpStrand());

// 
const pAequorFactory = (num, bases) => {
  return {
    _specimenNum: num,
    _dna: bases,

    mutate() {
      randomBase = Math.floor(Math.random() * 15);
      dnaBasesNoA = ['T', 'C', 'G'];
      dnaBasesNoT = ['A', 'C', 'G'];
      dnaBasesNoC = ['A', 'T', 'G'];
      dnaBasesNoG = ['A', 'T', 'C'];

      if (this._dna[randomBase] === 'A') {
        this._dna[randomBase] = dnaBasesNoA[Math.floor(Math.random() * 3)];
      } else if (this._dna[randomBase] === 'T') {
        this._dna[randomBase] = dnaBasesNoT[Math.floor(Math.random() * 3)];
      } else if (this._dna[randomBase] === 'C') {
        this._dna[randomBase] = dnaBasesNoC[Math.floor(Math.random() * 3)];
      } else {
        this._dna[randomBase] = dnaBasesNoG[Math.floor(Math.random() * 3)];
      }
      return this._dna;
    }, 

    compareDNA(pAequor) {
      numberCommonality = 0;

      for (let i = 0; i < this._dna.length; i++) {
        if (pAequor._dna[i] === this._dna[i]) {
          numberCommonality++;
        }
      }

      percentCommonality = ((numberCommonality / 15) * 100).toFixed(2);
      console.log(`Specimen #${this._specimenNum} and Specimen #${pAequor._specimenNum} have ${percentCommonality}% DNA in common.`)
    },

    willLikelySurvive() {
      const cOrG = this._dna.filter(el => el === "C" || el === "G");
      return cOrG.length / this._dna.length >= 0.6;
    }, 

    complementStrand() {
      const complement = {
        'A' : 'T',
        'T' : 'A',
        'C' : 'G',
        'G' : 'C'
      };
      return this._dna.map(base => complement[base]);
    }
  }
};

// Creating 30 pAequor that are likely to survive
const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrganism = pAequorFactory(idCounter, mockUpStrand());

  if (newOrganism.willLikelySurvive() === true) {
    survivingSpecimen.push(newOrganism);
  }
  idCounter++;
}

console.log(survivingSpecimen); 

// logs output returned from P. Aequor's factory function.
test1 = pAequorFactory(1, mockUpStrand());
test2 = pAequorFactory(2, mockUpStrand());

console.log(test1._dna);
console.log(test2._dna); 

console.log(test1.mutate());
console.log(test2.mutate());

test1.compareDNA(test2);

console.log(test1.willLikelySurvive());
console.log(test2.willLikelySurvive());

const testOrganism = pAequorFactory(1, mockUpStrand());
console.log(testOrganism._dna);
console.log(testOrganism.complementStrand());

