


// ===================================== Circle Process Bar ===============================
// function Circle(el) {
//     $(el).circleProcess({fill: {color: '#ff5c5c'}})
//     .on('circle-animation-progress', (event, progress, stepValue) => {
//         $(this).find('strong').text(String(stepValue.toFixed(2))+'%');
//     });
// }

// Circle('.skill-item');

$('.round1').circleProgress({
    value: 0.8
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '%');
});
$('.round2').circleProgress({
    value: 0.6
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '%');
});
