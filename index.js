import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//routes
app.get('/health', (req, res) => {
    console.log("Health endpoint hit");
    res.status(200).json({
        status: "ok",
        timestamp: new Date(),
    });
});



// app.use('/', auth);

const port = 3000;
app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
});
