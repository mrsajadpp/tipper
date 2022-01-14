
const menu = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');
menu.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
})
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

function sendmail(){

    

			var name = $('#Name').val();

			var email = $('#Sender').val();

      var message = $('#Message').val();

			// var body = $('#body').val();

			var Body='Name: '+name+'<br>Email: '+email+'<br>Feedback: '+message;

			//console.log(name, phone, email, message);

			Email.send({

        Host : "smtp.gmail.com",

        Username : "reply.developerstudio@gmail.com",

        Password : "dtcyhohgkknksqbv",

				To: 'reply.developerstudio@gmail.com',

				From: "reply.developerstudio@gmail.com",

				Subject: "New message on report from "+name,

				Body: Body

			}).then(

				message =>{

					//console.log (message);

					if(message=='OK'){

					alert('report submitted successfully.');

					}

					else{

						console.error (message);

						alert('There is error at sending report. ')

						

					}

				}

			);

		}
