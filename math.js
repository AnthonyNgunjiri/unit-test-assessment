

function calculateGradesAndAverage(student) {
    const { name, math, eng, kis, phy, che, re, comp } = student;
    const grades = {};

    function getScienceGrade(score) {
        switch (true) {
            case (score >= 80 && score <= 100):
                 return 'A';
            case (score >= 70 && score <= 79):
                 return 'B';
            case (score >= 60 && score <= 69):
                 return 'C';
            case (score >= 50 && score <= 59):
                 return 'pass';
            default: 
            return 'sup';
        }
    }

    function getReligiousGrade(score) {
        switch (true) {
            case (score >= 90 && score <= 100):
                 return 'A';
            case (score >= 80 && score <= 89):
                 return 'B';
            case (score >= 70 && score <= 79):
                 return 'C';
            case (score >= 60 && score <= 69):
                 return 'pass';
            default:
                 return 'sup';
        }
    }

    function getLanguagesGrade(score) {
        switch (true) {
            case (score >= 75 && score <= 100):
                 return 'A';
            case (score >= 65 && score <= 74):
                 return 'B';
            case (score >= 55 && score <= 64):
                 return 'C';
            case (score >= 45 && score <= 54): 
            return 'D';
            default:
                 return 'sup';
        }
    }

    grades.math = getScienceGrade(math);
    grades.phy = getScienceGrade(phy);
    grades.che = getScienceGrade(che);
    grades.re = getReligiousGrade(re);
    grades.eng = getLanguagesGrade(eng);
    grades.kis = getLanguagesGrade(kis);
    grades.comp = getLanguagesGrade(comp);

    const avgPts = Math.floor((math + eng + kis + phy + che + re + comp) / 7);

    return { name ,...grades, avgPts };
}


const student =
{
     name: "George Washington",
    math: 80,
    eng: 65,
    kis: 48,
    phy: 67,
    che: 56,
    re: 89,
    comp: 82
 };
 

console.log(calculateGradesAndAverage(student));


module.exports = {calculateGradesAndAverage};
