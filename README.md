# SQL-TO-FORM-JS

### <strong>sql-to-form-js</strong> is a js library to create HTML forms, complete with validations, from SQL queries.

#

> It is mainly designed for back-end developers, who want to create quick forms to test their back-end code.

> Since it uses SQL syntax, developers do not have to learn anything new.

> It uses my nativeValidatejs library for form validation, so there is no third-party dependencies involved.

> Everything is written natively, so it runs fast, without any bulkness from unnecessary packages.

> Along with displaying the form, you can also export it to HTML, which speeds up front-end development.

## Example:
<code>Create form mailetter<br>
&nbsp;&nbsp;with request post:https://mailletter.api<br>
&nbsp;&nbsp;with headers: {}<br>
&nbsp;&nbsp;with validationClassName:"validatemychildren"<br>
&nbsp;&nbsp;with styles:[]<br>
&nbsp;&nbsp;with class:['row mx-0']<br>
&nbsp;&nbsp;with controls:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//control 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;control: textbox<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with label:Email<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with placeholder:Enter your email<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with type:email<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with validations:[required,maxlength:50]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with styles:[{color:'blue'}]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with class:['form-control col-lg-6']<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end control<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//control 2<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;control:button<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with label:Submit<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with type:submit<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with tooltip:'click here to submit'<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with disableIfFormInvalid:true<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with class:['btn btn-primary']<br>
&nbsp;&nbsp;end controls;</code>