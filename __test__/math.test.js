

const { calculateGradesAndAverage } = require("../math");  
describe("calculateGradesAndAverage", () => {
  describe("Languages Grading", () => {
   test("should return correct grades for languages", () => {
      const student = {
        name: "edward gilbert",
        math: 0,
        eng: 65, 
        kis: 55, 
        phy: 0,
        che: 0,
        re: 0,
        comp: 75, 
      };

      const expected = {
        name: "edward gilbert",
        math: "sup",
        phy: "sup",
        che: "sup",
        re: "sup",
        eng: "B",
        kis: "C",
        comp: "A",
        avgPts: 27, 
      };

      expect(calculateGradesAndAverage(student)).toEqual(expected);
    });

    
  });

  describe("Sciences Grading", () => {
   test("should return correct grades for sciences", () => {
      const student = {
        name: "jane stella",
        math: 80, 
        eng: 0,
        kis: 0,
        phy: 70, 
        che: 60, 
        re: 0,
        comp: 0,
      };

      const expected = {
        name: "jane stella",
        math: "A",
        phy: "B",
        che: "C",
        re: "sup",
        eng: "sup",
        kis: "sup",
        comp: "sup",
        avgPts: 30, 
      };

      expect(calculateGradesAndAverage(student)).toEqual(expected);
    });

    
  });

  describe("Religious Education Grading", () => {
   test("should return correct grades for religious education", () => {
      const student = {
        name: "isaac newton",
        math: 0,
        eng: 0,
        kis: 0,
        phy: 0,
        che: 0,
        re: 90, 
        comp: 0,
      };

      const expected = {
        name: "isaac newton",
        math: "sup",
        phy: "sup",
        che: "sup",
        re: "A",
        eng: "sup",
        kis: "sup",
        comp: "sup",
        avgPts: 12,
      };

      expect(calculateGradesAndAverage(student)).toEqual(expected);
    });

    
  });

  describe("Overall Grading and Average Calculation", () => {
   test("should calculate correct grades and average for a given student", () => {
      const student = {
        name: "George Washington",
        math: 80,
        eng: 65,
        kis: 48,
        phy: 67,
        che: 56,
        re: 89,
        comp: 82,
      };

      const expected = {
        name: "George Washington",
        math: "A",
        phy: "C",
        che: "pass",
        re: "B",
        eng: "B",
        kis: "D",
        comp: "A",
        avgPts: 69,
      };

      expect(calculateGradesAndAverage(student)).toEqual(expected);
    });

   test("should calculate grades correctly for edge cases", () => {
      const student = {
        name: "kimani eric",
        math: 100,
        eng: 75,
        kis: 55,
        phy: 50,
        che: 49,
        re: 90,
        comp: 44,
      };

      const expected = {
        name: "Kimani eric",
        math: "A",
        phy: "pass",
        che: "sup",
        re: "A",
        eng: "A",
        kis: "C",
        comp: "sup",
        avgPts: 66,
      };

      expect(calculateGradesAndAverage(student)).toEqual(expected);
    });

   test("should calculate grades and average correctly for minimum scores", () => {
      const student = {
        name: "John Smith",
        math: 0,
        eng: 0,
        kis: 0,
        phy: 0,
        che: 0,
        re: 0,
        comp: 0,
      };

      const expected = {
        name: "John Smith",
        math: "sup",
        phy: "sup",
        che: "sup",
        re: "sup",
        eng: "sup",
        kis: "sup",
        comp: "sup",
        avgPts: 0,
      };

      expect(calculateGradesAndAverage(student)).toEqual(expected);
    });

   test("should calculate grades and average correctly for maximum scores", () => {
      const student = {
        name: "Emily wairimu",
        math: 100,
        eng: 100,
        kis: 100,
        phy: 100,
        che: 100,
        re: 100,
        comp: 100,
      };

      const expected = {
        name: "Emily wairimu",
        math: "A",
        phy: "A",
        che: "A",
        re: "A",
        eng: "A",
        kis: "A",
        comp: "A",
        avgPts: 100,
      };

      expect(calculateGradesAndAverage(student)).toEqual(expected);
    });
  });
});

