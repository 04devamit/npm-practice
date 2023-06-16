
// setTimeout(() => {
//   console.log('hi');
// }, 2000);


// 1. we are fetching some data 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



// 2. some people don't like this that we have to write .then again and again, so we use a j.s. library , which is axios.

// 2.1 we go to axios website and copy CDN link and paste it in html, then we pick any example and past it here , the cdn link enable this example to fetch data. example in 2.2


// 2.2 here in below we are using axios library 

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => {
//     // handle success
//      console.log(response.data);

//   })


// 2.3  but we depend it on axios library which is running on a website , if website is down or they ( library owner) change some code then out project is disturbed.   

// 2.4 so we download it. 
// we go to the link -> https://unpkg.com/axios/dist/axios.min.js ( cdn link which we added in html)
// and past this link in the browser and then we do ctrl + s, 
// now we physically adding this file into our system.just like we add script file.
// it is working fine.




// 3. this above work is done with the help of npm ( node pakage manager), npm is a pakage manager , we can import different -2 library into our system & npm automatically download it & place in it a folder and also it give a method to access it.

// 3.1 
// we download node.js b/c npm package manager comes with node.
// we can check node -v & npm -v in the command line & it give versions of these.
// we intialize npm -> through npm init.
// it create a package.json file -> inside this file a object is present & inside this object various keys are present.
// we go to npm website and search our library like axios , then axios npm command is shown up.
// we copy it , and past it in our terminal , 
// when we do npm i axios -> then it do three things
// A. it create a key which name is -> dependency .
// B. it create node_modules folder  inwhich various folders are present.
// C. it create package-lock.json file.


// B. -> 
// in this folders various folders are present b/c axios library is also depend on some other library. we can check it by going into axios package.json file and see dependency -> here we find various dependency , and if we go one of these dependency and go into their package.json file then we find that they are also dependend on some library.

// so that's how node_modules folder having so many files b/c they are dependency of each others.



// 4. we run node terminal in terminal -> we have to write node in the terminal so that terminal become node-terminal.
// 5. we run script.js file in the node terminal , we have to write node script.js in bash terminal.
// 6.here in this script.js file we are going to run  this ->

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => {
//     // handle success
//      console.log(response.data);

//   })

  // but it is not running b/c we are not we are not importing axios from node_modules 

  // 7. so we write import axios from "axios" -> and it is importing axios from node_module without writing the complete path.

  // 8. after this we are doing node script.js in bash terminal and it is saying ->  cannot use import statement outside a module.

  // 9. so we have to write this ->"type": "module" in our package.json file inside { }., it means we have to set type : module.

  // 10. so finally we can do this ->

  import axios from "axios";

  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      // handle success
       console.log(response.data);
  
    })
  
// 11. it will print the outcome in the terminal itself.

// 12. but our browser is not understand this import - export.
// it is saying in console -> cannot use import statement outside a module -> means we have to write type = module in html tag. as a attribute.

// 13. if we write this then it is saying path is not right you should write with proper path like -> / .../ ....

// 14. so browser import & export is different from node import export , in node we don't have to write complete path.

// 15. so what's the point of doing this , when we are not able to get result in browser.

// 16. so we use buddles like -> parcel or webpack, they pack all this import - export and complete file and attach with index.html ( main file, which browser understand).

// 17. we use parcel -> parcel is install  as devDependancy , it is not install as dependency, installation  code is  ->  npm i parcel -D

// 18. with the above code parcel is only install but we are not able to see our output yet , so we need to understand that parcel is packing import and complete code and pack into a file which it connect to the main index.html., it also create it's own server.

// 19. to create it's own server and get output in our browser we write in bash terminal ->              npx parcel index.html
// npx means npm - execute parcel and it is taking index.html file as main file.

// 20. important point -> we have to write type = 'module' in the script tag in the html, then run npx parcel index.html command in the bash termina, if we don't write type = 'module' then this command is not working fine.

// 21. if we run this command without writing type = 'module' then it is giving error, then we have to clear .parcel-cache folder.

// 22. if we go the the our local server then we are not able to get the data.
// 23. we have to go the new server which is created by parcel. and it is localhost:1234 in order to get the data.


// 24. when we go to the console and go to the network tab then we realize that this parcel is create a .js file pack our code which is in the script file and attach this js file in out main index.html.

// 25. parcel is a package of npm

// 26. if we want to push to the github then we are not pushing the ->
// 1. node_modules
// 2.dist
// 3..parcel-cache

// 27. we adding these files into .gitignore folder.




