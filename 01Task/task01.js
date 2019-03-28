var color = prompt('Enter phone color');
var price;
var mem;
console.log(price);
switch (color.toLowerCase()) {
    case 'black':
        document.write('<img  src="img/black.jpg" height="300">');
        mem = prompt('Enter phone memory (16/32/64/128)');
        if(+mem === 16) price = 100;
        if(+mem === 32) price = 200;
        if(+mem === 64) price = 300;
        if(+mem === 128) price = 400;
        break;
    case 'silver':
        document.write('<img  src="img/silver.jpg" height="300">');
        mem = prompt('Enter phone memory (16/32/64/128)');
        if(+mem === 16) price = 110;
        if(+mem === 32) price = 210;
        if(+mem === 64) price = 310;
        if(+mem === 128) price = 410;
        break;
    case 'white':
        document.write('<img  src="img/white.jpg" height="300">');
        mem = prompt('Enter phone memory (16/32/64/128)');
        if(+mem === 16) price = 120;
        if(+mem === 32) price = 220;
        if(+mem === 64) price = 320;
        if(+mem === 128) price = 420;
        break;
    case 'yellow':
        document.write('<img  src="img/yellow.jpg" height="300">');
        mem = prompt('Enter phone memory (16/32/64/128)');
        if(+mem === 16) price = 150;
        if(+mem === 32) price = 250;
        if(+mem === 64) price = 350;
        if(+mem === 128) price = 450;
        break;
    default:
    price = 0;
    break;

}
if(price === 0) document.write('<p> No model with this color: ' + color + '</p> ');
else if(price === undefined) document.write('<p> No model with memory: ' + mem + '</p>');
else document.write('Price: ' + price + ' $');

