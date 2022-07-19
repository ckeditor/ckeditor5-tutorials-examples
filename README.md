# Tutorials for CKEditor 5

This repository contains the source code for CKEditor 5 tutorials. Each package has starter files and the final code for each tutorial.

All tutorials can be found in [the CKEditor 5 framework documentation](https://ckeditor.com/docs/ckeditor5/latest/framework/index.html). 

## How to run a tutorial package

After cloning this repository, go into the directory of the tutorial you selected and open the `index.html` page. The example will be ready to use.

If you would decide to modify the existing code, in order to see your changes, you need to install necessary dependencies:

```bash
npm install
```
The webpack is also already configured, so you can build the package: 

```bash
npm run build
```

Whenever you want to check anything in the browser, save the changes and run build again. Then, refresh the page in your browser (remember to turn off caching, so that new changes are displayed instantly).

## Tutorials

* [Creating a basic plugin - Timestamp](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/plugins/creating-simple-plugin-timestamp.html)
* Creating a simple plugin - Abbreviation
    * [Part 1](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/plugins/simple-plugin/abbreviation-plugin-level-1.html)
    * [Part 2](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/plugins/simple-plugin/abbreviation-plugin-level-2.html)
    * [Part 3](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/plugins/simple-plugin/abbreviation-plugin-level-3.html)