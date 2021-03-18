function reverse(s) {
    let newString = "";
    for (let i = s.length - 1; i >= 0; i--) {
        newString += s[i];
    }
    return newString;
}

function fibonacci(n) {
    let numbers = [];

    numbers[0] = 0;
    numbers[1] = 1;

    for (let i = 2; i <= n; i++) {
        numbers[i] = numbers[i - 2] + numbers[i - 1];
    }

    return numbers;
}

function lnTaylorSeries(n, x) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += ((Math.pow(-1, i + 1) * Math.pow(x, i)) / i);
    }
    return result;
}

function Train(destination, number, departureTime, seatsAmount, separateSeats, generalSeats) {
    this.destination = destination;
    this.number = number;
    this.departureTime = departureTime;
    this.seatsAmount = seatsAmount;
    this.separateSeats = separateSeats;
    this.generalSeats = generalSeats;
}

let trains = [
    new Train('Київ', 111, "11:10", 200, 120, 80),
    new Train('Львів', 112, "11:59", 100, 100, 0),
    new Train('Варшава', 212, "11:59", 200, 88, 112),
    new Train('Київ', 137, "05:16", 100, 100, 0),
    new Train('Дніпро', 139, "22:30", 115, 15, 100),
    new Train('Харків', 103, "13:40", 209, 34, 175),
    new Train('Львів', 119, "18:00", 100, 0, 100),
    new Train('Львів', 120, "19:00", 50, 50, 0),
    new Train('Київ', 154, "15:56", 100, 50, 50),
    new Train('Дніпро', 138, "04:30", 115, 100, 15),
];


function findTrainsToDestination(destination) {
    destination = destination.toLowerCase();
    let res = [];
    for (let item of trains) {
        if (item.destination.toLowerCase() === destination) {
            res.push(item);
        }
    }
    return res;
}

function findTrainsToDestinationAfterTime(destination, time) {
    let res = [];
    destination = destination.toLowerCase();

    for (let item of trains) {
        if (item.destination.toLowerCase() === destination &&
            (Date.parse("01/01/2001 " + time) < Date.parse("01/01/2001 " + item.departureTime))) {
            res.push(item);
        }
    }

    res.sort((a, b) => (Date.parse("01/01/2001 " + a.departureTime) >
        Date.parse("01/01/2001 " + b.departureTime)) ? 1 : -1);
    return res;
}

function findTrainsToDestinationWithSeats(destination) {
    destination = destination.toLowerCase();

    let res = [];
    for (let item of trains) {
        if (item.destination.toLowerCase() === destination && item.generalSeats > 0) {
            res.push(item);
        }
    }

    res.sort((a, b) => (a.generalSeats > b.generalSeats) ? 1 : -1);
    return res;
}
