# Adnegs-LMS

# Express API for Web3 and Coding Courses

This Express API serves as a backend for accessing resources related to Web3 and coding courses. It includes routes for testing the API and handling unknown routes. This is just a wrapper around, a clear and understandable Readme would be updated with time.

## Setup

1. Install dependencies: `npm install`
2. Set up environment variables:
   - Create a `.env` file.
   - Define `ORIGIN` variable for CORS.
3. Start the server: `npm start`

## Endpoints

### Test Endpoint

- **URL:** `/test`
- **Method:** `GET`
- **Description:** Test if the API is working.
- **Response:**

   ```bash
    {
      "success": true,
      "message": "API is working"
    }
   ```

### Unknown Route

- **Description:** Handles unknown routes and returns a 404 error.
