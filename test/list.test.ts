import { list } from '../lib/postcss.js'

it('space() splits list by spaces', () => {
  expect(list.space('a b')).toEqual(['a', 'b'])
})

it('space() trims values', () => {
  expect(list.space(' a  b ')).toEqual(['a', 'b'])
})

it('space() checks quotes', () => {
  expect(list.space('"a b\\"" \'\'')).toEqual(['"a b\\""', "''"])
})

it('space() checks functions', () => {
  expect(list.space('f( )) a( () )')).toEqual(['f( ))', 'a( () )'])
})

it('space() does not split on escaped spaces', () => {
  expect(list.space('a\\ b')).toEqual(['a\\ b'])
})

it('space() works from variable', () => {
  let space = list.space
  expect(space('a b')).toEqual(['a', 'b'])
})

it('comma() splits list by spaces', () => {
  expect(list.comma('a, b')).toEqual(['a', 'b'])
})

it('comma() adds last empty', () => {
  expect(list.comma('a, b,')).toEqual(['a', 'b', ''])
})

it('comma() checks quotes', () => {
  expect(list.comma('"a,b\\"", \'\'')).toEqual(['"a,b\\""', "''"])
})

it('comma() checks functions', () => {
  expect(list.comma('f(,)), a(,(),)')).toEqual(['f(,))', 'a(,(),)'])
})

it('comma() does not split on escaped commas', () => {
  expect(list.comma('a\\, b')).toEqual(['a\\, b'])
})

it('comma() works from variable', () => {
  let comma = list.comma
  expect(comma('a, b')).toEqual(['a', 'b'])
})
