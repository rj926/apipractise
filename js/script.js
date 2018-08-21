$(function(){
	let key = 'vWnL29BVgZVGUpr1XgmrpJWzC5WuBHJn';

	let urlPorjects = 'https://api.behance.net/v2/users/loulouandtummie/projects?client_id='+key;

	if($('#projects').length> 0){

		$.ajax({
		url:urlPorjects,
		dataType:'jsonp',
		success:function(res){
			
			_(res.projects).each(function(project){
				$('<li>'+project.name+' <img src='+project.covers.original+' alt=""> <a href="project.html?id='+project.id+'">see more</a></li>').appendTo('ul.projects');

			});
		}
		});
	}
	if($('#project').length > 0){
		let pageURL = new URL(document.location);
		let params = pageURL.searchParams;
		let id = params.get('id');

		let urlPorject = 'http://www.behance.net/v2/projects/'+id+'?api_key='+key;

		$.ajax({
			url:urlPorject,
			dataType:'jsonp',
			success:function(res){


				let project = res.project;
				$('<h1>'+project.name+'</h1>').appendTo('.container');
				$('<p>'+project.description+'</p>').appendTo('.container');
				$('<h3>'+moment.unix(project.published_on).fromNow()+'</h3>').appendTo('.container');
				$('<img src='+project.covers.original+' alt="">').appendTo('.container');

			}
		})
	}
	
});

		// acincronice (loads after the page is loaded)
	// cors resource to bypass cross domain issue from ajax or padded json only in server side on a server their is only 1 origin
	// dont use html within js not industry standard 
	// ? is a query string to add extra data in


	// how to use api to link external sites such as youtube twitter and behance vidoes/images/tweets