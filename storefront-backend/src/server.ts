import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import orderRoutes from './handlers/orders';
import productRoutes from './handlers/products';
import userRoutes from './handlers/users';
import dashboardRoutes from './handlers/dashboard';

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!');
});

// Configure routes using handlers
orderRoutes(app);
productRoutes(app);
userRoutes(app);
dashboardRoutes(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
})

export default app;
