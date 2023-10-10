class UniversityMember {
    constructor(name, age, role) {
      this.name = name;
      this.age = age;
      this.role = role;
      this.energy = 24;
    }
  
    info() {
      return {
        name: this.name,
        age: this.age,
        role: this.role,
        energy: this.energy,
      };
    }
  }
  
  class Teacher extends UniversityMember {
    constructor(name, age) {
      super(name, age, "Teacher");
    }
  }
  
  class Student extends UniversityMember {
    constructor(name, age) {
      super(name, age, "Student");
    }
  }
  
  class University {
    constructor() {
      this.teachers = [];
      this.students = [];
    }
  
    addMember(member) {
      if (member instanceof Teacher) {
        this.teachers.push(member);
      } else if (member instanceof Student) {
        this.students.push(member);
      } else {
        throw new Error("Invalid member type.");
      }
    }
  
    removeMember(member) {
      if (member instanceof Teacher) {
        this.teachers = this.teachers.filter((teacher) => teacher !== member);
      } else if (member instanceof Student) {
        this.students = this.students.filter((student) => student !== member);
      } else {
        throw new Error("Invalid member type.");
      }
    }
  
    startLesson() {
      this.students.forEach((student) => {
        student.energy -= 2;
      });
  
      this.teachers.forEach((teacher) => {
        teacher.energy -= 5;
      });
    }
  }
  
  // Example usage:
  
  const university = new University();
  
  const teacher1 = new Teacher("Anush", 35);
  const teacher2 = new Teacher("Hovhannes", 32);
  const student1 = new Student("Arev", 21);
  const student2 = new Student("Maria", 22);
  
  university.addMember(teacher1);
  university.addMember(teacher2);
  university.addMember(student1);
  university.addMember(student2)
  university.removeMember(student1);