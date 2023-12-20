# Node.js Web Server with GET and POST Routing

This project demonstrates the construction of a simple Node.js web server capable of handling both GET and POST requests. The server responds to GET requests with basic messages and processes POST requests by parsing and displaying the submitted data.

## Getting Started

Follow these instructions to set up and run the Node.js web server locally for development and testing.

### Prerequisites

- Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installing Dependencies

Navigate to the project directory and install the required dependencies using npm:

```bash
npm install
```

### Running the Server

Start the Node.js server using the following command:

```bash
npm start
```

The server will be running at [http://localhost:3000/](http://localhost:3000/).

## Usage

### GET Requests

- Access the root path: [http://localhost:3000/](http://localhost:3000/)
- Access the about page: [http://localhost:3000/about](http://localhost:3000/about)
- Access the home page: [http://localhost:3000/about](http://localhost:3000/home)

### POST Requests

Send a POST request using tools like curl or Postman to [http://localhost:3000/submit](http://localhost:3000/submit). Include form data in the request body.

Example using curl:

```bash
curl -X POST -d "param1=value1&param2=value2" http://localhost:3000/submit
```
You can as well use Postman to test the POST request. Here is how you do it.
1. Install Postman:
If you haven't installed Postman yet, you can download and install it from the official website.

2. Start Your Node.js Server:
Ensure that your Node.js server is running. If you're using nodemon or a similar tool, make sure your server is active.

3. Open Postman:
Launch the Postman application.

4. Create a New Request:

Click on the "New" button in the top-left corner.
Choose "Request" and give your request a meaningful name.

5. Set Request Type to POST:
In the request details, choose "POST" from the dropdown menu next to the URL.

6. Enter Request URL:
Enter the URL of your Node.js server's POST endpoint. For example, http://localhost:3000/submit.

7. Add Request Body:
Switch to the "Body" tab.
Choose the "x-www-form-urlencoded" option.
Add key-value pairs for your POST data. For example, param1 with value value1 and param2 with value value2.

8. Send the Request:
Click the "Send" button to send the POST request.

9. Inspect Server Response:
Observe the response in the lower part of the Postman interface.
Check if the server responds as expected.

## Testing

Run unit tests using the following command:

```bash
npm test
```

The tests cover basic functionality, including handling GET and POST requests.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Mocha](https://mochajs.org/) - Testing framework
- [Chai](https://www.chaijs.com/) - Assertion library

## Authors

- Kevin Njuguna

## Acknowledgments

- Inspired by [YouTube Tutorial](https://www.youtube.com/watch?v=R5uwuG1wPR8)
- Thanks to the Node.js and open-source community for valuable resources and tools.
