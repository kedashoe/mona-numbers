/* global describe, it */
var assert = require('assert')
var nums = require('..')
var parse = require('@mona/parse').parse

describe('cardinal()', function () {
  it('parses numbers from "zero" through "nineteen"', function () {
    var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen']
    numbers.forEach(function (num, i) {
      assert.equal(parse(nums.cardinal(), num), i)
    })
  })
  it('parses numbers from "twenty" through "ninety-nine"', function () {
    var small = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine']
    var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
    'eighty', 'ninety']
    tens.forEach(function (ten, i) {
      var tenNum = (i + 2) * 10
      assert.equal(parse(nums.cardinal(), ten), tenNum)
      small.forEach(function (small, i) {
        assert.equal(parse(nums.cardinal(), ten + '-' + small),
        tenNum + i + 1)
        assert.equal(parse(nums.cardinal(), ten + ' ' + small),
        tenNum + i + 1)
      })
    })
  })
  it('parses "one-hundred" through "nine-hundred ninety-nine"', function () {
    assert.equal(parse(nums.cardinal(), 'one-hundred'), 100)
    assert.equal(parse(nums.cardinal(), 'one-hundred and five'), 105)
    assert.equal(parse(nums.cardinal(), 'nine-hundred ninety-nine'), 999)
  })
  it('parses a ridiculous number', function () {
    assert.equal(parse(nums.cardinal(),
    'forty-eight trillion, ' +
    'twenty-five billion, ' +
    'one-hundred and forty-five million, ' +
    'seven-hundred eighty-six thousand, ' +
    'five-hundred and ninety-five'),
    48025145786595)
  })
})
