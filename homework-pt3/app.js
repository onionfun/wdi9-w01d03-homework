// const num = 20;
// for(let i=0; i<=20; i++){
//     console.log(i);
    
//     };

//2Write a for loop that will log only the even numbers in 0 through 200.

// const numb = 200
// for(let i=0; i<=200; i++){
//     if(i%2 === 0)
//     console.log(i);
// }

//3Write code that logs "Love me, pet me! HSSSSSS!" 20 times
// for(i=0; i<=20; i++){
//     console.log("Love me, pet me! HSSSSSS!")
//   }



//++++++++++++++++++++++++================
//4 
// newFunction();


    // for (let i = 0; i <= 20; i++) {
    //     if (i % 2 === 0){
    //         let testNumber = Math.random()
    //         if(testNumber <= .33){
    //             console.log("...human...why you taking pictures of me?...")
    //         }
    //         if(testNumber >.33 && testNumber <=.66){
    //             console.log("...the catnip made me do it...")
    //         }
    //         if(testNumber >.66){
    //             console.log("...why does the red dot always get away...")
    //         }     
    //     }   
    // }

//5
// for(let i=0; i<=100; i++){
//     if(i%3 === 0){
//         console.log("fizz");
//     }
//     if(i%5 === 0){
//         console.log("buzz");
//     } 
//     if(i%3 === 0 && i%5 === 0){
//         console.log("fizzbuzz");
//     }
//     console.log(i);
// }




//1
// const shahzad = ["Shahzad", 1000, "Austin"];
// const jim = ["Jim", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const daniel = ["Daniel", 186, "Dallas"];
// const ryan = ["Ryan", 65, "Denver"];

// shahzad.splice(0,1,"Gameboy");
// daniel[1] +=1
// ryan.splice(2,1, "Gotham City")
// reuben.splice(2,1,Denver)
// jim.splice(2,1,"Moscow","Boca","Philly")
// jim.splice(2,1)

// 2
// const ninjaTurtles = ["Leo", "Raphael", "Donny", "Mike"];
// for(i=0; i<ninjaTurtles.length; i++){
//    let upp = ninjaTurtles[i].toUpperCase("")
    
// console.log(upp);
// }



//1
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   let kristynShoe = kristynsCloset[0];
//     kristynsCloset.shift();
//     thomsCloset[2].push(kristynShoe);

// const outfitOne = [kristynsCloset[2], thomsCloset[0][0], thomsCloset[1][1]]
// console.log(outfitOne);

// for (i = 0; i <kristynsCloset.length; i++){
//     let randomOutfit2 = Math.floor(Math.random() * kristynsCloset[i].length);
//     console.log(kristynsCloset[randomOutfit2]);
//     }

// for (i = 0; i <thomsCloset.length; i++){
// let randomOutfit1 = Math.floor(Math.random() * thomsCloset[i].length);
// console.log(thomsCloset[randomOutfit1]);
// }


// for(i=0; i<kristynsCloset.length; i++){
// console.log("WHIRR: now washing " + kristynsCloset[i]);
// }


// for(let i=0; i<thomsCloset.length; i++){
//     console.log(thomsCloset);
// }
let sum = 0 // define results style variable before loop starts to change it 
for(let i=0; i<=1000; i++){
    if(i%3===0 || i%5===0){ //add to sum
// how to add number to a variable +1 is i== reassign sum here V
sum = sum + i
    } 
} 


console.log(sum) //sum of all numbers divisible by 3 and 5
















