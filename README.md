# BookStore-frontend

This is drontend for app which is able to store book entries and list them using REST API.

##### PREREQUISITES:

- Angular 8 

Build your angular project by typing:

    ng build
  
Copy folder conent from /dist/book-store to backend's /resources/static

Build your Maven project by typing:

            mvn clean
            mvn package

You have to use this command in project's root directory.

Copy .war file from /target/demo.war -> {tomcatPath}/webapps.
Then go to {tomcatpath}\bin\catalina.bat run and run following command.



If everything went properly you should be able to run application.

You can use the app in your browser by going to:

http://127.0.0.1:8080/demo
