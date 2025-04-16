// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  $("#outputCard").hide();
  
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault();
        
        const userData = {
        first: $("#validationCustom01").val(),
        last: $("#validationCustom02").val(),
        email: $("#validationCustomEmail").val()
        };

        $("#outputBox").html(`
          <p><strong>First Name:</strong> ${userData.first}</p>
          <p><strong>Last Name:</strong> ${userData.last}</p>
          <p><strong>Email:</strong> ${userData.email}</p>
        `);

        $("#outputCard").show();

        console.log("Submitted User Info:", userData);
      }

      form.classList.add('was-validated')
    }, false);
  });
});
