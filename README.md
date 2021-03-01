# Message Board
This project is a [Message Board](https://en.wikipedia.org/wiki/Internet_forum). The purpose of this project was to apply my self-taught knowledge of the [MERN stack](https://www.mongodb.com/mern-stack). The site is deployed [here](https://determined-ride-a26e1f.netlify.app/).
## Usage
The site is deployed [here](https://determined-ride-a26e1f.netlify.app/). Backend was deployed using [Heroku](https://www.heroku.com/free) and frontend was deployed using [Netlify](https://www.netlify.com/).
## Project specification
This Message Board is a version of an [Imageboard](https://en.wikipedia.org/wiki/Imageboard). The message board is made up of Threads. Each Thread is comprised of a series of messages. There are two types of messages:
1. Original Message which is the main or starting message for each Thread. The Original Message will have an image, title, message, creation date, and reply button. The image can be optional.
2. Reply Message which is a reply message to the Original Message. The Reply Message will have an image, message, and creation date. The image can be optional.

The Messageboard will have the following constraints:
1. The Messageboard will have a maximum of 3 Threads.
2. Each Thread will have one Original Message.
3. Each Thread will have a maximum of 3 Reply Messages.

The Messageboard will support [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations:
1. CREATE operation: Users can start a Thread by submitting an Original Message using a form.
2. READ operation: Threads are read from the database whenever the webpage loads or a new message is made.
3. UPDATE operation: A Thread is updated whenever a reply is made to the Original Message, i.e. whenever a Reply Message is created.
4. DELETE operation: Users cannot delete a Thread directly. But, the oldest Thread is deleted whenever a new Thread is created and the Thread maximum limit has been reached. Reply Messages cannot be deleted but when the reply limit is reached, the reply button is disabled for that Thread. 

Lastly, an error page should be displayed whenever a CRUD operation results in an error, and circular progression animation is shown whenever a CRUD operation is made.

## Bugs and Issues
Only [Black box-testing](https://en.wikipedia.org/wiki/Black-box_testing) of the application was made. Currently, the only issue found is that whenever the Clear button of the form is clicked, the filename of a chose input file is not cleared but the file itself is cleared. 

## Improvements

* The UI design is very bland and should be more welcoming.
* Every image that is uploaded is first converted into Base64 string then stored into the MongoDB. This can cause issues when dealing with large image files and with many requests to the database. A better design would be to store the image onto a filesystem and store the location address to the database.
* Both OriginalMessage and ReplyMessager componenets share similar code since they both are messages. In order to adhere to the [DRY Principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), the rendering code should be extracted to another component, named Message, ,and have OriginalMessage and ReplyMessager use Message.
* Use [Formik](https://formik.org/) to create and validate forms.
* Add the option to reply to other replies. 