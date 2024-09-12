const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};


// ALTERNATE WAY

// const getAge = function (person) {
//   person.yearOfDeathdeath ??= new Date().getFullYear();

//   return person.yearOfDeath - person.yearOfBirth;
// };

// const findTheOldest = function (people) {

//   const peopleOldestToYoungest = people.toSorted(
//   (person, nextPerson) => { getAge(nextPerson) - getAge(person)}
//   );
  
//   const oldestPerson = peopleOldestToYoungest[0];
//   console.log('peopleOldestToYoungest: ', peopleOldestToYoungest);
//   console.log('peopleOldestToYoungest[0]: ', peopleOldestToYoungest[0]);
//   return oldestPerson;
// };


// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
