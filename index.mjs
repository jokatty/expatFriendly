import bindRoutes from './Routers/routes.mjs'
import  express from "express";
import cors from "cors";

// create an instance of express
const app = express();

// enable cors
app.use(cors());

// parse incoming string or array data
app.use(express.json());

const PORT = process.env.PORT || 3001;

// bind routes definitions to express application
bindRoutes(app)

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}!`); });