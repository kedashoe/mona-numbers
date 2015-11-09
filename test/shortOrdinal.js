/* global describe, it */
var assert = require('assert')
var nums = require('..')
var parse = require('@mona/parse').parse

describe('shortOrdinal()', function () {
  it('parses an integer with an ordinal suffix', function () {
    assert.equal(parse(nums.shortOrdinal(), '1st'), 1)
    assert.equal(parse(nums.shortOrdinal(), '2nd'), 2)
    assert.equal(parse(nums.shortOrdinal(), '3rd'), 3)
    assert.equal(parse(nums.shortOrdinal(), '2d'), 2)
    assert.equal(parse(nums.shortOrdinal(), '3d'), 3)
    assert.equal(parse(nums.shortOrdinal(), '4th'), 4)
  })
  it('allows control over suffix strictness', function () {
    assert.equal(parse(nums.shortOrdinal(false), '1nd'), 1)
    assert.throws(function () {
      parse(nums.shortOrdinal(true), '1nd')
    })
  })
})
