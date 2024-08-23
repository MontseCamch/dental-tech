const fs = require ("fs")
const patch = require ("patch")

const patchJSON = patch.join(__dirname, "/data/personas.json");

const readJSON = async () => {
    const data = await fs.readFileSync (patchJSON, "utf-8");
    return JSON.parse (data) ;

};

const writeJSON = async (data) => {
  fs.writeFileSync(patchJSON, JSON.stringify(data, null,4 ), "utf-8");

};

const date =  readJSON ()

console.log(data)



