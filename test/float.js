/* global describe, it */
var assert = require('assert')
var nums = require('..')
var parse = require('@mona/parse').parse

describe('float()', function () {
  it('parses a number with decimal points into a JS float', function () {
    assert.equal(parse(nums.float(), '1.2'), 1.2)
    assert.equal(parse(nums.float(), '-1.25'), -1.25)
    assert.equal(parse(nums.float(), '+1.25'), 1.25)
    assert.equal(parse(nums.float(), '0.100'), 0.1)
    assert.equal(parse(nums.float(), '0.01'), 0.01)
    assert.equal(parse(nums.float(), '0.001'), 0.001)
    assert.equal(parse(nums.float(), '0.800'), 0.8)
    assert.equal(parse(nums.float(), '0.008'), 0.008)
    assert.equal(parse(nums.float(), '1.008'), 1.008)
    assert.equal(parse(nums.float(), '-0.800'), -0.8)
    assert.equal(parse(nums.float(), '-1.008'), -1.008)
    assert.equal(parse(nums.float(), '10.08'), 10.08)
    assert.equal(parse(nums.float(), '-.08'), -0.08)
    assert.equal(parse(nums.float(), '1.'), 1)
    assert.equal(parse(nums.float(), '0.'), 0)
  })
  it('is aliased to "real"', function () {
    assert.equal(nums.float, nums.real)
  })
  it('supports e-notation', function () {
    assert.equal(parse(nums.float(), '1.25e10'), 1.25e10)
    assert.equal(parse(nums.float(), '1.25e3'), 1.25e3)
    assert.equal(parse(nums.float(), '1.25e-3'), 1.25e-3)
  })
})
