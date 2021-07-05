


// ===================================== Circle Process Bar ===============================
// function Circle(el) {
//     $(el).circleProgress({fill: {color: '#ff5c5c'}})
//     .on('circle-animation-progress', (event, progress, stepValue) => {
//         // $(this).find('strong').text(String(stepValue.toFixed(2))+'%');
//         $(this).find('strong').html(Math.round(70 * progress) + '%');
//     });
// }

// Circle('.skill-item');

$('.round1').circleProgress({})
.on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '%');
});
$('.round2').circleProgress({
    value: 0.7
}).on('circle-animation-progress', function (event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '%');
});
