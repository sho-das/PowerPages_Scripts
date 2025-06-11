// Optimised Power Pages Contact Lookup - Minimal Code
$(document).ready(function() {
    $("#px_contact").on("change", function() {
        var contactId = $(this).val()?.replace(/[{}]/g, "");
        var emailField = $("#px_email");
        var mobileField = $("#px_mobile");
       
        if (contactId) {
            $.get("/_api/contacts(" + contactId + ")?$select=emailaddress1,mobilephone")
                .done(function(data) {
                    emailField.val(data.emailaddress1 || "");
                    mobileField.val(data.mobilephone || "");
                })
                .fail(function() {
                    console.log("Failed to fetch contact data");
                });
        } else {
            emailField.val("");
            mobileField.val("");
        }
    });
});