function hideAll(){jQuery('#strrep').hide();jQuery('#strrep2').hide();jQuery('#strrem').hide();jQuery('#prepend').hide();jQuery('#append').hide();jQuery('#addcat').hide();jQuery('#addtag').hide();jQuery('#changedate').hide();jQuery('#changestatus').hide();jQuery('#instances').hide();jQuery('#ae_date').hide();jQuery('.datepicker').hide()}function showLines(){var t=document.getElementById('ae_type').value;hideAll();if(t==1){jQuery('#strrep').show();jQuery('#strrep2').show();jQuery('#instances').show()}if(t==2){jQuery('#strrem').show();jQuery('#instances').show()}if(t==3){jQuery('#strrep').show();jQuery('#strrep2').show()}if(t==4){jQuery('#strrem').show()}if(t==5){jQuery('#prepend').show()}if(t==6){jQuery('#append').show()}if(t==7){jQuery('#addcat').show()}if(t==8){jQuery('#addtag').show()}if(t==9){jQuery('#changedate').show();jQuery('#ae_date').show();jQuery('.datepicker').show()}if(t==10){jQuery('#changestatus').show()}}jQuery(document).ready(function(){jQuery('#ae_date').simpleDatepicker({startdate:1999,enddate:2020});showLines()});(function($){var today=new Date();var months='January,February,March,April,May,June,July,August,September,October,November,December'.split(',');var monthlengths='31,28,31,30,31,30,31,31,30,31,30,31'.split(',');var dateRegEx=/^\d{1,2}\/\d{1,2}\/\d{2}|\d{4}$/;var yearRegEx=/^\d{4,4}$/;$.fn.simpleDatepicker=function(options){var opts=jQuery.extend({},jQuery.fn.simpleDatepicker.defaults,options);setupYearRange();function setupYearRange(){var startyear,endyear;if(opts.startdate.constructor==Date){startyear=opts.startdate.getFullYear()}else if(opts.startdate){if(yearRegEx.test(opts.startdate)){startyear=opts.startdate}else if(dateRegEx.test(opts.startdate)){opts.startdate=new Date(opts.startdate);startyear=opts.startdate.getFullYear()}else{startyear=today.getFullYear()}}else{startyear=today.getFullYear()}opts.startyear=startyear;if(opts.enddate.constructor==Date){endyear=opts.enddate.getFullYear()}else if(opts.enddate){if(yearRegEx.test(opts.enddate)){endyear=opts.enddate}else if(dateRegEx.test(opts.enddate)){opts.enddate=new Date(opts.enddate);endyear=opts.enddate.getFullYear()}else{endyear=today.getFullYear()}}else{endyear=today.getFullYear()}opts.endyear=endyear}function newDatepickerHTML(){var years=[];for(var i=0;i<=opts.endyear-opts.startyear;i++)years[i]=opts.startyear+i;var table=jQuery('<table class="datepicker" cellpadding="0" cellspacing="0" style="z-index:100"></table>');table.append('<thead></thead>');table.append('<tfoot></tfoot>');table.append('<tbody></tbody>');var monthselect='<select name="month">';for(var i in months)monthselect+='<option value="'+i+'">'+months[i]+'</option>';monthselect+='</select>';var yearselect='<select name="year">';for(var i in years)yearselect+='<option>'+years[i]+'</option>';yearselect+='</select>';jQuery("thead",table).append('<tr class="controls"><th colspan="7"><span class="prevMonth">&laquo;</span>&nbsp;'+monthselect+yearselect+'&nbsp;<span class="nextMonth">&raquo;</span></th></tr>');jQuery("thead",table).append('<tr class="days"><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr>');jQuery("tfoot",table).append('<tr><td colspan="2"><span class="today">today</span></td><td colspan="3">&nbsp;</td><td colspan="2"><span class="close">close</span></td></tr>');for(var i=0;i<6;i++)jQuery("tbody",table).append('<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');return table}function findPosition(obj){var curleft=curtop=0;if(obj.offsetParent){do{curleft+=obj.offsetLeft;curtop+=obj.offsetTop}while(obj=obj.offsetParent);return[curleft,curtop]}else{return false}}function loadMonth(e,el,datepicker,chosendate){var mo=jQuery("select[name=month]",datepicker).get(0).selectedIndex;var yr=jQuery("select[name=year]",datepicker).get(0).selectedIndex;var yrs=jQuery("select[name=year] option",datepicker).get().length;if(e&&jQuery(e.target).hasClass('prevMonth')){if(0==mo&&yr){yr-=1;mo=11;jQuery("select[name=month]",datepicker).get(0).selectedIndex=11;jQuery("select[name=year]",datepicker).get(0).selectedIndex=yr}else{mo-=1;jQuery("select[name=month]",datepicker).get(0).selectedIndex=mo}}else if(e&&jQuery(e.target).hasClass('nextMonth')){if(11==mo&&yr+1<yrs){yr+=1;mo=0;jQuery("select[name=month]",datepicker).get(0).selectedIndex=0;jQuery("select[name=year]",datepicker).get(0).selectedIndex=yr}else{mo+=1;jQuery("select[name=month]",datepicker).get(0).selectedIndex=mo}}if(0==mo&&!yr)jQuery("span.prevMonth",datepicker).hide();else jQuery("span.prevMonth",datepicker).show();if(yr+1==yrs&&11==mo)jQuery("span.nextMonth",datepicker).hide();else jQuery("span.nextMonth",datepicker).show();var cells=jQuery("tbody td",datepicker).unbind().empty().removeClass('date');var m=jQuery("select[name=month]",datepicker).val();var y=jQuery("select[name=year]",datepicker).val();var d=new Date(y,m,1);var startindex=d.getDay();var numdays=monthlengths[m];if(1==m&&((y%4==0&&y%100!=0)||y%400==0))numdays=29;if(opts.startdate.constructor==Date){var startMonth=opts.startdate.getMonth();var startDate=opts.startdate.getDate()}if(opts.enddate.constructor==Date){var endMonth=opts.enddate.getMonth();var endDate=opts.enddate.getDate()}for(var i=0;i<numdays;i++){var cell=jQuery(cells.get(i+startindex)).removeClass('chosen');if((yr||((!startDate&&!startMonth)||((i+1>=startDate&&mo==startMonth)||mo>startMonth)))&&(yr+1<yrs||((!endDate&&!endMonth)||((i+1<=endDate&&mo==endMonth)||mo<endMonth)))){cell.text(i+1).addClass('date').hover(function(){jQuery(this).addClass('over')},function(){jQuery(this).removeClass('over')}).click(function(){var chosenDateObj=new Date(jQuery("select[name=year]",datepicker).val(),jQuery("select[name=month]",datepicker).val(),jQuery(this).text());closeIt(el,datepicker,chosenDateObj)});if(i+1==chosendate.getDate()&&m==chosendate.getMonth()&&y==chosendate.getFullYear())cell.addClass('chosen')}}}function closeIt(el,datepicker,dateObj){if(dateObj&&dateObj.constructor==Date)el.val(jQuery.fn.simpleDatepicker.formatOutput(dateObj));datepicker.remove();datepicker=null;jQuery.data(el.get(0),"simpleDatepicker",{hasDatepicker:false})}return this.each(function(){if(jQuery(this).is('input')&&'text'==jQuery(this).attr('type')){var datepicker;jQuery.data(jQuery(this).get(0),"simpleDatepicker",{hasDatepicker:false});jQuery(this).click(function(ev){var $this=jQuery(ev.target);if(false==jQuery.data($this.get(0),"simpleDatepicker").hasDatepicker){jQuery.data($this.get(0),"simpleDatepicker",{hasDatepicker:true});var initialDate=$this.val();if(initialDate&&dateRegEx.test(initialDate)){var chosendate=new Date(initialDate)}else if(opts.chosendate.constructor==Date){var chosendate=opts.chosendate}else if(opts.chosendate){var chosendate=new Date(opts.chosendate)}else{var chosendate=today}datepicker=newDatepickerHTML();jQuery("body").prepend(datepicker);var elPos=findPosition($this.get(0));var x=(parseInt(opts.x)?parseInt(opts.x):0)+elPos[0];var y=(parseInt(opts.y)?parseInt(opts.y):0)+elPos[1];jQuery(datepicker).css({position:'absolute',left:x,top:y});jQuery("span",datepicker).css("cursor","pointer");jQuery("select",datepicker).bind('change',function(){loadMonth(null,$this,datepicker,chosendate)});jQuery("span.prevMonth",datepicker).click(function(e){loadMonth(e,$this,datepicker,chosendate)});jQuery("span.nextMonth",datepicker).click(function(e){loadMonth(e,$this,datepicker,chosendate)});jQuery("span.today",datepicker).click(function(){closeIt($this,datepicker,new Date())});jQuery("span.close",datepicker).click(function(){closeIt($this,datepicker)});jQuery("select[name=month]",datepicker).get(0).selectedIndex=chosendate.getMonth();jQuery("select[name=year]",datepicker).get(0).selectedIndex=Math.max(0,chosendate.getFullYear()-opts.startyear);loadMonth(null,$this,datepicker,chosendate)}})}})};jQuery.fn.simpleDatepicker.formatOutput=function(dateObj){return dateObj.getFullYear()+"-"+add0((dateObj.getMonth()+1))+"-"+add0(dateObj.getDate())+"  00:00:00"};jQuery.fn.simpleDatepicker.defaults={chosendate:today,startdate:today.getFullYear(),enddate:today.getFullYear()+1,x:18,y:18}})(jQuery);function add0(a){a=''+a+'';if(a.length==1){return"0"+a}else{return a}}