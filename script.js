const classroom = {
  name: "Grade 10 - Group C",
  year: 2024,
  teacher: "Ms. Dupont",
  subjects: ["Math", "English", "History", "Biology"],
  students: [
    {
      firstName: "Alice",
      age: 15,
      grades: { Math: 14, English: 17, History: 12, Biology: 16 },
      isPresent: true,
    },
    {
      firstName: "Karim",
      age: 16,
      grades: { Math: 9, English: 11, History: 15, Biology: 13 },
      isPresent: false,
    },
    {
      firstName: "Lea",
      age: 15,
      grades: { Math: 18, English: 19, History: 17, Biology: 20 },
      isPresent: true,
    },
  ],
};

console.log(classroom.name, classroom.teacher);
console.log(...classroom.subjects);

classroom.students.forEach((studentName) => console.log(studentName.firstName));

console.log(classroom.students[2].grades.Math);

const lea = classroom.students.find((student) => student.firstName === "Lea");
console.log(lea.grades.Math);

classroom.students
  .filter((student) => student.isPresent)
  .forEach((student) => console.log(student.firstName));

const bestStudent = classroom.students.reduce((best, student) => {
  const grades = Object.values(student.grades);
  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  console.log(average.toFixed(1));

  if (!best || average > best.average) {
    return { name: student.firstName, average: average };
  }
  return best;
}, null);

console.log(bestStudent);
