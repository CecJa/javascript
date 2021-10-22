
var footballPlayer = [
    {
        nom: 'Lionel Messi',
        prix: 186,
        description: 'android13',
        img: './messi.jpg'
    },
    {
        nom: 'Kilian Mbappe',
        prix: 336,
        description: 'android14',
        img: './mbappe.jpg'
    },
]



function createDomElement(type, classes, id, attributes) {
    var domElement = document.createElement(type)

    if (classes) {
        console.log('classes')
        classes.forEach(domElementClass => {
            domElement.classList.add(domElementClass)
        })
    }

    domElement.id = id

    if (attributes) {
        console.log('attributes')
        for (const [key, value] of Object.entries(attributes)) {
            domElement.setAttribute(key, value)
        }
    }
    return domElement
}


function createImgElement(src, url) {
    let img = document.createElement('img')
    if (src) {
        img.src = src
    } else if (url) {
        img.url = url
    }
    return img
}


function createParagraphElement(text) {
    let p = document.createElement('p')
    p.innerText = text
    return p
}


function addChildrensToElement(element, childrens)  {
    childrens.forEach(child => {
        element.appendChild(child)
    })
}

function addPlayerCard(player, ulPlayerList){

    var liPlayerCard = document.createElement('li')

    var divPlayerCard = createDomElement(
        'div',
        [
            "uk-card",
            "uk-card-default",
            "uk-card-body",
            "uk-text-center",
            "uk-sortable-handle",
        ],
        null,
        {}
    )

    var imgPlayerCard = createImgElement(player.img, null)
    var nomPlayerCard = createParagraphElement(player.nom)

    addChildrensToElement(
        divPlayerCard,
        [
            imgPlayerCard,
            nomPlayerCard,
        ]
    )
    addChildrensToElement(liPlayerCard, [divPlayerCard])
    addChildrensToElement(ulPlayerList, [liPlayerCard])
}

function build(){

    var ulPlayerList = createDomElement(
        'ul',
        ["uk-grid-small", "uk-child-width-1-2", "uk-child-width-1-4@s"],
        'ulPlayer',
        {
            'uk-sortable': 'handle: .uk-sortable-handle',
            'uk-grid' : ''
        }
    )
    footballPlayer.forEach(player => {
        addPlayerCard(player, ulPlayerList)
    })
    document.body.appendChild(ulPlayerList)
}

build()







function addPlayer() {
    var getPlayer = document.getElementById('inputPlayer').value
    var getImg = document.getElementById('inputImg').value

    var obj = {
        nom: getPlayer,
        img: getImg
    }


    var ul = document.getElementById('ulPlayer')
    addPlayerCard(obj, ul)

}


