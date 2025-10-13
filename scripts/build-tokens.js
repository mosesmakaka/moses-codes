const StyleDictionary = require('style-dictionary');
const fs = require('fs');
const path = require('path');

// Load all token files from the tokens directory
const tokensDir = path.resolve(__dirname, '../tokens');
const files = fs
  .readdirSync(tokensDir)
  .filter((file) => file.endsWith('.json') || file.endsWith('.tokens.json'))
  .map((file) => path.join(tokensDir, file));

const StyleDict = StyleDictionary.extend({
  source: files,
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: path.resolve(__dirname, '../src/styles/'),
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables'
        }
      ]
    }
  }
});

StyleDict.buildAllPlatforms();
console.log('Design tokens built to src/styles/tokens.css');
