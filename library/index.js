//IIFE
//function is anonimous for avoiding variablr hosting in index
(function(window){
	//code here

	//new function
	function myLibrary(){
		let myLibrary={//create new object
			_start:slideshow,
			_carouselItems:[];
		}
		//new slideshow function
		function slideshow(selector){
			const container=document.querySelector("selector")
			
			let child=container.children;

			let_carouselItems=[];
			for(let i=0;i<child.length;i++){
				_carouselItems[i]=child[i];
			}
			myLibrary._carouselItems=_carouselItems;

			container.style.backgroundImage='url(${_carouselItems[0].src})'; 
            let next=1;
			setInterval(()=>{
				if (next>=_carouselItems.length){
					next=1;
				}else{
					_carouselItems[next].classList.add("active");
					next++;
					console.log(next);
				}

			},4000);

		}
		return myLibrary;

	}
	//new window property
	if (window.GlobalLibraryName==="underfined") {
		window.GlobalLibraryName==myLibrary();
	}

})(window);
export default GlobalLibraryName;