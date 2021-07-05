


// ===================================== Circle Process Bar ===============================

$('.skill-item').circleProgress({fill: 'c'})
.on('circle-animation-progress', function (event, progress) {
    var data_value = $(this).attr('data-value');
    $(this).find('strong').html(Math.round(data_value * 100 * progress) + '%');
});
