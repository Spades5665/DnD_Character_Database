// Ability scores to manipulate
let strScore = 10;
let dexScore = 0;
let conScore = 0;
let intScore = 0;
let wisScore = 0;
let chaScore = 0;

// Base scores
let strBase = 15;
let dexBase = 15;
let conBase = 15;
let intBase = 15;
let wisBase = 15;
let chaBase = 15;

// Assign scores
/*
const strScore = document.getElementById('strAbility');
const dexScore = document.getElementById('dexAbility');
const conScore = document.getElementById('conAbility');
const intScore = document.getElementById('intAbility');
const wisScore = document.getElementById('wisAbility');
const chaScore = document.getElementById('chaAbility');
*/

// Functions to access ability scores
function getStrScore() {return strScore}
function getDexScore() {return dexScore}
function getConScore() {return conScore}
function getIntScore() {return intScore}
function getWisScore() {return wisScore}
function getChaScore() {return chaScore}

// Functions to update ability scores
function setStrScore(score) {strScore = score}
function setDexScore(score) {dexScore = score}
function setConScore(score) {conScore = score}
function setIntScore(score) {intScore = score}
function setWisScore(score) {wisScore = score}
function setChaScore(score) {chaScore = score}

// Functions to update display values of ability scores
function updateStrScore() {document.getElementById('strAbility').innerHTML = strScore}
function updateDexScore() {document.getElementById('dexAbility').innerHTML = dexScore}
function updateConScore() {document.getElementById('conAbility').innerHTML = conScore}
function updateIntScore() {document.getElementById('intAbility').innerHTML = intScore}
function updateWisScore() {document.getElementById('wisAbility').innerHTML = wisScore}
function updateChaScore() {document.getElementById('chaAbility').innerHTML = chaScore}
