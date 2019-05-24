const tabs=[
    {nameTab: 'Name1', contextTab:'Context1'},
    {nameTab: 'Name2', contextTab:'Context2'},
    {nameTab: 'Name3', contextTab:'Context3'},
    {nameTab: 'Name4', contextTab:'Context4'}
];
let currentTab = 0;

tabs.forEach((e,i) => {
    $('.tabs .tabs_list').append(`
    <li class="tab_item" data-index="${i}">${e.nameTab}</li>
    `);
})

let showContext = function(){
    $('.tabs .tab_content').empty();
    $('.tabs .tab_content').append(`${tabs[currentTab].contextTab}`);
    $('.tabs .tab_item').removeClass('tab_item-active');
    $(`.tabs .tab_item[data-index="${currentTab}"]`).addClass('tab_item-active');
}

$('.tabs .tab_item').click(function(){
    currentTab = +$(this).attr('data-index');
    showContext();
})
showContext();

// Аккардион

tabs.forEach((e) => {
    $('.accordion').append(`
    <div class="panel" >
    <div class="panel-heading">${e.nameTab}<span> > </span></div>
    <div class="panel-content">${e.contextTab}</div>
    </div>
    `);
})

$('.panel-heading').click(function(){
    $(this).toggleClass('active').next().slideToggle();
    $('.panel-heading').not(this).removeClass('active').next().slideUp();
})