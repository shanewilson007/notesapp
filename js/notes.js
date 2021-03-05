let NOTES = [];
let ids = 0;

function note() {
  $('#mainNav').css('width','0');
  $('#notes').addClass('active');
    if ($('#notes').hasClass('active')) {
      $('#notes').css('display','block');
    } else {
      $('#notes').css('display','none');
    }
}

// Load Notepad
let notes = localStorage.getItem('notes');

if(notes) {
  NOTES = JSON.parse(notes);
  ids = NOTES.length;
  loadList(NOTES);
} else {
  NOTES = [];
  id = 0;
}

// Add Note
$('#addNote').keydown(function() {
  const text = $(this).val();

  if (event.keyCode == 13) {
    if (text) {
      $(this).val('');
      const span = document.createElement('span');
      
      span.setAttribute('class', 'noteSpan');
      span.innerHTML = text;
      document.getElementById('newNote').appendChild(span);
      localStorage.setItem('notes', JSON.stringify(NOTES));
    } 
    else {
      return;
    }
  }
});

// Remove Note
$(document).on('click','.noteSpan',function() {
  if (confirm('Remove Item from List?')) {
    this.parentElement.removeChild(this);
  }
  else {
    return;
  }
});

$(document).on('click','.checkSpan',function() {
  this.parentElement.removeChild(this);
});
