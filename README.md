# Angular Cinema

Welcome to my Angular Cinema Web App! With this app, you can view the films and showings available at my fictional cinema. This is a testing ground for me to improve at Angular and leave no stone unturned. I hope you enjoy!

# Prerequisites

1. Download and install [Node.js and npm](https://nodejs.org/en/download/)
2. Download and install [Git](https://git-scm.com/downloads)
3. Download and install either [Google Chrome](https://www.google.com/chrome/) or [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/download/thanks/)

# Installation steps

### Copy and paste the following commands in a Visual Studio Code terminal:

```
git clone https://github.com/andrewfellenz/cinema
```

```
cd cinema/cinema
```

```
npm i
```

```
npm start
```

### Run the following command in a _second_ vscode terminal:

```
cd ../server
```

```
npm i
```

```
node ./server.js
```

### Open google chrome and type the following link into the address bar:

http://localhost:4200

# Available Features

### User facing screens:

1. A home screen: http://localhost:4200/
2. A screen that displays all of the movie showings available to customers: http://localhost:4200/showings
3. A screen that displays all the films for which the theatre is currently running showings: http://localhost:4200/films
4. A screen to purchase tickets for the showing of the customer's choice: http://localhost:4200/buy-tickets/110 <-- Must include a valid showing ID
5. A screen to select the seats to associate with the user's tickets: http://localhost:4200/select-seats <-- must first buy tickets on screen #4 above

### Manager facing screens:

1. A manger tools screen: http://localhost:4200/management-tools
2. A screen to add a showing: http://localhost:4200/add-showing
3. A screen to show all existing showings and allow for editing or deleting: http://localhost:4200/edit-showing

# Navigating the App

1. To get a feels for the site, first look at the available films, in screen #3.
2. Try browsing the available showings and selecting one to buy tickets!
3. Select the number of tickets you would like to purchase then go on to the theatre screen!
4. Click seats to select them. If you change your mind, you can click any seat again to deselect it.
5. Click the "book seats" button. Please note that this feature currently only routes back to home and does not save ticketing information.
6. Click manager tools and add a new showing!
7. Click edit showings and change the new showing you just added. Try saving your edits.
8. Consider deleting a showing!

# Incomplete Features

1. Register and Sign In buttons just route back to home currently.
2. There is no user info saved.
3. Tickets are not saved and showing info and ticket info is not linked together.
4. There will be a feature allowing the adding of other films.
5. There will be user account info and the ability to edit or delete user account information.
