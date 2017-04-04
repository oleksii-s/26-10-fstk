QUnit.test('trim()', function (assert) {
  assert.equal(trim(''), '', 'Пустая строка');
  assert.ok(trim('   ') === '', 'Строка из пробельных символов');
  assert.equal(trim(' x'), 'x', 'Начальные пробелы');
  assert.equal(trim('x '), 'x', 'Концевые пробелы');
  assert.equal(trim(' x '), 'x', 'Пробелы с обоих концов');
  assert.equal(trim('    x  '), 'x', 'Табы');
  assert.equal(trim('    x   y  '), 'x   y', 'Табы и пробелы внутри строки не трогаем');
});