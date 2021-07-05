


// ===================================== Circle Process Bar ===============================

$('.skill-item').circleProgress({fill: {color: '#F4B301'}})
.on('circle-animation-progress', function (event, progress) {
    var data_value = $(this).attr('data-value');
    $(this).find('strong').html(Math.round(data_value * 100 * progress) + '<span class="percent_">%</span>');
});
