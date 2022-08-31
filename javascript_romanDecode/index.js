// Roman to decimal; Brian Dennis

const romanMap = { "I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000 };

function romanDecode(roman) {

	if (null === roman) return 0;

	// Parse the string 'backwards' by popping off individual characters right to left,
	// keeping track of the last most recent character processed to detect & handle
	// the 'sign' change (e.g. CM) where a lessor valued character is left of higher

	const individualRomanChars = roman.split("");

	let sum = 0, src, lastProcessed = 0, sign;

	while(src = individualRomanChars.pop()) {

		if (!src) continue; // Cleanly processed entire composite chars (end of char stack)

		sign = 1; // Assume 'positive' (multiplier) value from the map

		src = src.toUpperCase(); // Keys in the map are UPPERCASE

		if (!(src in romanMap)) continue; // Swallow invalid characters (maybe throw exception???)

		src = romanMap[src]; // Extract the integer value of the character as mapped

		if (lastProcessed > src) sign = -1; // Here's the special case! Convert to the 'negative' version

		sum += src * sign; // Math is fun; additive property

		lastProcessed = src;

	}

	return sum;

}

// *** TDD

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
console.log(`mixedwithinvalid> ${1919 == romanDecode("MCMXbIX")}`);
console.log(`singlecharacter> ${10 == romanDecode("X")}`);