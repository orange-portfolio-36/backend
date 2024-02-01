import express from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";
import router from "./routers";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import {serve as serveSwagger, setup} from "swagger-ui-express";
import swaggerDocument from "./docs/swagger";
import bodyParser from "body-parser";


const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.use('/docs', serveSwagger, setup(swaggerDocument))

app.use(errorMiddleware);

export default app;
