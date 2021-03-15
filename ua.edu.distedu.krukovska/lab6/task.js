function reverse(s) {
    let newString = "";
    for (let i = s.length - 1; i >= 0; i--) {
        newString += s[i];
    }
    return newString;
}

function fibonacci(n) {
    let i;
    let numbers = [];

    numbers[0] = 0;
    numbers[1] = 1;

    for (i = 2; i <= n; i++) {
        numbers[i] = numbers[i - 2] + numbers[i - 1];
    }

    return numbers;
}

function ln(n, x) {

}


function square(d) {
    return d * d / 2;
}

let trains = [
    {
        destination: 'Київ',
        number: 111,
        departureTime: '11:10',
        seatsAmount: 200,
        separateSeats: 120,
        generalSeats: 80
    },
    {
        destination: 'Львів',
        number: 112,
        departureTime: '11:59',
        seatsAmount: 100,
        separateSeats: 100,
        generalSeats: 0
    },
    {
        destination: 'Варшава',
        number: 212,
        departureTime: '11:59',
        seatsAmount: 200,
        separateSeats: 88,
        generalSeats: 112
    },
    {
        destination: 'Київ',
        number: 137,
        departureTime: '05:16',
        seatsAmount: 100,
        separateSeats: 100,
        generalSeats: 0
    },
    {
        destination: 'Дніпро',
        number: 139,
        departureTime: '22:30',
        seatsAmount: 115,
        separateSeats: 15,
        generalSeats: 100
    },
    {
        destination: 'Харків',
        number: 103,
        departureTime: '13:40',
        seatsAmount: 209,
        separateSeats: 34,
        generalSeats: 175
    },
    {
        destination: 'Львів',
        number: 119,
        departureTime: '18:00',
        seatsAmount: 100,
        separateSeats: 0,
        generalSeats: 100
    },
    {
        destination: 'Львів',
        number: 120,
        departureTime: '19:00',
        seatsAmount: 50,
        separateSeats: 50,
        generalSeats: 0
    },
    {
        destination: 'Київ',
        number: 154,
        departureTime: '15:56',
        seatsAmount: 100,
        separateSeats: 50,
        generalSeats: 50
    },
    {
        destination: 'Дніпро',
        number: 138,
        departureTime: '04:30',
        seatsAmount: 115,
        separateSeats: 100,
        generalSeats: 15
    }

]

function findTrainsToDestination(destination) {
    destination = destination.toLowerCase();
    let res = [];
    for (let item of trains) {
        console.log(destination);
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
        if (item.destination === destination.toLowerCase() &&
            (Date.parse("01/01/2001 " + time) < Date.parse("01/01/2001 " + item.departureTime))) {
            res.push(item);
        }
    }

    res.sort((a, b) => (Date.parse("01/01/2001 " + a.departureTime) > Date.parse("01/01/2001 " + b.departureTime)) ? 1 : -1);

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
