require("dotenv").config();
const { Octokit } = require("@octokit/rest");

const clientWithAuth = new Octokit({
    auth: "<your key>"
});

//Criando repo
clientWithAuth.repos.createForAuthenticatedUser({
    owner: "stephanie-tavares",
    name: "repo-teste",

}).then (data => {
    console.log("Sucess!");
}).catch(e => {
   console.log(e);
});


//Deletando repo
clientWithAuth.repos.delete({
    owner: "stephanie-tavares",
    repo:"repo-teste"
}).then (data => {
    console.log("Deleted!");
}).catch(e => {
   console.log(e);
});

