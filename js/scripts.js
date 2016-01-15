
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var distance = $("select#distance").val();
    var pace = $("select#pace").val();
    var climate = $("select#climate").val();
    var kids = $("select#kids").val();
    var money = $("select#money").val();

    if (distance === 'far' && pace === 'active' && climate === 'snow' && kids === 'no' && money === 'expensive') {
      $("#result1").show();
    }

    else if (distance === 'far' && pace === 'relaxed' && climate === 'tropical' && kids === 'no' && money === 'expensive') {
      $("#result3").show();
    }

    else if (distance === 'far' && pace === 'relaxed' && climate === 'tropical' && kids === 'no' && money === 'cheap') {
      $("#result3").show();
    }

    else if (distance === 'near' && pace === 'active' && climate === 'snow' && kids === 'no' && money === 'cheap') {
      $("#result2").show();
    }

    else if (distance === 'near' && pace === 'active' && climate === 'snow' && kids === 'yes' && money ===  'cheap') {
      $("#result2").show();
    }

    else if (distance === 'near' && pace === 'relaxed' && climate === 'snow' && kids === 'no' && money === 'expensive') {
      $("#result2").show();
    }

    else if (distance === 'far' && pace === 'relaxed' && climate === 'tropical' && kids === 'no' && money === 'expensive') {
      $("#result3").show();
    }

    else if (distance === 'near' && pace === 'relaxed' || 'active' && climate === 'tropical' && kids === 'yes' && money === 'expensive') {
      $("#result4").show();
    }

    else if (distance === 'far' && pace === 'relaxed' && climate === 'tropical' && kids === 'no' && money === 'expensive') {
      $("#result3").show();
    }







    else {
      $("#result3").show();
    }

    event.preventDefault();

  });
});
