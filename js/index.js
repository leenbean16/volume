$(document).ready(function() {
    console.log("Ready.");
})

$(".sign-in").click(function() {
    $("#modal-two").removeClass('hide');
    $("#modal-two").modal('show');
})

$('#submit-login').click(function() {
    var sql = "INSERT INTO users (id, firstname, lastname, email, password) VALUES ('3', 'Lana', 'shamoon', 'lanashamoon@yahoo.com', 'lahana12')";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})

$(".sign-up").click(function() {
    $("#modal-one").removeClass("hide");
    $("#modal-one").modal("show");
})
