(function(){
	var toggle=document.querySelector('.nav-toggle');
	var nav=document.querySelector('.main-nav');
	if(toggle&&nav){toggle.addEventListener('click',function(){var open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',open?'true':'false')});nav.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')})})}
	var root=document.querySelector('[data-configurator]');
	if(!root)return;
	var euro=new Intl.NumberFormat('nl-BE',{style:'currency',currency:'EUR',maximumFractionDigits:0});
	var heat=root.querySelector('[data-heat]');var electric=root.querySelector('[data-electric]');
	function val(selector){var input=root.querySelector(selector+':checked');return input?input.value:''}
	function out(selector,value){var el=root.querySelector(selector);if(el)el.textContent=value}
	function calculate(){
		var heating=val('input[name="heating"]');var epc=val('input[name="epc"]');var heatCost=Number(heat.value);var electricCost=Number(electric.value);var selected={};var investment=0;
		root.querySelectorAll('.package input').forEach(function(input){selected[input.value]=input.checked;if(input.checked)investment+=Number(input.dataset.price)});
		var premiums=0;if(selected.battery)premiums+=800;if(selected.heatpump)premiums+=heating==='elektrisch'?1800:2400;if(selected.charger)premiums+=300;var epcBonus={A:0,B:200,C:500,D:900,'E/F':1400};if(selected.heatpump||selected.battery)premiums+=epcBonus[epc]||0;premiums=Math.min(premiums,investment*.35);
		var net=Math.max(investment-premiums,0);var heatFactor=heating==='stookolie'?.72:heating==='gas'?.65:.5;var epcFactor={A:.75,B:.8,C:.88,D:1,'E/F':1.1};var saving=0;if(selected.heatpump)saving+=heatCost*heatFactor*epcFactor[epc];if(selected.solar)saving+=electricCost*.45;if(selected.battery)saving+=electricCost*.2;if(selected.charger)saving+=25;var r=.045/12;var monthly=net>0?(net*r)/(1-Math.pow(1+r,-120)):0;var payback=saving>0?net/(saving*12):0;
		out('[data-heat-output]',euro.format(heatCost));out('[data-electric-output]',euro.format(electricCost));out('[data-saving]',euro.format(saving));out('[data-year-saving]',euro.format(saving*12));out('[data-investment]',euro.format(investment));out('[data-premiums]',euro.format(premiums));out('[data-net]',euro.format(net));out('[data-monthly]',euro.format(monthly));out('[data-payback]',payback.toLocaleString('nl-BE',{minimumFractionDigits:1,maximumFractionDigits:1}));
	}
	root.querySelectorAll('input').forEach(function(input){input.addEventListener('input',calculate);input.addEventListener('change',calculate)});calculate();
})();