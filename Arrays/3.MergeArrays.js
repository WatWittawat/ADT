// always check a input
const mergeSortedArrays = (arr1, arr2) => {
  if (!arr1) {
    return arr2;
  }
  if (!arr2) {
    return arr1;
  }
  let Trackarr1 = arr1[0];
  let Trackarr2 = arr2[0];
  let MergeArray = [];
  let moveTrack1 = 1;
  let moveTrack2 = 1;
  while (Trackarr1 || Trackarr2) {
    console.log(Trackarr1, Trackarr2);
    if (!Trackarr2 || Trackarr1 < Trackarr2) {
      MergeArray.push(Trackarr1);
      Trackarr1 = arr1[moveTrack1];
      moveTrack1++;
    } else {
      MergeArray.push(Trackarr2);
      Trackarr2 = arr2[moveTrack2];
      moveTrack2++;
    }
  }
  return MergeArray;
};

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
