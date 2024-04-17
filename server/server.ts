require("dotenv").config();
import  {app}  from "./app";
import connectDB from "./utils/db";


// Handling the promise using .then()
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is connected on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error("Error connecting to the database:", error);
    });
// const PORT = process.env.port || 8000;
// app.listen(PORT, () => {
//     console.log(`Server is connected on port ${process.env.PORT}`);
// })