exports.action = function(data){

var request = require('request');

var reg="/"+data.notification+"(.+)/i" ; var rgxp = eval(reg) ; var temp = JarvisIA.reco.match(rgxp) ; console.log(temp)
var phrase=temp[1].trim()
console.log(phrase +" notification")

var user="***"
var pass="********"

var url="https://smsapi.free-mobile.fr/sendmsg?user="+user+"&pass="+pass+"&msg="+phrase

request(url,  (err, response, body)=>{
				if ( (typeof err=='null') || (typeof response == 'undefined') ) {
					console.log('No Communication!');
					console.log('answer error!');JarvisIASpeech("un problème est survenu")
					
					return ;
				}
				else if  (response.statusCode != 200) {
					console.log('answer error!');JarvisIASpeech("un problème est survenu")
					
					return ;
				}
				else if  (response.statusCode == 200) {
						console.log("Message à " + data.destinataire + " envoyé."+data.numero);

				JarvisIASpeech("Message envoyé.")				

						return ;
				}
			});

return 
}