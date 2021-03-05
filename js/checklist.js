// Globals

let LIST = [];
let id = 0;

const list = document.getElementById('newItem');
const CHECK = 'fas fa-check-circle';
const UNCHECK = 'far fa-circle';

function checklist() {
  $('#mainNav').css('width','0');
  $('#items').addClass('active');
  if($('#items').hasClass('active')) {
    $('#items').css('display','block');
    $('#addItem').trigger('focus');
  }else {
    $('#items').css('display','none');
  }
}

// Load Notes and Checklist

function loadList(array) {
  array.forEach(function(item){
    if (item != null) {
      addListItem(item.name, item.id);
    }
  });
}

// Load data from local storage
let data = localStorage.getItem('data');

if(data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}

// Create new item
function addListItem(text,id,done) {
  const DONE = done ? CHECK : UNCHECK;

  const item =  `<li class="item" id="${id}">
                  <i class="${DONE}"></i>
                  <p class="text" id="${id}" data="{id}">${text}</p>
                </li>`;

  const ul = document.getElementById('newItem');
  ul.insertAdjacentHTML('beforeend',item);
}

$('#addItem').keydown(function() {
  const text = $(this).val();

  if (event.keyCode == 13) {
    if (text) {
      addListItem(text,id,false);
      LIST.push(
        {
          name: text,
          id: id,
          done: false,
        }
      );
      $(this).val('');
      id++;
      localStorage.setItem('data', JSON.stringify(LIST));
    }
    else {
      return;
    }
  }
});


// Mark as Complete
$(document).on('click', 'li i',function(event) {
  let elem = this.parentElement.children[1];
  let completed = [];
  if (this.classList.value == CHECK) {
    $(this).removeClass(CHECK);
    $(this).addClass(UNCHECK);
    elem.style.textDecoration = 'none';
  } else {
    $(this).removeClass(UNCHECK);
    $(this).addClass(CHECK);
    elem.style.textDecoration = 'line-through';
  }
});


// Remove List Item
list.addEventListener('click', function(event) {
  let elem = event.target;
  if (event.target.classList.value == 'fas fa-trash-alt') {
    if (document.getElementsByClassName(CHECK)) {
      var checkedItems = document.getElementsByClassName(CHECK);
      for (i=0;i<checkedItems.length;i++) {
        var deleted = checkedItems[i].parentElement.id;
        delete LIST[deleted];
        window.localStorage.clear();
        localStorage.setItem('data', JSON.stringify(LIST));
        window.location.reload(false);
      }

    }else {
      localStorage.setItem('data', JSON.stringify(LIST));
    }
  }
});
