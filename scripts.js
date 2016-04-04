//business logic
function Contact(first, last, town, email) {
  this.firstName = first;
  this.lastName = last;
  this.homeTown = town;
  this.emailAddress = email;
}

//user interface logic
$(document).ready(function(){
  $("form#new-contact").submit(function(event) {
   event.preventDefault();
  //  alert("test")
   var inputFirstName = $("input#new-first-name").val();
   var inputLastName = $("input#new-last-name").val();
   var inputHomeTown = $("input#new-home-town").val();
   var inputEmail = $("input#new-email").val();

   var newContact = new Contact(inputFirstName, inputLastName, inputHomeTown, inputEmail);

   $("ul#contacts").append("<li><span class='contact'>" + newContact.lastName + "</span></li>");

   $(".contact").last().click(function() {
     $("#show-contact").show();
     $("#show-contact h2").text(newContact.firstName);
     $(".first-name").text(newContact.firstName);
     $(".last-name").text(newContact.lastName);
     $(".home-town").text(newContact.homeTown);
     $(".email-address").text(newContact.emailAddress);

   });

   $("input#new-first-name").val("");
   $("input#new-last-name").val("");
   $("input#new-home-town").val("");
   $("input#new-email").val("");

 });
});
