/* global describe, it */
var assert = require('assert')
var nums = require('..')
var parse = require('@mona/parse').parse

describe('natural()', function () {
  it('matches a natural number without a sign', function () {
    assert.equal(parse(nums.natural(), '1234'), 1234)
    assert.throws(function () {
      parse(nums.natural(), '-123')
    }, /expected digit/)
  })
  it('accepts a base/radix argument', function () {
    assert.equal(parse(nums.natural(2), '101110'),
                 parseInt('101110', 2))
    assert.equal(parse(nums.natural(16), 'deadbeef'),
                 0xdeadbeef)
  })
})
