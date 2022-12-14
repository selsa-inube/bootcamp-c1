var roads = [
   "Alice's House-Bob's House", "Alice's House-Cabin",
   "Alice's House-Post Office", "Bob's House-Town Hall",
   "Daria's House-Ernie's House", "Daria's House-Town Hall",
   "Ernie's House-Grete's House", "Grete's House-Farm",
   "Grete's House-Shop", "Marketplace-Farm",
   "Marketplace-Post Office", "Marketplace-Shop",
   "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
   let graph = Object.create(null);
   function addEdge(from, to) {
      if (graph[from] == null) {
         graph[from] = [to];
      } else {
         graph[from].push(to);
      }
   }
   for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
   }
   return graph;
}

var roadGraph = buildGraph(roads);

var VillageState = class VillageState {
   constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
   }

   move(destination) {
      if (!roadGraph[this.place].includes(destination)) {
         return this;
      } else {
         let parcels = this.parcels.map(p => {
            if (p.place != this.place) return p;
            return { place: destination, address: p.address };
         }).filter(p => p.place != p.address);
         return new VillageState(destination, parcels);
      }
   }
}

function runRobot(state, robot, memory) {
   for (let turn = 0; ; turn++) {
      if (state.parcels.length == 0) {
         console.log(`Done in ${turn} turns`);
         break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
   }
}

function randomPick(array) {
   let choice = Math.floor(Math.random() * array.length);
   return array[choice];
}

function randomRobot(state) {
   return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
   let parcels = [];
   for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
         place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({ place, address });
   }
   return new VillageState("Post Office", parcels);
};

var mailRoute = [
   "Alice's House", "Cabin", "Alice's House", "Bob's House",
   "Town Hall", "Daria's House", "Ernie's House",
   "Grete's House", "Shop", "Grete's House", "Farm",
   "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
   if (memory.length == 0) {
      memory = mailRoute;
   }
   return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
   let work = [{ at: from, route: [] }];
   for (let i = 0; i < work.length; i++) {
      let { at, route } = work[i];
      for (let place of graph[at]) {
         if (place == to) return route.concat(place);
         if (!work.some(w => w.at == place)) {
            work.push({ at: place, route: route.concat(place) });
         }
      }
   }
}

function goalOrientedRobot({ place, parcels }, route) {
   if (route.length == 0) {
      let parcel = parcels[0];
      if (parcel.place != place) {
         route = findRoute(roadGraph, place, parcel.place);
      } else {
         route = findRoute(roadGraph, place, parcel.address);
      }
   }
   return { direction: route[0], memory: route.slice(1) };
}



//EXERCISE ------------

//esta función la hice de manera similar a la funcion runRobot
// lo que adicione fue que retornara el número de turnos
function steps(robot, memory, state) {
   for (let j = 0; ; j++) {
      if (state.parcels.length == 0) {
         return j;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
   }
}

function compareRobots(robot1, memory1, robot2, memory2) {
   let tasks = 100,
      totalRobot1 = [],
      totalRobot2 = [],
      averageRobot1 = 0,
      averageRobot2 = 0;

   for (let i = 0; i < tasks; i++) {
      let villageState = VillageState.random();
      totalRobot1.push(steps(robot1, memory1, villageState));
      totalRobot2.push(steps(robot2, memory2, villageState));
   }

   averageRobot1 = Math.floor(totalRobot1.reduce((a, b) => a + b) / totalRobot1.length);
   averageRobot2 = Math.floor(totalRobot2.reduce((a, b) => a + b) / totalRobot2.length);
   console.log(`the average number of steps the robot 1 took per task is: ${averageRobot1} \nand for the robot 2 per task is: ${averageRobot2}`);
}


compareRobots(routeRobot, [], goalOrientedRobot, []);