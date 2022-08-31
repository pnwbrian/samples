// Roman to decimal; Brian Dennis

function romanDecode(roman) {
	return 0;
}

// Easy, from readme
console.log(`8> ${8 == romanDecode("VIII")}`);
console.log(`9> ${9 == romanDecode("IX")}`);
console.log(`2021> ${2021 == romanDecode("MMXXI")}`);
console.log(`1919> ${1919 == romanDecode("MCMXIX")}`);

// Edge cases; does the code crash & burn??
console.log(`null> ${0 == romanDecode(null)}`);
console.log(`empty> ${0 == romanDecode("")}`);
console.log(`lowercase> ${2021 == romanDecode("mmxxi")}`);
console.log(`mixedcase> ${1919 == romanDecode("McMxiX")}`);
console.log(`mixedwithinvalid> ${1919 == romanDecode("MCMXIX")}`);
console.log(`singlecharacter> ${10 == romanDecode("X")}`);