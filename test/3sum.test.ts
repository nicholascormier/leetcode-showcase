import { threeSum } from "../src/3sum";

test("3 Sum", () => {
    // Input: nums = [-1,0,1,2,-1,-4]
    // Output: [[-1,-1,2],[-1,0,1]]
    const exampleOne = threeSum([-1,0,1,2,-1,-4])

    // Input: nums = [0,1,1]
    // Output: []
    const exampleTwo = threeSum([0,1,1])

    // Input: nums = [0,0,0]
    // Output: [[0,0,0]]
    const exampleThree = threeSum([0,0,0])

    console.log(exampleOne, exampleTwo, exampleThree)

    expect(exampleOne).toStrictEqual([[-1,-1,2], [-1,0,1]])
    expect(exampleTwo).toStrictEqual([])
    expect(exampleThree).toStrictEqual([[0,0,0]])
})