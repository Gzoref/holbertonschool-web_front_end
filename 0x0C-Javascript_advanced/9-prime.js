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

for (let index = 0; index < 100; index++) {
	countPrimeNumbers();
}

const time1 = performance.now();

const time = time1 - time0;

console.log(`Execution time of printing countPrimeNumbers was ${time} milliseconds`);
