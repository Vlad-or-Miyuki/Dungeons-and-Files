import readlineSync from 'readline-sync';

const name = () => {
    console.log('Welcome to console version of Dungeons and Dragons!');
  
    const username = readlineSync.question('May I have your name?: ');
  
    console.log(`Hello, ${username}!`);
    return username;
  };

export default name;