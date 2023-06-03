import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import connectToDB from "./dbConnect";

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

(async () => {
  try {
    await connectToDB();

    console.log("All routers are set up");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
})();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  // AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

app.get("*", (req: Request, res: Response) => {
  res.send({ communicatingFromBackendToFrontend: true });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
