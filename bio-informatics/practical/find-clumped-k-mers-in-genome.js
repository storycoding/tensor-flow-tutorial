const findClumpedKMers = require('../challenges/find-clumped-k-mers');
const genome = require('../../genomes/vibrio-cholerae.json');

const clumps = findClumpedKMers(genome, 13, 500, 4);
console.log(clumps);
