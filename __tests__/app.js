'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-daburupy:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['Makefile']);
    assert.file(['requirements.txt']);
    assert.file(['README']);
    assert.file(['README.md']);
    assert.file(['setup.cfg']);
    assert.file(['setup.py']);
    assert.file(['package.json']);
    assert.file(['.coveragerc']);
    assert.file(['.readthedocs.yml']);
    assert.file(['environment.yml']);
    assert.file([path.join('docs', 'Makefile')]);
    assert.file([path.join('docs', 'make.bat')]);
  });
});
