# Tutorials for CKEditor 5

This repository contains the source code for CKEditor 5 tutorials. Each package has starter files and the final code for each tutorial (or part).

All tutorials can be found in [the CKEditor 5 framework documentation](https://ckeditor.com/docs/ckeditor5/latest/framework/index.html).

## How to run a tutorial package?

After cloning this repository, go into the directory of the tutorial and install all the dependencies first.

```bash
npm install
```

Under the hood, each tutorial uses [Vite](https://vitejs.dev/) as a module bundler. You can start a development server using the below command.

```bash
npm run dev
```

After running the command, you should be able to see the tutorial project in the browser at localhost and a specific port, most likely - [http://localhost:5173/](http://localhost:5173/). The development server provides a Hot Module Replacement over native ES modules. It means that any update to the tutorial will be reflected immediately in the browser. Don't hesitate to tinker and experiment!

## Tutorials

* [Creating a basic plugin - Timestamp](https://ckeditor.com/docs/ckeditor5/latest/framework/tutorials/creating-simple-plugin-timestamp.html)
* Creating an advanced plugin - Abbreviation
  * [Part 1](https://ckeditor.com/docs/ckeditor5/latest/framework/tutorials/abbreviation-plugin/abbreviation-plugin-level-1.html)
  * [Part 2](https://ckeditor.com/docs/ckeditor5/latest/framework/tutorials/abbreviation-plugin/abbreviation-plugin-level-2.html)
  * [Part 3](https://ckeditor.com/docs/ckeditor5/latest/framework/tutorials/abbreviation-plugin/abbreviation-plugin-level-3.html)
