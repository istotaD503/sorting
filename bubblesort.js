// function bubbleSort(arr) {
    //   for (let i = 0; i < arr.length; i++) {
    //     //arr[i] & arr[i+1];
    //     for (let j = 0; j < arr.length; j++) {
    //       if (arr[j] > arr[i]) {
    //         console.log(arr);
    //         let temp = arr[i];
    //         arr[i] = arr[j];
    //         arr[j] = temp;
    //         swap();
    //       }
    //     }
    //
    //   }
    //   return arr;
    // }
    function bubbleSort(arr) {
      let count = arr.length;
      while(count) {
        for (let i = 0; i < count; i++) {
          if (arr[i] > arr[i+1]) {
            console.log(arr);
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            swap();
          }
        }
        count--;
      }
      return arr;
    }
    function swap() {
    }