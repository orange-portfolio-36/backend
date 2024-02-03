import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import router from "./routers";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { serve as serveSwagger, setup } from "swagger-ui-express";
import swaggerDocument from "./docs/swagger";
import cookieParser from "cookie-parser";

const app = express();

const ORIGIN = process.env.ORIGIN_URL ?? "*";

app.use(cookieParser());
app.use(json());
app.use(
  cors({
    credentials: true,
    origin: ORIGIN,
  })
);
app.use(helmet());

app.use("/", router);

app.use("/docs", serveSwagger, setup(swaggerDocument));

app.use(errorMiddleware);

export default app;
