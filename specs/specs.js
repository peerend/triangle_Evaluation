describe('checkTriangle', function(){
  it('checks whether it is a triangle', function(){
    checkTriangle(1,5,1).should.equal('is not a triangle');
  });
  it('checks whether the triangle is equilateral', function(){
    checkTriangle(2,2,2).should.equal('is a equilateral triangle');
  });
  it('checks whether the triangle is isosceles', function(){
    checkTriangle(2,2,3).should.equal('is a isosceles triangle');
  });
  it('checks whether the triangle is scalene', function(){
    checkTriangle(4,2,3).should.equal('is a scalene triangle');
  });
});

describe('notTriangle', function(){
  it('checks whether it is a triangle', function(){
    notTriangle(1,1,5).should.equal(true);
  });
});

describe('equilateralTriangle', function(){
  it('checks whether it is an equilateral triangle', function(){
    equilateralTriangle(2,2,2).should.equal(true);
  });
});  
describe('isoscelesTriangle', function(){
  it('checks whether it is an isosceles triangle', function(){
    isoscelesTriangle(1,2,2).should.equal(true);
  });
});
