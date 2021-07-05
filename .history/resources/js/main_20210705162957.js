




// ===================================== Circle Process Bar ===============================

$('.skill-item').circleProgress({fill: {gradient: ["red", "orange"]}})
.on('circle-animation-progress', function (event, progress) {
    var data_value = $(this).attr('data-value');
    $(this).find('strong').html(Math.round(data_value * 100 * progress) + '<span class="percent__skills">%</span>');
});
