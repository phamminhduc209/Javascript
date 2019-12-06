// Database design

var classes = [
	{
		id: 0,
		name: '1A',
		teacher: 0
	},
	{
		id: 1,
		name: '2A',
		teacher: 1
		}
]

var teachers = [
	{
		id: 0,
		name: 'Lieu',
		age: 35
	},
	{
		id: 1,
		name: 'Thao',
		age: 40,
	}
]

var students = [
	{name: 'Duc', height: '160', class: 0},
	{name: 'Duc', height: '160', class: 1},
	{name: 'Duc', height: '160', class: 2}
]

function getStudentsInClass(className) {
	var classObject = classes.find(function(x) {
		return x.name === className;
	});
	
	var studentsInClass = students.filter(function(student) {
		return student.class === classObject.id;
	});
	
	return studentsInClass;
}

var studentsInClass = getStudentsInClass('2A');
console.log(studentsInClass);