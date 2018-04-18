describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect( split([1,2,3,4]) ).toEqual([[1,2],[3,4]]);
    });
    it('is able to split an odd array into two halves', function() {
      expect( split([1,2,3]) ).toEqual([[1], [2,3]]);
    });
  })
  describe('Merge function', function() {
    it('is able to merge two equally-lengthed sorted arrays into one sorted array', function() {
      expect( merge([1,2,6], [3,4,7]) ).toEqual([1,2,3,4,6,7]);
      expect( merge([1,3,5], [2,4,6]) ).toEqual([1,2,3,4,5,6]);
    });
    it('is able to merge two unequally-lengthed sorted arrays into one sorted array', function() {
      expect( merge([1,2,6], [3,4,7,8]) ).toEqual([1,2,3,4,6,7,8]);
    });
    it('is able to merge duplicate numbers', function() {
      expect( merge([1,2,3,6], [3,4,7,8]) ).toEqual([1,2,3,3,4,6,7,8]);
    });
    it('calls', function() {
      spyOn(window, 'merge').and.callThrough();
      merge([1,3,5], [2,4,6]);
      expect(merge.calls.count()).toEqual(6);
    })
  });
  describe('Merge Sort Function', function() {
    it('takes an empty array and returns an empty array', function() {
      expect( mergeSort([]) ).toEqual([]);
    });
    it('takes an even-lengthed array and sorts it', function() {
      expect( mergeSort([-100, 4000, 5, 1.5]) ).toEqual([-100, 1.5, 5, 4000]);
    })
  });
  