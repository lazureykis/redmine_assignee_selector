$(document).ready(function() {
  var assigned_to_id_value = $('.issue .attribute.assigned-to .value')
  assigned_to_id_value.append(" <a class='icon icon-edit show_assignee_selector' href='#'> </a>");

  $('.show_assignee_selector').on('click', function(e){
    e.preventDefault();

    var select_control = $('select#issue_assigned_to_id').clone();
    select_control.attr('id', null)
                  .attr('class', null)
                  .attr('tabindex', null)
                  .attr('aria-hidden', null);

    assigned_to_id_value.empty().append(select_control);

    if (select_control.select2 !== undefined) {
      select_control.select2();
      select_control.select2('open');
    }

    select_control.on('change', function() {
      $('#issue_assigned_to_id').val($(this).val());
      $('form.edit_issue').submit();

      selected_username = $(this).find(':selected').text();
      assigned_to_id_value.text("Saving '" + selected_username + "'...");
    });
  });
});
