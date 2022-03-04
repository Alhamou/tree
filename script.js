const selectorTree = document.getElementById("tree")
const ul = document.createElement("ul")
ul.setAttribute('id','proList');

const json = [
    {id: "8654", kay: "some key1", value: "some value1"},
    {id: "5674", kay: "some key2", value: "some value2"},
    {id: "5673", kay: "some key3", value: "some value3"},
    {id: "2436", kay: "some key4", value: "some value4"},
    {
        id: "4567",
        kay: "some key5",
        value:
            {
                id: "5437",
                key: "key obj",
                value: {system: "WIN10"}
            }
    },
    {id: "8654", kay: "some key6", value: "some value6"},
    {id: "5643", kay: "some key7", value: "some value7"},
]

// const json = [
//     {
//       "_id": "621f5d8a8d021fa6707f2188",
//       "index": 0,
//       "guid": "ae97538f-c107-4f83-89cd-0eb8e38e0de2",
//       "isActive": true,
//       "balance": "$1,520.22",
//       "picture": "http://placehold.it/32x32",
//       "age": 28,
//       "eyeColor": "blue",
//       "name": "Tanisha Gibbs",
//       "gender": "female",
//       "company": "CONFRENZY",
//       "email": "tanishagibbs@confrenzy.com",
//       "phone": "+1 (916) 415-2595",
//       "address": "305 Pulaski Street, Shindler, Maryland, 2466",
//       "registered": "2015-09-26T03:58:56 -02:00",
//       "latitude": 28.195631,
//       "longitude": -166.310024,
//       "tags": [
//         "nostrud",
//         "nulla",
//         "mollit",
//         "et",
//         "reprehenderit",
//         "anim",
//         "dolor"
//       ],
//       "friends": [
//         {
//           "id": 0,
//           "name": "Tonya Pennington"
//         },
//         {
//           "id": 1,
//           "name": "Joan Eaton"
//         },
//         {
//           "id": 2,
//           "name": "Nixon Cooke"
//         }
//       ],
//       "greeting": "Hello, Tanisha Gibbs! You have 7 unread messages.",
//       "favoriteFruit": "apple"
//     },
//     {
//       "_id": "621f5d8a5d5c7f31cf9fd86c",
//       "index": 1,
//       "guid": "1c1f7e9b-a93d-4310-a57b-40df2383ac85",
//       "isActive": true,
//       "balance": "$1,420.39",
//       "picture": "http://placehold.it/32x32",
//       "age": 35,
//       "eyeColor": "green",
//       "name": "Ramsey Whitaker",
//       "gender": "male",
//       "company": "GRAINSPOT",
//       "email": "ramseywhitaker@grainspot.com",
//       "phone": "+1 (845) 465-2208",
//       "address": "471 Fairview Place, Kula, Louisiana, 779",
//       "registered": "2020-02-07T07:52:11 -01:00",
//       "latitude": 20.058958,
//       "longitude": 7.405714,
//       "tags": [
//         "ut",
//         "qui",
//         "aliqua",
//         "minim",
//         "ex",
//         "laborum",
//         "et"
//       ],
//       "friends": [
//         {
//           "id": 0,
//           "name": "Carolyn Elliott"
//         },
//         {
//           "id": 1,
//           "name": "Freida Mullins"
//         },
//         {
//           "id": 2,
//           "name": "Carly Rivers"
//         }
//       ],
//       "greeting": "Hello, Ramsey Whitaker! You have 1 unread messages.",
//       "favoriteFruit": "banana"
//     },
//     {
//       "_id": "621f5d8aed7f04f2a8ab7556",
//       "index": 2,
//       "guid": "3e98b125-6650-431f-9895-1c0f136fe506",
//       "isActive": false,
//       "balance": "$2,165.97",
//       "picture": "http://placehold.it/32x32",
//       "age": 30,
//       "eyeColor": "brown",
//       "name": "Mueller Branch",
//       "gender": "male",
//       "company": "ULTRASURE",
//       "email": "muellerbranch@ultrasure.com",
//       "phone": "+1 (996) 423-3720",
//       "address": "528 Gunther Place, Bradenville, South Dakota, 5395",
//       "registered": "2020-04-14T02:51:59 -02:00",
//       "latitude": -52.016371,
//       "longitude": 134.320787,
//       "tags": [
//         "velit",
//         "ea",
//         "dolor",
//         "adipisicing",
//         "sunt",
//         "cillum",
//         "proident"
//       ],
//       "friends": [
//         {
//           "id": 0,
//           "name": "Gertrude Love"
//         },
//         {
//           "id": 1,
//           "name": "Sheena Figueroa"
//         },
//         {
//           "id": 2,
//           "name": "Francine Mcmillan"
//         }
//       ],
//       "greeting": "Hello, Mueller Branch! You have 2 unread messages.",
//       "favoriteFruit": "banana"
//     },
//     {
//       "_id": "621f5d8a379b78524e657c47",
//       "index": 3,
//       "guid": "d5952f22-519d-4163-aa3c-fc9dbdccee5f",
//       "isActive": false,
//       "balance": "$1,241.57",
//       "picture": "http://placehold.it/32x32",
//       "age": 34,
//       "eyeColor": "green",
//       "name": "Jessica Reese",
//       "gender": "female",
//       "company": "LIQUIDOC",
//       "email": "jessicareese@liquidoc.com",
//       "phone": "+1 (970) 428-2223",
//       "address": "638 Seton Place, Belfair, Pennsylvania, 5017",
//       "registered": "2014-12-09T01:33:05 -01:00",
//       "latitude": -27.431827,
//       "longitude": -126.544288,
//       "tags": [
//         "magna",
//         "labore",
//         "eiusmod",
//         "labore",
//         "labore",
//         "amet",
//         "sunt"
//       ],
//       "friends": [
//         {
//           "id": 0,
//           "name": "Camacho Mcgee"
//         },
//         {
//           "id": 1,
//           "name": "Barrett Kaufman"
//         },
//         {
//           "id": 2,
//           "name": "Adrian Bailey"
//         }
//       ],
//       "greeting": "Hello, Jessica Reese! You have 9 unread messages.",
//       "favoriteFruit": "apple"
//     },
//     {
//       "_id": "621f5d8ae99a1f8c084a5116",
//       "index": 4,
//       "guid": "451b28e0-c14b-4c99-9c21-e9c8ce8c6781",
//       "isActive": true,
//       "balance": "$3,036.54",
//       "picture": "http://placehold.it/32x32",
//       "age": 36,
//       "eyeColor": "brown",
//       "name": "Tricia Mendez",
//       "gender": "female",
//       "company": "PYRAMAX",
//       "email": "triciamendez@pyramax.com",
//       "phone": "+1 (925) 414-2781",
//       "address": "273 Amity Street, Nile, New York, 9651",
//       "registered": "2020-07-01T01:52:25 -02:00",
//       "latitude": 75.149421,
//       "longitude": 134.5257,
//       "tags": [
//         "enim",
//         "culpa",
//         "incididunt",
//         "id",
//         "ut",
//         "sint",
//         "veniam"
//       ],
//       "friends": [
//         {
//           "id": 0,
//           "name": "Natalia Turner"
//         },
//         {
//           "id": 1,
//           "name": "Dorsey White"
//         },
//         {
//           "id": 2,
//           "name": "Salazar Klein"
//         }
//       ],
//       "greeting": "Hello, Tricia Mendez! You have 3 unread messages.",
//       "favoriteFruit": "banana"
//     }
// ]



function to_li(obj, name) {
    const li = document.createElement("li")

    if (typeof name !== "undefined") {

        const strong = document.createElement("strong")
        strong.setAttribute('class','caret');


        if(!isNaN(Number(name))){
            name = +name +1
        }

        strong.appendChild(document.createTextNode(name + ": "))
        li.appendChild(strong)
    }

    if (typeof obj !== "object"){
        const btn = document.createElement("button")
        btn.innerHTML = obj;
        btn.setAttribute('data-'+name, obj);
        li.appendChild(btn)

    } else {

        const ul = document.createElement("ul")
        ul.setAttribute('class','trees closed');

        for (let prop in obj){

            if(prop === "0"){
              ul.classList.remove("closed")
            }

            ul.appendChild(to_li(obj[prop],prop))
        }

        li.appendChild(ul)
    }
    return li
}

const res = to_li(json)

ul.appendChild(res)
selectorTree.appendChild(ul)




const buttuns = document.querySelectorAll("[data-id]")

buttuns.forEach(el=>{
    el.addEventListener("click", function(e){
        const {id} = e.target.dataset
    })
})



document.addEventListener("click", function(e){
    if(e.target.classList.contains("trees")){
      e.target.classList.toggle("closed")
    }
})

const btnLeft = document.querySelector("[data-open-left]")
const btnRight = document.querySelector("[data-open-right]")
const sideLeft = document.querySelector("[data-side-left]")
const sideright = document.querySelector("[data-side-right]")


btnLeft.onclick = function(){
    sideLeft.classList.toggle("opened")
}

btnRight.onclick = function(){
    sideright.classList.toggle("opened")
}
