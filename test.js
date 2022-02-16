/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0
    }
    let arr = s.split('')
    let result = 1
    let loop = (arr) => {
        let resultArr = []
        arr.forEach((item, index) => {
            if (!resultArr.includes(item)) {
                resultArr.push(item)
                result = Math.max(result, resultArr.length)
            } else {
                result = Math.max(result, resultArr.length)
                if (index !== arr.length) {
                    arr.shift()
                    loop(arr)
                } else {
                    return
                }
            }
        })
    }
    loop(arr)
    return result
};
