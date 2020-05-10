# Intermediate Utility Library

Everything you learn in JavaScript can be represented and remembered with a `function` you create. The goal of this project is to create an interactive utility library of all the JavaScript operations and functions you learn.

Utility libraries are an important feature of any [high level programming language](https://en.wikipedia.org/wiki/High-level_programming_language).

[jQuery](https://jquery.com/) is a library we have been using so far—it primarily helps with selecting elements on the DOM, listening for events, and manipulating the DOM, but it also has some utility functions. Other popular utility libraries: [Lodash](https://lodash.com/) (all-purpose utilities), [Math.js](https://mathjs.org/) (utilities for better mathematic functions), and [Moment.js](https://momentjs.com/) (utilities for handling dates and times).

Are you ready to build your own?

## Step 1: Fork and clone this app

What and what?

**Forking** makes a copy of someone else's Github repository and puts this copy in your own Github repositories.

**Cloning** this newly forked repository copies it onto your computer for local editing. All changes that you push will now go to your fork in your repositories.

### Walkthrough

In your coding folder on your computer, create a folder for this project.

View this page on Github. Go to the top of the page and click "Fork".

If given the option, select your username.

You will be taken to a new repo under your Github username. Click "Clone or download", and copy the URL you are given.

In your terminal, go to the folder you created for this project.

Enter the following:

`git clone TheUrlYouCopiedFromGithub .` **Note the period at the end!**

This will clone the forked repo into the folder you've created.

You don't need to do anything else to connect it to Github. All your changes will be pushed to the right repo. Simply make changes then commit & push!

### More reading

[Difference between Git Clone and Git Fork](https://www.toolsqa.com/git/difference-between-git-clone-and-git-fork/)

[What is the difference between Forking and Cloning on GitHub?](https://stackoverflow.com/questions/7057194/what-is-the-difference-between-forking-and-cloning-on-github)

[How do you clone a Git repository into a specific folder?](https://stackoverflow.com/questions/651038/how-do-you-clone-a-git-repository-into-a-specific-folder)

## Step 2: Add JavaScript functions to your library

Create simple functions that demonstrate a working knowledge JavaScript operations and functions. Create your own name for each function—**the name must be unique** and must be the same for the function in `functions.js` and `index.html`. Write a short description that makes sense for you. In the comments of your function, list the arguments and the return value this function accepts.

Add functions to the `functions.js` file.

Add a new Bootstrap column to `index.html` by copying and pasting everything between and including `<!-- start column -->` and `<!-- end column -->` editing the **function name**, its **description**, and **the number of inputs** it has.

Here's an example using "Add Two Numbers with JavaScript":

In `index.html`:

```html
<!-- start column -->
<div class="col-12 col-lg-8 offset-lg-2 mb-5">
   <p class="name"><b>add</b> - Add two values together</p>
   <pre style="display: none;"><code></code></pre>
   <div class="actions float-right">
      <input type="text" class="form-control inline-action" />
      <input type="text" class="form-control inline-action" />
      <button class="btn btn-primary inline-action">
         Run
      </button>
   </div>
   <div class="clearfix mb-3"></div>
   <div class="alert alert-primary" style="display: none;"></div>
   <div class="alert alert-danger" style="display: none;"></div>
</div>
<!-- end column -->
```

In `functions.js`:

```javascript
function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}
```

### List of functions

**Complete everything up to and including "Stand in Line"** from [JavaScript Algorithms and Data Structures Certification > Basic JavaScript](https://www.freecodecamp.org/learn/). As you complete each one, create simple utility functions that demonstrate a working knowledge of the following lessons (you will do all the lessons in this FreeCodeCamp section, but make utility functions for these):

-  Add Two Numbers with JavaScript
-  Subtract One Number from Another with JavaScript
-  Multiply Two Numbers with JavaScript
-  Divide One Number by Another with JavaScript
-  Increment a Number with JavaScript
-  Decrement a Number with JavaScript
-  Multiply Two Decimals with JavaScript
-  Divide One Decimal by Another with JavaScript
-  Concatenating Strings with Plus Operator
-  Concatenating Strings with the Plus Equals Operator
-  Constructing Strings with Variables
-  Find the Length of a String
-  Use Bracket Notation to Find the First Character in a String
-  Use Bracket Notation to Find the Nth Character in a String
-  Use Bracket Notation to Find the Last Character in a String
-  Use Bracket Notation to Find the Nth-to-Last Character in a String
-  Manipulate Arrays With push()
-  Manipulate Arrays With pop()
-  Manipulate Arrays With shift()
-  Manipulate Arrays With unshift()
-  Shopping List
-  Stand in Line

## Step 3: Apply your learning to White Bear

### On `index.html`

When the user clicks "Let's go!" or "Log in" check that the respective email field is not blank. If the email is blank, show an error message below the input that says, "Please enter your email address." and use Bootstrap 4 classes to style the input with error validation.

When the user clicks "Let's go!" or "Log in" check that the respective password field is not less than 9 characters. If the password is less than 9 characters, show an error message below the input that says, "Your password must be at least 9 characters." and use Bootstrap 4 classes to style the input with error validation. If the password field is blank, the "Please enter your password." error message should display instead.

When the user clicks "Let's go!" or "Log in" check that the respective password field is not blank. If the password is blank, show an error message below the input that says, "Please enter your password." and use Bootstrap 4 classes to style the input with error validation. This error message takes priority over the "Your password must be at least 9 characters." error message.

### On `create-answer.html`

Make the character counter count characters. For every character entered in the textarea, display the amount of characters in the part of the character counter that precedes the forward slash—for example, the `55` in `55/240`.

Make the "Next" button disabled by default. When the textarea has > 0 characters and <= 240 characters in it, enable the button. If it has 0 or > 240 characters, disable it.

Change the color of the entire character counter (`241/240`) to `$danger` if the characters in the textarea > 240 characters. The user may type as much as they want and the character counter will keep increasing.

## Step 4: Repeat this process with the next repo

[Intermediate Utility Library](https://github.com/punchcode-fullstack/intermediate-utility-library)
