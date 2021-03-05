// Get Current Date
function getdate() {
  const days = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
  const months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
  const dt = new Date();
  const day = days[dt.getDay()];
  const month = months[dt.getMonth()];
  const date = dt.getDate();
  const year = dt.getFullYear();
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  const seconds = dt.getSeconds();

  const fulldate = day+' '+month+'. '+date+', '+year;
  const current = month+' '+date+' '+hours+':'+minutes+':'+seconds;
  return current;
}

// Main Menu Function

$('#navOpen').click(function() {
  $('.active').removeClass('active');
  $(this).toggleClass('active');
  if ($('#navOpen').hasClass('active')) {
    $('#mainNav').css('width','100%');
    $('#notes,#items').css('display','none');
  } else {
    $('#mainNav').css('width','0');
  }
});


// Menu Selection //

$('.notes').click(() => note());

$('.checklist').click(() => checklist());

$('.calendar').click(function() {
  $('#mainNav').css('width','0');
  calendar();
});

$('.themes').click(function() {
  $('#mainNav').css('width','0');
  themes();
});

$('.settings').click(function() {
  $('#mainNav').css('width','0');
  settings();
});
