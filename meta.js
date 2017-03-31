module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "IDG B-side Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Your name",
      "required": true
    },
    "service": {
      "type": "string",
      "message": "Your project service name",
      "required": true
    },
    "appkey": {
      "type": "string",
      "message": "Your dev appkey",
      "default": "rjtwfgeqm2ankhx91wcp3hkeycujiutl"
    },
    "channel": {
      "type": "integer",
      "message": "Your dev channel",
      "default": 1
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    }
  },
  "filters": {
    "config/test.env.js": "unit",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
