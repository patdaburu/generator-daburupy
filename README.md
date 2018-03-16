# generator-daburupy
`daburupy` a [Yeoman](http://yeoman.io) generator for a basic python project that includes pytest, [Sphinx](http://www.sphinx-doc.org/en/master/), a `Makefile` and a few other standard pieces to get your project going.

If you haven't used yeoman templates before, take a look at the [Getting Started with Yeoman](http://yeoman.io/learning/) article on the project page.

## Get ready, get set...

### Install `npm`
If you haven't already installed [npm](https://www.npmjs.com/get-npm), you'll need to do that first.  

One pretty easy way to install `npm` and `node` is with [nvm](http://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/).  If you want to go this route, use `curl` to kick off the install script:

```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```
At the time of this writing, **0.3.88** was the current version, but it may well have changed since then.  Go to the [Github project page](https://github.com/creationix/nvm/releases) to find the latest release.

After installing, you'll need to close and reopen your terminal, or run the following command:

```bash
source ~/.bashrc
```

You can then verify that `nvm` installed correctly by running the following command:

```bash
nvm --version
```

Lastly, just install node.

```bash
nvm install node
```


### Install `yeoman`
If you haven't already installed  [Yeoman](http://yeoman.io/learning/), perform the following steps:

```bash
npm install -g yo
```

### Install `bower`
If you haven't already installed  [Bower](https://bower.io/), perform the following steps:

```bash
npm install -g bower
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