const selectorTree = document.getElementById("tree")
const ul = document.createElement("ul")
ul.setAttribute('id','proList');
// const uls = [ul]

const json = [
    {id: "1", kay: "some key1", value: "some value1"},
    {id: "2", kay: "some key2", value: "some value2"},
    {id: "3", kay: "some key3", value: "some value3"},
    {id: "4", kay: "some key4", value: "some value4"},
    {
        id: "5",
        kay: "some key5",
        value:
            {
                id: "12",
                key: "key obj",
                value: {test: "XXXX"}
            }
    },
    {id: "6", kay: "some key6", value: "some value6"},
    {id: "7", kay: "some key7", value: "some value7"},
]




function to_li(obj, name) {
    const li = document.createElement("li")

    if (typeof name !== "undefined") {

        const strong = document.createElement("strong")
        strong.setAttribute('class','caret');

        // if(isNaN(Number(name))){
        //     strong.appendChild(document.createTextNode(name + ": "))
        //     li.appendChild(strong)
        // }

        strong.appendChild(document.createTextNode(name + ": "))
        li.appendChild(strong)
    }

    if (typeof obj !== "object"){
        li.appendChild(document.createTextNode(obj))

    } else {

        const ul = document.createElement ("ul")

        for (let prop in obj){

            ul.appendChild(to_li(obj[prop],prop))
        }

        li.appendChild(ul)
    }
    return li
}

const res = to_li(json)

ul.appendChild(res)
selectorTree.appendChild(ul)








// var toggler = document.getElementsByClassName("caret");
// var i;

// for (i = 0; i < toggler.length; i++) {
//   toggler[i].addEventListener("click", function() {
//     this.parentElement.querySelector(".nested").classList.toggle("active");
//     this.classList.toggle("caret-down");
//   });
// }
