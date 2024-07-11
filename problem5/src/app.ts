import express from 'express';
import routes from './routes';
import sequelize from './config/database';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
