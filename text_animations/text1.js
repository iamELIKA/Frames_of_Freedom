mySplitText = new SplitText(".txt", {type:"chars", charsClass:"char"}); 
gsap.to( '.char', {
			fontWeight: 100,
			fontStretch: '10%',
			ease: "sine.inOut",
			duration: 0.8,
			stagger: {
				each: 0.4,
				yoyo: true,
				repeat: -1 ,
			}
		} ).seek(6);
	
