let edges = {
    '0-0': [
        [1, 0],
        [0, 1],
    ],
    '1-0': [
        [0, 0],
        [1, 1],
        [2, 0],
    ],
    '1-1': [
        [1, 0],
        [2, 1],
        [0, 1],
        [1, 2],
    ],
    '2-1': [
        [1, 1],
        [2, 2],
    ],
    '2-2': [
        [2, 1],
        [2, 3],
        [3, 2],
        [1, 2],
    ],
    '2-3': [
        [2, 2],
        [3, 3],
    ],
    '3-3': [
        [2, 3],
        [3, 2],
    ],
    '3-2': [
        [3, 3],
        [2, 2],
    ],
    '1-2': [
        [2, 2],
        [0, 2],
        [1, 1],
        [1, 3],
    ],
    '0-2': [
        [1, 2],
        [0, 1],
        [0, 3],
    ],
    '0-1': [
        [0, 2],
        [1, 1],
        [0, 0],
    ],
    '1-3': [
        [1, 2],
        [0, 3],
    ],
    '0-3': [
        [1, 3],
        [0, 2],
    ],
    '2-0': [
        [1, 0],
        [3, 0],
    ],
    '3-0': [[2, 0]],
}
let points = [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 3],
    [3, 2],
    [2, 2],
    [1, 2],
    [0, 2],
    false,
    [0, 2],
    [0, 1],
    [1, 1],
    [1, 2],
    [1, 3],
    [0, 3],
    [0, 2],
    false,
    [0, 1],
    [0, 0],
    false,
    [0, 1],
    false,
    [2, 2],
    false,
    [0, 3],
    false,
    [0, 0],
    false,
    [0, 2],
    false,
    [0, 1],
    false,
    [3, 3],
    false,
    [1, 0],
    [2, 0],
    [3, 0],
]

let points2 = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 1],
    [0, 1],
    false,
    [2, 1],
    [3, 1],
    [3, 0],
    [2, 0],
    [2, 1],
    false,
    [2, 1],
    [2, 2],
    [3, 2],
    [3, 3],
    [2, 3],
    [2, 2],
    [1, 2],
    [1, 3],
    [0, 3],
    [0, 2],
    false,
    [2, 1],
    [1, 1],
]

let map2 = {
    '0-0': {
        x: 0,
        y: 0,
        visited: true,
        right: null,
        left: null,
        up: '0--1',
        down: null,
    },
    '0-1': {
        x: 0,
        y: 1,
        visited: true,
        right: null,
        left: null,
        up: null,
        down: null,
    },
    '0-2': {
        x: 0,
        y: 2,
        visited: true,
        right: null,
        left: null,
        up: null,
        down: null,
    },
    '1-0': {
        x: 1,
        y: 0,
        visited: true,
        right: null,
        left: null,
        up: null,
        down: null,
    },
    '1-1': {
        x: 1,
        y: 1,
        visited: true,
        right: null,
        left: null,
        up: null,
        down: null,
    },
    '1-2': {
        x: 1,
        y: 2,
        visited: true,
        right: null,
        left: null,
        up: null,
        down: '1-3',
    },
    '2-0': {
        x: 2,
        y: 0,
        visited: true,
        right: null,
        left: null,
        up: null,
        down: null,
    },
    '2-1': {
        x: 2,
        y: 1,
        visited: true,
        right: '3-1',
        left: null,
        up: null,
        down: null,
    },
    '2-2': {
        x: 2,
        y: 2,
        visited: true,
        right: null,
        left: null,
        up: null,
        down: null,
    },
}