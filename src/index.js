import { greetUser } from './utils/greet';
import { helloworld } from './utils/helloWorld'; 
import { byworld } from './utils/byeworld'; 


window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name)
  helloworld()
  byworld()
});
