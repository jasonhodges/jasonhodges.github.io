// https://code-maven.com/list-content-of-directory-with-nodejs
// https://github.com/jxson/front-matter <- consider for yaml front matter parsing
const cloneDeep = require('lodash');

const fs = require('fs');
const fm = require('front-matter');
const path = require('path');
const jsonfile = require('jsonfile');
const postsjson = 'src/assets/posts/posts.json';
const dir = 'src/assets/posts';

const extFilter = 'md';
const pathSupplied = dir;

function extension(element) {
  const extName = path.extname(element);
  return extName === '.' + extFilter;
}

/**
 * cycle through directory for files
 */
fs.readdir(pathSupplied, function (err, items) {
  let opener = '{ "entries": ',
    closer = ' }',
    posts = [],
    file = '',
    fileContent = '',
    content = '',
    body = '',
    id = -1,
    attributes = {},
    title = '',
    description = '',
    tempTitle = '',
    urlTitle = '',
    re = /[\W]+/g;
  /**
   * cycle over items, filtering for files matching extension
   * @type {Array}
   */
  posts = items.filter(extension).map((item, i) => {
    /**
     * Get the file from item within the path supplied.
     * @type {string}
     */
    file = pathSupplied + '/' + item;
    console.log('file: ', item);
    /**
     * Extract the entire file content.
     * @type {string}
     */
    fileContent = fs.readFileSync(file, 'utf8');
    /**
     * Break out the content via fm(frontmatter).
     * @type {{attributes, body}|{attributes, body, frontmatter}}
     */
    content = fm(fileContent);
    console.log('content: ', content);
    content.path = 'assets/posts/' + item;
    body = content.body;
    attributes = content.attributes;
    title = attributes.title;
    description = attributes.description;
    tempTitle = cloneDeep(attributes.title);
    content.attributes.urlTitle = tempTitle.replace(re, '-');
    content.attributes.id = i;
    return content;
  });

  // opener += JSON.stringify(posts);
  // opener += closer;
  opener = JSON.stringify(posts);
  fs.writeFile(postsjson, opener, (error) => {
    console.log('error: ', error)
  });
});
