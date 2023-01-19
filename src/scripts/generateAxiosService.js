/* eslint-disable */
const { codegen } = require("swagger-axios-codegen");

codegen({
  strictNullChecks: false,
  remoteUrl: "https://api.testappointment.ir/swagger/v1/swagger.json",
  outputDir: "./src/api",
  fileName: "axiosService.ts",
  modelMode: "class",
});
