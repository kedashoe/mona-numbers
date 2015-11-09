/* global describe, it */
var assert = require('assert')
var nums = require('..')
var parse = require('@mona/parse').parse

describe('integer()', function () {
  it('matches a positive or negative possibly-signed integer', function () {
    assert.equal(parse(nums.integer(), '1234'), 1234)
    assert.equal(parse(nums.integer(), '+1234'), 1234)
    assert.equal(parse(nums.integer(), '-1234'), -1234)
  })
  it('accepts a base/radix argument', function () {
    assert.equal(parse(nums.integer(2), '101110'), parseInt('101110', 2))
    assert.equal(parse(nums.integer(16), 'deadbeef'), 0xdeadbeef)
    assert.equal(parse(nums.integer(16), '-deadbeef'), -0xdeadbeef)
  })
})
