


// ===================================== Circle Process Bar ===============================

$('.skill-item').circleProgress({fill: {gradient: ["#2A2F35", "#F4B301"]}})
.on('circle-animation-progress', function (event, progress) {
    var data_value = $(this).attr('data-value');
    $(this).find('strong').html(Math.round(data_value * 100 * progress) + '<span class="percent__skills">%</span>');
});
