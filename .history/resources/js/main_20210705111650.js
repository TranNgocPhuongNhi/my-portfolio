


// ===================================== Circle Process Bar ===============================
// function Circle(el) {
//     $(el).circleProgress({})
//     .on('circle-animation-progress', (event, progress, stepValue) => {
//         // $(this).find('strong').html(String(stepValue.toFixed(2))+'%');
//         $(this).find('strong').html(Math.round(70 * progress) + '%');
//     });
// }

// Circle('.skill-item');

$('.skill-item').circleProgress({})
.on('circle-animation-progress', function (event, progress) {
    
    $(this).find('strong').html(Math.round(70 * progress) + '%');
});
// $('.skill-item').circleProgress({
//     value: 0.7
// }).on('circle-animation-progress', function (event, progress) {
//     $(this).find('strong').html(Math.round(60 * progress) + '%');
// });