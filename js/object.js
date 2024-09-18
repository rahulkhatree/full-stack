let student={
    name:"rahul",
    rollno:34,
    marks:[34,45,56],
    isMinor:true,
    address:{
        city:"delhi",
        state:"delhi"
    },
    showName:function(){
        console.log(this.name)
    }
}
console.log(student.name)
console.log(student.marks[1])
console.log(student.address.state)

student.showName()
console.log(student['marks'])


let college={
    collegename:"JECRC Foundation",
    university:"RTU Kota",
    branch:["CSE","CSAI","IT","AIDS","Electrical","ECE","Civil","Mechanical"],
    numberofstudent:1000,
    numberoffaculty:100,
    collegedetail:function(){
        console.log(this.name)
    }
}

college.collegedetail()
console.log(college['collegename'])
console.log(college['university'])
console.log(college['branch'])
