# Angular Cinema

Steps for installing running the program:

1. Run the following command in a Visual Studio Code terminal: git clone https://github.com/andrewfellenz/cinema
2. Change directory into the this new repository folder
3. Open a second terminal instance in VSCode
4. In your second terminal copy and paste this command: node server/server.js
5. In your first terminal change directory to the correct folder with this command: cd cinema
6. Run this command: npm i
7. Run this command: ng serve
8. The application should now be running!

# Available features

The app currently has the following features

User facing screens:

1. A home screen: http://localhost:4200/
2. A screen that displays all of the movie showings available to customers: http://localhost:4200/showings
3. A screen that displays all the films for which the theatre is currently running showings: http://localhost:4200/films
4. A screen to purchase tickets for the showing of the customer's choice: http://localhost:4200/buy-tickets/110 <-- Must include a valid showing ID
5. A screen to select the seats to associate with the user's tickets: http://localhost:4200/select-seats <-- must first buy tickets on screen #4 above

Manager facing screens:

6. A manger tools screen: http://localhost:4200/management-tools
7. A screen to add a showing: http://localhost:4200/add-showing
8. A screen to show all existing showings and allow for editing or deleting: http://localhost:4200/edit-showing

# Using the site

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
