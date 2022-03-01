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
                value: "value obj"
            }
    },
    {id: "6", kay: "some key6", value: "some value6"},
    {id: "7", kay: "some key7", value: "some value7"},
]

const html = (ul, data, id) => {

    const li = document.createElement("li")
    let node = document.createTextNode(data)

    if(id){
        data = createChild(data)

    }

    node = id ? data : document.createTextNode(data)
    li.appendChild(node);
    ul.appendChild(li)

    return data
}

const eachRow = (o)=> {
    const [id, key, value] = Object.entries(o)
    if(typeof value[1] === "object"){
        const [id2, key2, value2] = Object.entries(value[1])
        return html(ul, value2[1], id2[1])
    }

    html(ul, value[1])

    return value[1]
}


const createChild = (o) => {

    const ul = document.createElement("ul")
    const li = document.createElement("li")

    const node = document.createTextNode(o)

    li.appendChild(node);
    ul.appendChild(li)

    return ul
}

json.forEach(data=>{
    eachRow(data)
})

// uls.forEach(el => {
    selectorTree.appendChild(ul)
// })
