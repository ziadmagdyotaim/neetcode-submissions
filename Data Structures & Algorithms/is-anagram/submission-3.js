class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const sMap = new Map();
    for (let i = 0; i < s.length; i++) {
      if (sMap.has(s[i])) {
        const arr = sMap.get(s[i]);
        if (arr[0] !== undefined) {
          arr[0] += 1;
        } else {
          arr[0] = 1;
        }

        sMap.set(s[i], arr);
      } else {
        const arr = [1, 0];
        sMap.set(s[i], arr);
      }

      if (sMap.has(t[i])) {
        const arr = sMap.get(t[i]);
        if (arr[1] !== undefined) {
          arr[1] += 1;
        } else {
          arr[1] = 0;
        }

        sMap.set(t[i], arr);
      } else {
        const arr = [0, 1];
        sMap.set(t[i], arr);
      }
    }

    let is_anagram = true;
    sMap.forEach((value, key) => {
      if (value[0] !== value[1]) {
        is_anagram = false;
      }
    });

    return is_anagram;
  }
}
