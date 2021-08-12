
Note: This app is a second iteration of another repository. This version is built with React, while the previous version was built with only simple JavaScript and HTML. You can view the original project and its commits [https://github.com/hopebradley/project-phase1](here).

# MetSearch

MetSearch is an easy-to-use tool that allows a user to access the thousands of artworks in the Metropolitan Museum of Art database, one at a time and according to a certain criteria. The application supports a search-by-keyword method as well as a category choosing method.

# Installation:

After cloning MetSearch onto your local machine, run:
### `bundle install`

In the project directory, you can run:
### `yarn start`
This will open the app on [http://localhost:3000](http://localhost:3000).

# Using the App

When MetSearch loads, there is both a search bar and a drop down menu. When a keyword is submitted or an option from the menu is chosen, a random artwork from an array of keyword or department related artwork objects will be displayed below.

The first artwork you see upon loading the application is a random piece related to flowers-- this is an example keyword.

Sometimes, it might seem like the displayed artwork is unrelated to the typed keyword. This is because the search-by-keyword feature searches ALL properties of the artwork for this keyword, not just the title. Your keyword may be found in the title, but it could also be found in the artist's name, the department name, the time period, the category, you name it. Therefore, although the art shown is always connected somehow to the keyword, it might not be obvious.

# Acknowledgments

The Metropolitan Museum of Art has an amazing public API that allows access to all the artworks in this project!

The link to the API and its instructions is here: https://metmuseum.github.io/

The link to the Met's github page is here: https://github.com/metmuseum/

# Contact Me

### Hope Bradley
Email: hope.e.bradley@gmail.com
LinkedIn: https://www.linkedin.com/in/hopebradl3y/
Blog: <a href="https://hopebradley.com">hopebradley.com</a>