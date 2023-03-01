function validateForm() {
    // Get form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Validate name
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
  
    // Validate email
    if (email == "") {
      alert("Please enter your email.");
      return false;
    } else {
      // Regular expression for email validation
      var regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
    }
  
    // Validate message
    if (message == "") {
      alert("Please enter your message.");
      return false;
    }
  
    // If all fields are valid, allow form submission
    return true;
  }
  