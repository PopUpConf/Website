import React, { Component } from 'react';
import axios from 'axios';

export default class SubscribeForm extends Component {

  submitSubscribeForm = () => {

  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-input input-lg" placeholder="Enter your email" />
        <button className="btn btn-primary btn-lg input-group-btn">Sign Up</button>
      </div>
    );
  }
}

// $.ajax({
//     type: "GET",
//     url: $form.attr("action"),
//     data: $form.serialize(),
//     cache: false,
//     dataType: "jsonp",
//     jsonp: "c", // trigger MailChimp to return a JSONP response
//     contentType: "application/json; charset=utf-8",

//     error: function(error){
//         // According to jquery docs, this is never called for cross-domain JSONP requests
//     },

//     success: function(data){
//         if (data.result != "success") {
//             var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";
//             $resultElement.css("color", "red");

//             if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
//                 message = "You're already subscribed. Thank you.";
//                 $resultElement.css("color", "black");
//             }

//             $resultElement.html(message);

//         } else {
//             $resultElement.css("color", "black");
//             $resultElement.html("Thank you!<br>You must confirm the subscription in your inbox.");
//         }
//     }
// });
