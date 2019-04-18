var areasIteam = document.querySelectorAll('.areas__item');

var clickHandler = function(event){

    var target = this.querySelector('.area');
    if (event.target.className !== target.className) {
            return;
          }
    var circleElement = document.createElement('div');
    var colorInput = this.querySelector('.areas__item-color');
    var color = colorInput.value;
    circleElement.classList.add('circle');
    circleElement.style.top = event.offsetY + 'px';
    circleElement.style.left = event.offsetX + 'px';
    circleElement.style.backgroundColor = color;

    var selectBlock = this.querySelector('.selFigure');
    var figure = selectBlock.querySelector('input:checked');
    var heightFigure = selectBlock.querySelector('input[name="height"]');
    var widthFigure = selectBlock.querySelector('input[name="width"]');
    switch(figure.value){
        case 'circle':
        circleElement.style.height = heightFigure.value + 'px';
        circleElement.style.width = heightFigure.value + 'px';
        break;
        case 'square':
        circleElement.style.height = heightFigure.value + 'px';
        circleElement.style.width = heightFigure.value + 'px';
        circleElement.style.borderRadius = 0;
        break;
        case 'rectangle':
        circleElement.style.height = heightFigure.value + 'px';
        circleElement.style.width = widthFigure.value + 'px';
        circleElement.style.borderRadius = 0;
        break;
        case 'oval':
        circleElement.style.height = heightFigure.value + 'px';
        circleElement.style.width = widthFigure.value + 'px';
        circleElement.style.borderRadius = 50 + '%';
        break;

    }
    target.appendChild(circleElement);
    
}
for (var i = 0; i < areasIteam.length; i++) {
    areasIteam[i].addEventListener('click',clickHandler);
    
}