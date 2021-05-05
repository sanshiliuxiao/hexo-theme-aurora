const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

module.exports = (hexo) => {
  // read _vendors.yml
  const vendorsFile = fs.readFileSync(
    path.join(__dirname, "../../_vendors.yml"),
    "utf-8"
  );
  hexo.theme.config.vendors = yaml.load(vendorsFile);
};
