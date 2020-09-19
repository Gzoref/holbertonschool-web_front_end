function countPrimeNumbers() {

  let numberOfPrimes = 0;

  for (let index = 2; index <= 100; index++) {
	  if(100 % index == 0){
		  numberOfPrimes++;
	  }
  }
  return numberOfPrimes;
}

const time0 = performance.now();

const result = countPrimeNumbers();


const time1 = performance.now();

console.log(`Number of primes between 2-100: ${result}`);
console.log(`Execution time of printing countPrimeNumbers was ${time1 - time0} milliseconds`);
