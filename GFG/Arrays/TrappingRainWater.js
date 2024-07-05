function TrappingRainWater(heights) {
    let left = 0, right = heights.length - 1;
    let maxWater = 0, leftMax = heights[left], rightMax = heights[right];

    while (left < right) {
        if (heights[left] < heights[right - 1]){
            leftMax = Math.max(leftMax, heights[left]);
            maxWater += (leftMax - heights[left]);
            left++;
        } else {
            rightMax = Math.max(rightMax, heights[right]);
            maxWater += (rightMax - heights[right]);
            right--;
        }
    }
    return maxWater;
}

console.log(TrappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(TrappingRainWater([4,2,0,3,2,5]));
console.log(TrappingRainWater([4,4,4,4,4,4]));
