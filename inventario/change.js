$("#mostrar-precio").change(function() {
  if ($(this).val() == "1") {
    $('#priceshow').show();
    } else {
    $('#priceshow').hide();
    }
});
$("#mostrar-precio").trigger("change");
