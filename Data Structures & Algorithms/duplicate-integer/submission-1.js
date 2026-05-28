class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
     hasDuplicate(nums) {
       let appeared = false;
        const hashmap = new Map()
        
        for(let i = 0; i < nums.length; i++){
            if(hashmap.has(nums[i])){
              appeared = true;
              break;
            }else{
              hashmap.set(nums[i],1);
            }
        }
        
        return appeared;
    }
}
