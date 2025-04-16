$(() => {
  console.log("ready!");

  $("form").on("submit", function (e) {
    e.preventDefault();

    const userData = {
      first: $("#validationCustom01").val(),
      last: $("#validationCustom02").val(),
      email: $("#validationCustomEmail").val()
    };

    if (!userData.first || !userData.last || !userData.email) {
      alert("Please fill in all fields.");
      return;
    }


    $("#outputBox").html(`
      <p><strong>First Name:</strong> ${userData.first}</p>
      <p><strong>Last Name:</strong> ${userData.last}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
    `);

    $("#outputCard").show();


    console.log("Submitted User Info:", userData);
  });

  $("#outputCard").hide();
});
