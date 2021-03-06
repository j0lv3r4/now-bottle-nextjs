import { Auth } from "aws-amplify";

async function signIn(username, password) {
  try {
    const user = await Auth.signIn(username, password);
    console.log("user logged in!", user);
  } catch (err) {
    console.log("Error trying to sign in", err);
    // if (err.code === "UserNotConfirmedException") {
    //   // The error happens if the user didn't finish the confirmation step when signing up
    //   // In this case you need to resend the code and confirm the user
    //   // About how to resend the code and confirm the user, please check the signUp part
    // } else if (err.code === "PasswordResetRequiredException") {
    //   // The error happens when the password is reset in the Cognito console
    //   // In this case you need to call forgotPassword to reset the password
    //   // Please check the Forgot Password part.
    // } else if (err.code === "NotAuthorizedException") {
    //   // The error happens when the incorrect password is provided
    // } else if (err.code === "UserNotFoundException") {
    //   // The error happens when the supplied username/email does not exist in the Cognito user pool
    // } else {
    //   console.log(err);
    // }
  }
}

export default signIn;
