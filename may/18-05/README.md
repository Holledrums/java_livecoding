## To start new node project

```cmd
npm init -y
echo "node_modules/" > .gitignore
npm i dotenv axios
mkdir src
touch config.js src/index.js

```

## package.json

```java
"script":{
"start": "node src/index.js",
"deploy": "chmod +x src/index.js && npm link",
"undeploy": "npm unlink"
},

```
