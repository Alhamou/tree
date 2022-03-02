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
        const btn = document.createElement("butten")
        btn.innerHTML = obj;
        btn.setAttribute('data-'+name, obj);
        li.appendChild(btn)

    } else {

        const ul = document.createElement("ul")

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




const buttuns = document.querySelectorAll("[data-id]")

buttuns.forEach(el=>{
    el.addEventListener("click", function(e){
        const {id} = e.target.dataset
        console.log(id)
    })
})
