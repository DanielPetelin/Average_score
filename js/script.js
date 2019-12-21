//кол-во полученных учеником оценок
var n = 20;
//массив, содержащий оценки ученика
var scores = [];
//минимальная оценка, которую может получить ученик
var min = 2;
//максимальная оценка, которую может получить ученик
var max = 5;
//средняя арифметическая оценка ученика
var sum = 0;
//определение переменной содержащей определение ученика
var who = '';
var most = [ 0, 0, 0, 0 ];

//цикл формирования списка оценок
for ( var i = 0; i < n; i++ ) {
	scores[i] = Math.floor( Math.random() * (max - min + 1) ) + min;
    sum += scores[i];
    most[ scores[i] - min ]++;
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

console.log( 'Оценки: ' + scores );
console.log( 'Средняя оценка - ' + sum );
console.log( 'Ученик - ' + who );