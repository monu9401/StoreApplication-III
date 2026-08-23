# StoreApplication-III
An application to manage products available in the store(with the latest tech stack).

Tech Stack: Java, Spring Boot, REST APIs, Spring Data JPA, Angular, Typescript, HTML, CSS

This application has a main window, where all products available in the store are listed. Next to every product, there are two action buttons: update and delete. The update button opens a new window, where user can update the details of the product. The delete button deletes the product. At the bottom of the main window, is another button to insert a new product. This button opens a new window to specify the details of the new product.

This application is developed using Spring Boot and details of all products are stored in MySQL database. The database operations are performed using JPA. The UI is created using Angular. The build tool used for the backend application is Maven.

Anyone who wishes to use this application must follow the following steps:
1. Clone this repository in your local. The main folder structure consists of 2 subfolders: CrudAppService and CrudAppUI.
2. Import the CrudAppService project folder into any one of the following IDE: Eclipse/IntelliJ/NetBeans/SpringToolSuite.
3. Make sure Tomcat Server is installed on the IDE.
4. Run an instance of MySQL with the username "root". Make sure the password of the MySQL instance is "12345678".
5. Create a database named "demo" in the same instance.
6. Build the project using Maven.
7. Run the project on the Tomcat Server. By default, it should run on port: 9000.
8. Import the CrudAppUI project folder into VSCode IDE.
9. Make sure NodeJS, NPM and Angular are installed in the system.
10. Open a terminal in the project directory and run **npm install** to install all required dependencies.
11. Run the project using **ng serve**. By default, it should run on port: 4200.
12. Access the application on the browser with the following link: http://localhost:4200.
