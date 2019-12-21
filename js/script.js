var most = [ 0, 0, 0, 0 ];
var n = 20;
var scores = [];
var min = 2;
var max = 5;
var sum = 0;
var who = '';

//цикл формирования списка оценок
for ( var i = 0; i < n; i++ ) {
    scores[ i ] = Math.floor( Math.random() * (max - min + 1) ) + min;
    sum += scores[ i ];
    most[ scores[ i ] - min ]++;
}

sum = Math.round( sum / n );
switch ( sum ) {
    case 5:
        who = 'отличник';
        break;
    case 4:
        who = 'хорошист';
        break;
    case 3:
        who = 'троечник';
        break;
    case 2:
        who = 'двоечник';
        break;
    default:
        who = 'не ясно кто';
}

console.clear();

console.log( 'Оценки: ' + scores );
console.log( 'Средняя оценка - ' + sum );
console.log( 'Ученик - ' + who );

i = max;

while ( i >= min ) {
    console.log( 'Кол-во ' + i + '-к: ' + most[ i - 2 ] );
    i--;
}