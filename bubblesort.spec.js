describe('Bubble Sort', function() {
    beforeEach(function() {
        spyOn(window, 'swap').and.callThrough();
        // we can generate an array inside the loop
        // create 'it' function on every iteration of the loop
        // check the output against native JS .sorted function

    });
    it('handles an empty array', function() {
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array with 1 element', function() {
      expect( bubbleSort( [8]) ).toEqual( [8] );
    })
    it('sorts from smallest to largest', function() { //
      expect( bubbleSort( [4,2,9,20]) ).toEqual( [2,4,9,20] );
      expect( bubbleSort( [-3,10,-5,0,5,-40] ) ).toEqual( [-40,-5,-3,0,5,10] );
    });
    it('swap a simple array', function() {
      // spyOn(window, 'swap').and.callThrough();
      bubbleSort( [4,2,9,20] );
      expect(swap.calls.count()).toEqual(1);
    });
    it('swaps a more complicated array', function() {
      // spyOn(window, 'swap').and.callThrough();
      bubbleSort( [5,1,9,3] );
      expect(swap.calls.count()).toEqual(3);
    })
  });