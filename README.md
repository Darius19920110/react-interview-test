# React Technical Test

## Getting Started

Clone the repo:
git clone https://github.com/Darius19920110/react-interview-test.git

Navigate into the folder:
cd react-interview-test

Install dependencies:
npm install

Start the app:
npm start

## Your Task

You have 30 minutes to complete this test.

The app fetches a list of users from a public API and displays them.

Most of the code is already written for you. Your job is to complete the missing parts marked with TODO comments.

## What you need to complete

1. Complete the async thunk in `src/store/usersSlice.js` to fetch users from the API
2. Complete the `UserList` component in `src/components/UserList.jsx`:
   - Connect to the Redux store
   - Dispatch the fetch action on mount
   - Show a loading message while fetching
   - Show an error message if the fetch fails
   - Display the list of users when loaded

## API

Use this endpoint to fetch users:
```
https://jsonplaceholder.typicode.com/users
```

## Expected Result

- On load, the app fetches users from the API
- While loading, display "Loading..."
- If an error occurs, display "Something went wrong."
- When loaded, display each user's name and email in a list

## Notes
- Do not modify `store.js` or `App.jsx`
- Basic formatting is required - the UI should be clean and readable
- Bonus points: set up Material UI and style the component nicely
- Ask if you have any questions about the requirements