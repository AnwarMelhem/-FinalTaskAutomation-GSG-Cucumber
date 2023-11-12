const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      on ('task',{
        async convertXlsxToJson(xlsxPath){
          const workbook= XLSX.readFile(xlsxPath);// Read File from the provided path (path from Test Case)
          const worksheet=workbook.Sheets[workbook.SheetNames[0]];// Take this and get the first sheet inside the file
          const jsonData= XLSX.utils.sheet_to_json(worksheet); // Convert this sheet (first tab) to json file
          const fileName= path.basename(xlsxPath, '.xlsx'); // provide the name of json file the dawnloaded excel file
          const jsonFilePath=`cypress/fixtures/${fileName}.json` // Provide the path for json file
          writeFileSync(jsonFilePath, JSON.stringify(jsonData, null,1)) // Write the json file on provide and convert javascript to object json string
          return null
        }
      })
      return require("./cypress/plugins")(on, config);
    },
    env: {
      snapshotOnly: true,
      download_dir: "./cypress/downloads",
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    
  },
});
