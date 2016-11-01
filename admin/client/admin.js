
Template.questions.onRendered(function(){
  this.subscribe('allyells');
  Session.set('skip',0);
  Session.set('limit',1);
  Session.set('score', 0);

});



Template.admin.load =function(){
  

console.log(document.getElementById('h1').value());

};


Template.admin.onCreated(function(){
  

  setTimeout(function() {console.log(Questions.find().count());}, 1000);

// var country = document.getElementById("country");
// country.options[country.options.selectedIndex].selected = true;

});


Template.admin.helpers({




	'display': function(){
		// var arr = []
		// while(arr.length < 35){
  // 		var randomnumber=Math.ceil(Math.random()*35)
  // 		var found=false;
 	// 	for(var i=0;i<arr.length;i++){
		// 	if(arr[i]==randomnumber){found=true;break}
 	// 	 }
 	// 	 if(!found)arr[arr.length]=randomnumber;
		// }

		//var length = Questions.find(); 

		console.log("ad");
		
		return Sections.find();
		
	},

});

Template.admin.events({

	'click #section1' : function(event){


		var SelectedValue 

//console.log(document.getElementById("section1").value);
///console.log(document.getElementById("section1").selected);

console.log (event.currentTarget.innerText)



 document.getElementById("sc").value =  event.currentTarget.innerText;

		//return SelectedValue;

	},

	'click #addSection': function(event){

		var sec = document.getElementById('section').value;

		console.log(sec);

		Sections.insert({section : sec });

	},
	


'submit form' : function(event){
	// inserting questions
	var sec = event.currentTarget.sc.value;
var que = event.currentTarget.question.value;
var option1 = event.currentTarget.option1.value;
var option2 = event.currentTarget.option2.value;
var option3 = event.currentTarget.option3.value;
var option4 = event.currentTarget.option4.value;
var answer = event.currentTarget.answer.value;

if(answer===option1){
	var correctans = 0;
}
else if(answer===option2){  
	var correctans = 1;
}
else if(answer===option3){
	var correctans = 2;
}else if(answer===option4){
	var correctans = 3;
}else{
	Materialize.toast('Failed! None of the options match the answer!!',3000);
	return false;
}

//console.log(Questions.find().count());

var Qnumber= Questions.find().count() + 1 ;

Questions.insert({section : sec ,no: Qnumber ,question:que,options:[option1,option2,option3,option4],answer:correctans});
return false;
}
});