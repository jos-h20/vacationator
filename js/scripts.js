
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
      $("#result6").show();
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

    else if (distance === 'far' && pace === 'relaxed' && climate === 'snow' && kids === 'no' && money === 'expensive') {
      $("#result7").show();
    }

    else if (distance === 'near' && pace === 'active' && climate === 'tropical' && kids === 'yes' && money === 'expensive') {
      $("#result5").show();
    }

    else if (distance === 'near' && pace === 'active' && climate === 'tropical' && kids === 'yes' && money === 'cheap') {
      $("#result8").show();
    }

    else if (distance === 'near' && pace === 'relaxed' && climate === 'tropical' && kids === 'yes' && money === 'expensive') {
      $("#result8").show();
    }

    else if (distance === 'far' && pace === 'active' && climate === 'tropical' && kids === 'yes' && money === 'expensive') {
      $("#result9").show();
    }

    else if (distance === 'far' && pace === 'relaxed' && climate === 'tropical' && kids === 'yes' && money === 'expensive') {
      $("#result9").show();
    }

    else if (distance === 'near' && pace === 'relaxed' && climate === 'tropical' && kids === 'yes' && money === 'cheap') {
      $("#result4").show();
    }

    else if (distance === 'near' && pace === 'active' && climate === 'tropical' && kids === 'no' && money === 'expensive') {
      $("#result5").show();
    }

    else if (distance === 'far' && pace === 'active' && climate === 'tropical' && kids === 'no' && money === 'expensive') {
      $("#result10").show();
    }

    else if (distance === 'near' && pace === 'relaxed' && climate === 'tropical' && kids === 'no' && money === 'expensive') {
      $("#result5").show();
    }

    else if (distance === 'near' && pace === 'active' && climate === 'tropical' && kids === 'no' && money === 'expensive') {
      $("#result5").show();
    }

    else if (distance === 'near' && pace === 'active' && climate === 'tropical' && kids === 'no' && money === 'cheap') {
      $("#result11").show();
    }

    else if (distance === 'near' && pace === 'relaxed' && climate === 'tropical' && kids === 'no' && money === 'cheap') {
      $("#result12").show();
    }

    else if (distance === 'far' && pace === 'active' && climate === 'tropical' && kids === 'no' && money === 'cheap') {
      $("#result6").show();
    }







    else {
      $("#result2").show();
    }

    event.preventDefault();

  });
});
