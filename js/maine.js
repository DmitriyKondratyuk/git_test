
$(function() {
  $('button').click(function() {
    var but = $(this);
    var time = 30; //задаем время в течении которого кнопка будет не активна
    var timeInterval = setInterval(function() {

      if (time <= 0) {
        clearInterval(timeInterval);
      }
      if (time == 0) {
        $(but).children('span').html("");
        $(but).prop("disabled", false);
      } else {
        $(but).children('span').html(time);
        $(but).prop("disabled", true);
      }
      time = time - 1;
    }, 1000);

  });
});