Part 1: Github
    1. git innit
    2. git add <file> or git add . (for all)
    3. git commit

    1. git pull origin master
    2. git reset
    3. git checkout --target
    4. To differentiate between something that we are trying to change back from something that we are trying to commit.
    5. In case if we make a big mistake after we commit and we lost track on what and where we made the mistake.
    
    1. git branch
    2. git checkout <name of branch>
    3. In case the developer wants to create a separate copy of their code that they want to commit. Or if there are more than 1 developer that is working on the project
    
    1. Using git merge: When developer is done working on a code that is in a different branch, they will use git merge to merge their code with the master branch
        Pull request: will let you tell other people or admin from a certain private github that you're trying to push your code to their repo. Afterwards, they can view and review your codes.
    2. git push
    
    Part 3: Fake Resume Site
    1. mkdir resume_page
    2. cd  resume_page, touch index.html style.css
    3. subl index.html
    4. <h1>Bart Wiharto</h1>
    5. open index.html
    
    Add professional content
    1. <img src="#" alt="My professional picture"> </img>
    2. <ul>
         <li>Subtitle Editor</li>
         <li>Freelance Translator</li>
         <li>Assistant Stage Manager</li>
       </ul>
    3. <h3>
        <a href="#">LinkedIn</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
       </h3>
       
    Add some style to your site
    1. h1 {text-align: center;}
    2. link this at the <head> of index.html:
            <link href="https://fonts.googleapis.com/css?family=PT+Serif+Caption" rel="stylesheet">
        In style.css file, add this command:
            h1 {
            text-align: center;
            font-family: 'PT Serif Caption', Serif;
            }
    3. Since <h3> tags are also <a>, so:
            h3 a{
            color: red;
            }
    4. Adding padding/space to the body:
            body {
            padding: 50px 30px 50px 80px;
            }
            

Add some navigation to your site:
    1. replacing <h3> with <nav>:
                <nav>
                <a href="#">LinkedIn</a>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                </nav>
    
    2.    <nav>
            <a href="index.html">Home Page</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="projects.html">Projects</a>
          </nav>

    3. touch projects.html
    4. copy and pasted <nav> to projects.html
    5. <h2>Projects</h2>
    6. All links works
    7.  <ol>
            <li>Netflix Projects</li>
            <li>Technicolor Projects</li>
            <li>Santa Monica College Dance Department</li>
        </ol>
        

Part 4: Loops
1. touch loops.js
2.  let i = 0;
        while (i<=99) {
        console.log(i);
        i++;
        }
        
3. let i = 99;
        while (i>=0) {
        console.log(i);
        i--;
        }
        
4. let i = 0;
        while (i<=98) {
        console.log(i);
        i+=2;
        }
        
5. let i = 98;
        while (i>=0) {
        console.log(i);
        i-=2;
        }

6. let i = 49;
        while (i<=72) {
        console.log(i);
        i++;
        }
        
7. let i = 81;
        while (i>=26) {
        console.log(i);
        i--;
        }

8. let i = 1;
        while (i <= 30) {
        console.log(i * 3);
        i++;
        }
