function subjects(){
	var numberOfSubjects
	var subjectResult
	numberOfSubjects=parseInt(prompt("How many subjects do you take:"));
	for(i=0;i<numberOfSubjects;i=i+1){
		subjectResult=parseInt(prompt("Subject "+(i+1)+" grade:"));
		document.getElementById("main").innerHTML+="<br/>"+"Subject "+(i+1)+" grade: "+subjectResult;
		
	}
}