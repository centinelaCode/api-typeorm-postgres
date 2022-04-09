import 'reflect-metadata';

import app from './app';
import { AppDataSourse } from './db';

async function main() {
  try {
    await AppDataSourse.initialize();
    console.log('Database Connected');

    app.listen(3000, () => {
      console.log('Server listen on port 3000')
    });
  } catch (error) {
    console.log(error);
  }
  
}

main();
