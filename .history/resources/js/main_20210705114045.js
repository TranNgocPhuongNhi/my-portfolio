


// ===================================== Circle Process Bar ===============================

$('.skill-item').circleProgress({fill: {background: linear-gradient(90deg, #81EBF5 0%, #31B1CF 100%)}})
.on('circle-animation-progress', function (event, progress) {
    var data_value = $(this).attr('data-value');
    $(this).find('strong').html(Math.round(data_value * 100 * progress) + '<span class="percent__skills">%</span>');
});
