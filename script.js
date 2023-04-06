function subjects(){
	var numberOfSubjects;
	var subjectResult=[];
	var subjectGrade=[];
	totalResult=0;
	var averageResult;
	numberOfSubjects=parseInt(prompt("How many subjects do you take:"));
	for(i=0;i<numberOfSubjects;i=i+1){
		subjectResult[i]=parseInt(prompt("Subject "+(i+1)+" grade:"));	
	}
	for(i=0;i<subjectResult.length;i++){
		if(subjectResult[i]>=0&&subjectResult[i]<40){
			subjectGrade[i]="F";
		}
		else if(subjectResult[i]>=40&&subjectResult[i]<45){
			subjectGrade[i]="E";
		}
		else if(subjectResult[i]>=44&&subjectResult[i]<50){
			subjectGrade[i]="D";
		}
		else if(subjectResult[i]>=50&&subjectResult[i]<60){
			subjectGrade[i]="C";
		}
		else if(subjectResult[i]>=60&&subjectResult[i]<70){
			subjectGrade[i]="B";
		}
		else if(subjectResult[i]>=70&&subjectResult[i]<=100){
				subjectGrade[i]="A";
		}
		else{
			subjectGrade[i]="N/A";
		}
	}
	for(i=0;i<subjectResult.length;i++){
		document.getElementById("main").innerHTML+=("</br></br>"+"Subject "+(i+1));
		document.getElementById("main").innerHTML+=("</br>"+"Result: "+subjectResult[i]);
		document.getElementById("main").innerHTML+=("</br>"+"Grade: "+subjectGrade[i]);
	}
	for(i=0;i<subjectResult.length;i=i+1){
		totalResult=(totalResult+subjectResult[i]);
	}
	averageResult=totalResult/numberOfSubjects;
	document.getElementById("main").innerHTML+=("</br></br>"+"Average Result: "+averageResult);
	
}
/*function subjects(){
	var numberOfSubjects
	var subjectResult=[]
var totalResult=0;
	var averageResult;
	var subjectGrade=[];
	numberOfSubjects=parseInt(prompt("How many subjects do you take:"));
	for(i=0;i<numberOfSubjects.length;i=i+1){
		subjectResult[i]=parseInt(prompt("Enter subject "+(i+1)+" result:"));		
	}

	for(i=0;i<numberOfSubjects.length;i=i+1){
		totalResult=subjectResult+subjectResult[i];		
	}
	averageResult=totalResult/numberOfSubjects
	for(int i=0;i<subjectResult.length;i++){
		if(subjectResult[i]>=0&&subjectResult[i]<40){
			subjectGrade[i]="F";
		}
		else if(subjectResult[i]>=40&&subjectResult[i]<45){
			subjectGrade[i]="E";
		}
		else if(subjectResult[i]>=44&&subjectResult[i]<50){
			subjectGrade[i]="D";
		}
		else if(subjectResult[i]>=50&&subjectResult[i]<60){
			subjectGrade[i]="C";
		}
		else if(subjectResult[i]>=60&&subjectResult[i]<70){
			subjectGrade[i]="B";
		}
		else if(subjectResult[i]>=70&&subjectResult[i]<=100){
				subjectGrade[i]="A";
		}
		else{
			subjectGrade[i]="N/A";
		}
	}
	for(i=0;i<subjectResult.length;i++){
		document.getElementById("main").innerHTML+=("</br></br>"+"Subject "+(i+1));
		document.getElementById("main").innerHTML+=("</br>"+"Result: "+subjectResult[i]);
		document.getElementById("main").innerHTML+=("Grade: "+subjectGrade[i]);
	}
	document.getElementById("main").innerHTML+=("</br>"+"Average result: "+averageResult)

}
*/