class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const numsMap = new Map();
      const output = [];
      
      for(let i = 0; i < nums.length; i++){
        const jValue = target - nums[i];
        
        if(numsMap.has(jValue)){
          const j = numsMap.get(jValue);
        
          return [j, i]
          
          
        }else{
          numsMap.set(nums[i], i);
        }
      }
      
      return output;
    }

}
