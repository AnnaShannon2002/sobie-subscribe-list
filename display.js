$(() => {
  console.log("ready!");

  $("#formSubmit").on("click", function (e) {
    e.preventDefault(); 

    const userData = {
      validationCustom01: $("#first").val(),
      validationCustom02: $("#last").val(),
      validationCustomEmail: $("#email).val(),
    };

    if (!userData.validationCustom01 || !userData.validationCustom02 || !userData.validationCustomEmail) {
      return;
    }


    $("#outputBox").html(`
      <p><strong>First Name:</strong> ${userData.validationCustom01}</p>
      <p><strong>Last Name:</strong> ${userData.validationCustom02}</p>
      <p><strong>Last Name:</strong> ${userData. validationCustomEmail}</p>
    `);

    $("#outputCard").show();
    console.log("Submitted User Data:", userData);

    $("#chooseSource").hide(); 
  });



  $("#chooseSource").hide();
  $("#outputCard").hide();
});
