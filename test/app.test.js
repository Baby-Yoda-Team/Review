const db = require('../db/index');

test('expect to recive 100 data from dabase', done => {
  function callback(result) {
    expect(result.length).toBe(100);
    done();
  }

  db.allData(callback);
});
