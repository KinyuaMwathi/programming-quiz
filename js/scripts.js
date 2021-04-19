$(document).ready(function() {
  $("form#quizForm").submit(function(event) {
    event.preventDefault();
    const htmlQuestion = $("select#htmlQuestion").val();
    const javascriptQuestion01 = $("select#javascriptQuestion01").val();
    const javascriptQuestion02 = $("select#javascriptQuestion02").val();
    const jqueryQuestion = $("select#jqueryQuestion").val();
    let result = 0;

    if(htmlQuestion === 'Tim Berners-Lee') {
      result = result + 1;
    } else {
      result = result + 0;
    }

    if(javascriptQuestion01 === 'Bootstrap') {
      result = result + 1;
    } else {
      result = result + 0;
    }

    if(javascriptQuestion02 === '2015') {
      result = result + 1;
    } else {
      result = result + 0;
    }

    if(jqueryQuestion === 'John Resig') {
      result = result + 1;
    } else {
      result = result + 0;
    }

    $("#testScore").text(result);
    $("#score").show();
  });
});