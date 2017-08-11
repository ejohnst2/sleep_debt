function getSleepHours (day) {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 8;
    } else if (day === 'wednesday') {
        return 8;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 8;
    } else if (day === 'sunday') {
        return 8;
    }
}

function getActualSleepHours() {
    return getSleepHours ('monday') + getSleepHours ('tuesday') + getSleepHours ('wednesday') + getSleepHours ('thursday') + getSleepHours ('friday') + getSleepHours ('saturday') + getSleepHours ('sunday')
}

function getIdealSleepHours() {
    var idealHours = 8
    return (idealHours * 7)
}

function calculateSleepDebt() {
    var actualSleepHours = getActualSleepHours()
    var idealSleepHours = getIdealSleepHours()

    if (actualSleepHours === idealSleepHours) {
        console.log ('You got the perfect amount');
    } else if (actualSleepHours < idealSleepHours) {
        console.log ('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you should');
    } else if (actualSleepHours > idealSleepHours) {
        console.log ('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you should');
    }
}

calculateSleepDebt()
