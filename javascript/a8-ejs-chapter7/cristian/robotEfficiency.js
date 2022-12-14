const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

const mailRoute = [
    "Alice's House", "Cabin",         "Alice's House", "Bob's House",
    "Town Hall",     "Daria's House", "Ernie's House",
    "Grete's House", "Shop",          "Grete's House", "Farm", 
    "Marketplace",   "Post Office"
];

function buildGraph(edges) {

    let graph = Object.create(null);

    function addEdge(from, to) {        
        if (graph[from] == null) {
            graph[from] = [to];
        } 
        else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

const roadGraph = buildGraph(roads);

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];

    for (let i = 0; i < work.length; i++) {
        let {at, route} =  work[i];

        for (let place of graph[at]) { 
            if (place == to) {
                return route.concat(place);
            }
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        }
        else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) {
                    return p;
                }
                return { 
                    place: destination, 
                    address: p.address
                };
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;  

        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);

        parcels.push({place, address});
    }

    return new VillageState("Post Office", parcels);
};

let first = new VillageState(
    "Post Office", 
    [{place: "Post Office", address: "Alice's House"}]
);

let next = first.move("Alice's House");

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        for (let parcel of state.parcels) {
            let {place:pickup, address} = parcel;
        }

        if (state.parcels.length == 0) {
            break;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function randomRobot(state) {
    
    return {direction: randomPick(roadGraph[state.place])};
}

runRobot(VillageState.random(), randomRobot);


function routeRobot(state, memory) {    
    if (memory.length == 0) {
        memory = mailRoute;
    }

    return {
        direction: memory[0],
           memory: memory.slice(1)
    };
}

runRobot(VillageState.random(), routeRobot, []);

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        
        if (state.parcels.length == 0) {
            return turn;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {

        let parcel = parcels[0];

        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        }
        else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }

    return {
        direction: route[0],
        memory: route.slice(1)
    }
}

runRobot(VillageState.random(), goalOrientedRobot, []);

function compareRobots(robot1, memory1, robot2, memory2) {
    let totalTurnsRobot1 = 0;
    let totalTurnsRobot2 = 0;

    for (var task = 0; task < 100; task++) {
        let taskState = VillageState.random();

        totalTurnsRobot1 += runRobot(taskState, robot1, memory1);
        totalTurnsRobot2 += runRobot(taskState, robot2, memory2);
    }

    console.log(`Robot 1 - Promedio de turnos para realizar ${task} tasks:  ${Math.round(totalTurnsRobot1 / task)}.`)
    console.log(`Robot 2 - Promedio de turnos para realizar ${task} tasks: ${Math.round(totalTurnsRobot2 / task)}.`)
}

compareRobots(routeRobot, [], goalOrientedRobot, []);

function optimizedRobot({place, parcels}, route) {
    let shortest_route = route;

    if (route.length == 0) {
        let routes = [];
        const PICK_UP = "Pick Up";
        const DELIVER = "Delivery";

        for (let parcel of parcels) {
            if (parcel.place != place) {
                route = findRoute(roadGraph, place, parcel.place);
                routes.push({
                    path: route, 
                    steps: route.length, 
                    action_type: PICK_UP
                });
            }
            else {
                route = findRoute(roadGraph, place, parcel.address);
                routes.push({
                    path: route, 
                    steps: route.length, 
                    action_type: DELIVER
                });
            }
        }
      
        if (routes.some(route => route.action_type == PICK_UP)) {
            shortest_route = routes.filter(route => {
                return route.action_type == PICK_UP;
            }).reduce((minimum_route, route) => {
                return route.steps < minimum_route.steps ? route : minimum_route;
            }).path;
        }
        else {
            shortest_route = routes.reduce((minimum_route, route) => {
                return route.steps < minimum_route.steps ? route : minimum_route;
            }).path;
        }
    } 

    return {
        direction: shortest_route[0],
        memory: shortest_route.slice(1)
    };
}

compareRobots(goalOrientedRobot, [], optimizedRobot, []);