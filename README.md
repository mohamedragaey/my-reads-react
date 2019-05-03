# MyReads Project

A [React](https://reactjs.org) based bookshelf app that allows you to select and categorize books. Created for [Udacity's](https://www.udacity.com) Front End Developer Nanodegree.

## TL;DR

To get started developing right away:

* [clone](git@github.com:mohamedragaey/my-reads-react.git) repo.
* install all project dependencies with `npm install` or `yarn`
* start the development server with `npm start` or `yarn start`

## Table of Contents

- [What You're Getting](#what-you're-getting)
- [BooksAPI](#booksapi) 
- [Dependencies](#dependencies) 
- [Acknowledgements](#acknowledgements)
- [License](#licenses)

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md             # Search terms fully supported by BooksAPI.
├── package.json
├── public
│   ├── manifest.json           # For possible mobile web apps
│   └── index.html 
└── src
    ├── App.css                 # Main app styles.
    ├── App.jsx                 # App root.
    ├── BooksAPI.js             # Udacity provided backend API.
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css               # Global styles.
    ├── index.js                # DOM rendering.
    ├── Notifications.js        # Notification control functions
    ├── test                    # Test suites
    │   └── ...
    └── Components 
        ├── Book
        │   ├── Book.css        # Component styling
        │   ├── Book.jsx        # Render book data
        │   ├── BookCover.jsx   # Support component for Book
        │   ├── BookMeta.jsx    # Support component for Book
        │   ├── InfoButton.jsx  # Support component for Book
        │   ├── ShelfSelect.jsx # Support component for Book
        │   └── StarRating.jsx  # Support component for Book
        ├── BookGroup
        │   ├── BookGroup.css   # Component styling 
        │   └── BookGroup.jsx   # Render grid based book group
        ├── BookShelf
        │   ├── BookShelf.css   # Component styling
        │   └── BookShelf.jsx   # Render library w/ grouping
        ├── SearchBar
        │   ├── Searchbar.css   # Component styling
        │   └── SearchBar.jsx   # Render Search Bar
        ├── SearchPage
        │   ├── SearchPage.css  # Component styling
        │   └── SearchPage.jsx  # Page for searching for books
        └── Shelf 
            ├── Shelf.css       # Component styling
            └── Shelf.jsx       # Render library groupings
```

## BooksAPI

Backend server provided by [Udacity](https://www.udacity.com) to aid in development. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

> ### Important
> The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if not all queries respond.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Dependencies
- [create-react-app](https://github.com/facebook/create-react-app)
    - [react](https://github.com/facebook/react/)
    - [react-dom](https://www.npmjs.com/package/react-dom)
    - [react-scripts](https://www.npmjs.com/package/react-scripts)
    - [prop-types](https://www.npmjs.com/package/prop-types)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)
    - [font-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)
- [uikit](https://www.npmjs.com/package/uikit)

## Acknowledgements
Starter [code](https://github.com/udacity/reactnd-project-myreads-starter) and API provide by [Udacity](https://www.udacity.com).

## Licenses
- UIkit is licensed under the [MIT License](https://github.com/uikit/uikit/blob/HEAD/LICENSE.md)
- FontAwesome is licensed under [CC-By-4.0 and MIT](https://fontawesome.com/license/free)
- React-Fontawesom is licensed under the [MIT License](https://github.com/uikit/uikit/blob/HEAD/LICENSE.md)
- React modules are licensed under the [MIT License](https://github.com/uikit/uikit/blob/HEAD/LICENSE.md)

[top](#)

