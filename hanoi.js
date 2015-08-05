var hanoi = function (disc, A, B, C){
	if(disc > 0){
		hanoi(disc - 1, A, C, B);
		document.writeln('移动盘子 ' + disc + ' from ' + A + ' to ' + C + '<br>');
		hanoi(disc - 1, B, A, C);
	}
};

hanoi(4, 'A', 'B', 'C');