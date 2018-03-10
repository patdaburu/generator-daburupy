# generator-daburupy
`daburupy` a [Yeoman](http://yeoman.io) generator for a basic python project that includes pytest, [Sphinx](http://www.sphinx-doc.org/en/master/), a `Makefile` and a few other standard pieces to get your project going.

If you haven't used yeoman templates before, take a look at the [Getting Started with Yeoman](http://yeoman.io/learning/) article on the project page.

## Get ready, get set...

### Install `npm`
If you haven't already installed [npm](https://www.npmjs.com/get-npm), you'll need to do that first. 

### Install `yeoman`
If you haven't already installed  [Yeoman](http://yeoman.io/learning/), perform the following steps:

```bash
npm install -g yo
```

## Install the `daburupy` Generator

```bash
npm install -g generator-daburupy
```

## Create Your Project

From a command prompt go into the directory in which you'd love to start your new python project and execute the template generator.

```bash
cd /my/target/directory
yo daburupy
```

The generator will ask you a few questions and, based on your answers, generate your new project.

## Next Steps

Once the project skeleton has been generated, you can use the `Makefile` to create your virtual environment.

```bash
make venv
```
Now that you have a virtual environment, go ahead and activate it.

```bash
source venv/bin/activate
```

At this point, you can install the project's required modules, run the example test and generate the project's [Sphinx](http://www.sphinx-doc.org/en/master/) documentation.

```bash
make install
make test
make docs
```

## Start Coding

If everything else went well, you can start coding your project.