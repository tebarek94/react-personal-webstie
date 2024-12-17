This commit addresses multiple warnings and issues in the Signup/Login form component:

- **Accessibility Improvements**: Replaced anchor (<a>) tags with button elements to make the form more accessible, improving keyboard and screen reader support. 
- **Code Clean-up**: Removed unused imports (`Link`, `Signup`, `AllData`, `Login`) from `App.js` and `SignupLogin.js` to reduce unnecessary dependencies.
- **Form Validation**: Added basic email validation to ensure a proper email format and fixed password match validation during Signup.
- **Error Handling**: Improved error handling and display for failed login/signup attempts.
- **Styling**: Applied button styles to make the login/signup toggle more consistent and accessible.

These changes improve code quality, fix warnings, and enhance the user experience.
