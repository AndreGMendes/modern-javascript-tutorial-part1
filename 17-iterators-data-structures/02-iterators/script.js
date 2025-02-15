// const app = {
//   nextIndex: 0,
//   teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
//   next() {
//     if (this.nextIndex >= this.teams.length) {
//       return { done: true };
//     }

//     const returnValue = { value: this.teams[this.nextIndex], done: false };
//     this.nextIndex++;
//     return returnValue;
//   },
// };

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

// const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// for (const team of app) {
//   console.log(team);
// }



// -------------------------------------
// MULTI ITERABLE
// -------------------------------------

// const app2 = {
//   teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
//   colors: ['Red', 'Blue', 'Green', 'Yellow'],

//   [Symbol.iterator]: function (arraySelect) {
//     let nextIndex = 0;

//     arraySelect === 'teams' ? arraySelect = this.teams : arraySelect = this.colors

//     return {
//       next: () => {
//         return nextIndex < arraySelect.length
//           ? { value: arraySelect[nextIndex++], done: false }
//           : { done: true };
//       },
//     };
//   },

// };


// // console.log(app2[Symbol.iterator]('teams').next());


// for (const color of app2) {
//   console.log(color);
// }

// ----------------------------------------------------



const app3 = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  colors: ['Red', 'Blue', 'Green', 'Yellow'],
};




for (const team of app3.teams) {
  console.log(team);
}

for (const color of app3.colors) {
  console.log(color);
}



