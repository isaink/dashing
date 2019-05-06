TRELLO:

1. track and visualize progress for self and employers; recall what implemented;
eg. his Trello Foobar; (Things I'm proud of in this project; specific pieces of code proud of);

2. coordinated work:

3. Add Comments section of new task:
 backticks etc;
 resource shared.


4. *Send to Trello* bookmark;
eg. colors.co
his capstone app: gameon

5. power-ups:
slack or github (free has a limit): Add.
can now send Cards to Slack;
in Slack: /trello link ...


HEROKU:

BACKEND:
www file: line 37: normalize  

1. Heroku only accepts one app;
we have front end and backend app (2 separate apps); need to merge the 2 as if just one;
- build our frontend: static html js and css
- see packpage json: scripts: build: calls react-scripts;
run this command which says it will build our app;
-  npm run build  (cd frontend first)
- (compile successfully): put these files in this build/compiled folder (gzip)
- this is all STATIC, so, cannot edit it.
- faster to serve a single compiled file than 20 files;

PRE-DEPLOYMENT:
- cd backend
- have backend servce what is in frontend zipped folder:

- app.js:
line 21:
app.use(express.static {path.join(_ dirname, '../frontend/build')})
line 25:
app.user('./api/hello', (req, res, net) => {
  res.json{{key: 'hello'}}
  })

- go to browser: localhost: 3100


(
  NB: use api/hello to prevent backend and frontend sharing the same route name
  )

line 29:
app.user('* ', (req, res, next) => {
  res.sendFile(path.join(__ dirname, '../fronted/build/index.html')
  })

  user(path.join) to resolve to a full path


- in package.json:
"proxy": 'http://localhost:3100' -

- in .gitignore (global): node_modules/   (slash at teh end)

- use master branch for deployment:
tehn merge developmetn branch with master.


- - go to heroku:
- or terminal: heroku create
see new app created in heroku site
- git remote -v
- heroku pg:psql --app <app_name optional>  (if in folder- dont need to name)
- (use git add or git merge in terminal)
-


- ...

- have env file in backend: or
- in index.js:
var connectionString = process.env.DATABASE_URL;

terminal: heroku run bash

- ask heroku to build my app for me:
- package.json globally (cpy and paste one here):
{
  name: 'deploy-app',
  version:
  private: true,
  scripts: {
    start: 'node ./backend/bin/www',  (bc in outer folder)
    heroku-postbuild: 'cd bakend && npm install && cd ../frontend && npm install && npm run build'
  }
}

- should now be able to push to heroku:
git add -
...
gp heroku

...

- remember to install backend dependencies:






//
