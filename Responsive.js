let box = new gsap.timeline();

box.form('.container', {width : '0%', stagger: 0.4, duration: 1.5});
box.form('.form_title', {opacity : 0, y: -30});
box.form('.form_input_group input', {opacity: 0, stagger:0.3});
box.form('form_button', {opacity:0, y:20});