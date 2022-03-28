const rating = document.querySelectorAll(".rating_list_item_link");
const ratingForm = document.querySelector(".rating_form");
const conRating = document.querySelector(".container_rating");
const conState = document.querySelector(".container_state");
let state = document.querySelector(".state");
let isClicked = false;

for (let i = 0; i < rating.length; i++) {
    rating[i].classList.remove("active");
    rating[i].addEventListener("click", function() {
        isClicked = true;
        if (!rating[i].classList.contains("active")) {
            rating[i].classList.add("active");
            state.innerHTML = rating[i].innerHTML;
        }

        for (let j = 0; j < rating.length; j++) {
            if (rating[j] !== rating[i]) {
                rating[j].classList.remove("active")
            }
        }
    })
};

ratingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if (!isClicked) {
        alert("You must select a value!");
        return;
    }
    conRating.style.display = "none";
    conState.style.display = "flex";
});

// const a = (function() {
//     return parseInt("1.5")
// })();

// ==========
// const testString = "hello world";
// const isAllCaps = false;
// if (testString === testString.toUpperCase()) {
//     isAllCaps = true
// };
// console.log(isAllCaps);

// ==========
// let p1 = new Promise((resolve,reject) => {
//     resolve("foo");
// });

// let p2 = new Promise((resolve, reject) => {
//     reject("bar");
// })

// console.log("bip");

// p1.then(val => {
//     console.log(val);
//     return p2;
// }).then(val => {
//     console.log("baz")
// }).catch(err => {
//     console.log(err)
// })

// console.log("bop");

// nondeterministic way resolve promises

// ==========
// class MyList extends Array {
//     constructor(someArg) {
//         this.someArg = [...someArg];
//     }
// }
// let theList = new MyList("foo");

// ==========
// function foo(obj) {
//     return {
//         a: obj.bar,
//         b: obj.baz
//     }
// }
// const { a } = foo( { bar: 27, baz: 41});
// console.log(a);

// ==========
// for(var i=0; i<5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     },100)
// };

// ==========
// let i = 3;
// let j = 4;
// let k = 1;
// for (i = 0; i<3; i++) {
//     k += j;
//     j = j - 1;
// };
// console.log(k);

// ==========