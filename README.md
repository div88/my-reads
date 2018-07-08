#MyReads

In the MyReads project, a bookshelf app is created whihc allows user to select and categorize books users have read, are currently reading, or want to read. 

The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Table of Contents

- [Application Set Up](#application-setup)
- [Project Specifications](#project-specifications)
- [Contribution](#contribution)

## Application SetUp

* Clone or download the project from [here](https://github.com/div88/my-reads.git)
* Type 'npm install' in terminal to install all the necessary packages.
* 'npm start' to start and the project locally and can be viewed in browser at 'localhost:3000'


## Project Specifications

### Main Page
The main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. 

The three shelves are:
* Currently Reading
* Want to Read
* Read

A book has the same state on both the main application page and the search page.

### Search Page

The search page has a text input that may be used to find books. 

As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. 

A book has the same state on both the main application page and the search page.

The search page has a link to home page.

On navigating back to the main page from the search page, user should instantly see all of the selections made on the search page in users library.

## Contribution

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).





