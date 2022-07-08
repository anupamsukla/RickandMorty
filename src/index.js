let data = {
    "children": [
        {
            "name": "Men",
            "children": [
                {
                    "name": "Topwear",
                    "children": [
                        {
                            "children": [],
                            "name": "T-shirts"
                        },
                        {
                            "children": [],
                            "name": "Casuals"
                        },
                        {
                            "children": [],
                            "name": "Formals"
                        }
                    ]
                },
                {
                    "name": "Bottomwear",
                    "children": [
                        {
                            "children": [],
                            "name": "Jeans"
                        },
                        {
                            "children": [],
                            "name": "Casuals"
                        },
                        {
                            "children": [],
                            "name": "Formals"
                        }
                    ]
                },
                {
                    "name": "Footwear",
                    "children": [
                        {
                            "children": [],
                            "name": "Sneakers"
                        },
                        {
                            "children": [],
                            "name": "Sandals"
                        },
                        {
                            "children": [],
                            "name": "Slippers"
                        }
                    ]
                },
                {
                    "name": "Gadgets",
                    "children": [
                        {
                            "children": [],
                            "name": "Smart Watches"
                        },
                        {
                            "children": [],
                            "name": "Fitness Gadgets"
                        },
                        {
                            "children": [],
                            "name": "Headphones"
                        },
                        {
                            "children": [],
                            "name": "Speakers"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Women",
            "children": [
                {
                    "name": "Topwear",
                    "children": [
                        {
                            "children": [],
                            "name": "T-shirts"
                        },
                        {
                            "children": [],
                            "name": "Casuals"
                        },
                        {
                            "children": [],
                            "name": "Formals"
                        }
                    ]
                },
                {
                    "name": "Bottomwear",
                    "children": [
                        {
                            "children": [],
                            "name": "Jeans"
                        },
                        {
                            "children": [],
                            "name": "Casuals"
                        },
                        {
                            "children": [],
                            "name": "Formals"
                        }
                    ]
                },
                {
                    "name": "Footwear",
                    "children": [
                        {
                            "children": [],
                            "name": "Sneakers"
                        },
                        {
                            "children": [],
                            "name": "Sandals"
                        },
                        {
                            "children": [],
                            "name": "Slippers"
                        }
                    ]
                },
                {
                    "name": "Gadgets",
                    "children": [
                        {
                            "children": [],
                            "name": "Smart Watches"
                        },
                        {
                            "children": [],
                            "name": "Fitness Gadgets"
                        },
                        {
                            "children": [],
                            "name": "Headphones"
                        },
                        {
                            "children": [],
                            "name": "Speakers"
                        }
                    ]
                }
            ]
        }
    ]
}

// function iterate(data, count = 2) {
//     for (let i of data['children']) {
//         let res = i.name
//         if (i.children.length > 0) {
//             for (let i = 0; i < count; i++) {
//                 res = " " + res
//             }
//             console.log(i.name)
//             iterate(i, count + 2)
//         }
//         else {
//             let res = i.name
//             for (let i = 0; i < count; i++) {
//                 res = " " + res
//             }
//             console.log(res)
//         }
//     }

// }


const flatten = (obj, prefix = [], current = {}) => {
    if (typeof (obj) === 'object' && obj !== null) {
        for (const key of Object.keys(obj)) {
            flatten(obj[key], prefix.concat(key), current)
        }
    } else {
        current[prefix.join('.')] = obj
    }
    return current
}
let res = flatten(data)
console.log(res)
for (let i in res) {
    console.log(i.split('.').length - 3)
}

let data1 = {
    "Alive": [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male"
        },
        {
            "id": 48,
            "name": "Black Rick",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male"
        }
    ],
    "Dead": [
        {
            "id": 8,
            "name": "Adjudicator Rick",
            "status": "Dead",
            "species": "Human",
            "type": "",
            "gender": "Male"
        },
        {
            "id": 56,
            "name": "Bootleg Portal Chemist Rick",
            "status": "Dead",
            "species": "Human",
            "type": "",
            "gender": "Male"
        }
    ],
    "Unknown": [
        {
            "id": 15,
            "name": "Alien Rick",
            "status": "unknown",
            "species": "Alien",
            "type": "",
            "gender": "Male"
        },
        {
            "id": 19,
            "name": "Antenna Rick",
            "status": "unknown",
            "species": "Human",
            "type": "Human with antennae",
            "gender": "Male"
        }
    ]
}

console.log(flatten(data1))