$(document).ready(function() {
  var change_assignee_btn = "<a class='icon icon-edit show_assignee_selector' href='#'> </a>";
  var button_container = " <span class='assignee_selector_button'>"+change_assignee_btn+"</span>";
  $('.issue .attribute.assigned-to .value').append(button_container);

  $('.assignee_selector_button .show_assignee_selector').on('click', function(e){
    e.preventDefault();

    var select_control = $('select#issue_assigned_to_id').clone();
    select_control.attr('id', null);
    select_control.attr('class', null);
    select_control.attr('tabindex', null);
    select_control.attr('aria-hidden', null);
    $('.issue .attribute.assigned-to .value').empty().append(select_control);

    $('.issue .attribute.assigned-to .value select').select2();
    $('.issue .attribute.assigned-to .value select').on('change', function() {
      console.log("Changed: " + $(this).val());
      $('#issue_assigned_to_id').val($(this).val());
      $('form.edit_issue').submit();
    });

    $('.assignee_selector_control').show();
  });
});
