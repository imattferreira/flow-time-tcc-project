import app from './App';

app
  .listen(process.env.PORT, () => console.log(`🚀 server is running at http://localhost:${process.env.PORT}`))
