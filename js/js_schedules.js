function hideAll(){jQuery('#constring').hide();jQuery('#nonconstring').hide();jQuery('#titconstring').hide();jQuery('#titnonconstring').hide();jQuery('#incat').hide();jQuery('#notincat').hide();jQuery('#tagged').hide();jQuery('#nottagged').hide();jQuery('#noolder').hide()}function showLines(){var t=document.getElementById('ae_target').value;hideAll();if(t==1){jQuery('#constring').show()}if(t==2){jQuery('#nonconstring').show()}if(t==3){jQuery('#titconstring').show()}if(t==4){jQuery('#titnonconstring').show()}if(t==5){jQuery('#incat').show()}if(t==6){jQuery('#notincat').show()}if(t==7){jQuery('#tagged').show()}if(t==8){jQuery('#nottagged').show()}if(t==9){jQuery('#noolder').show()}}jQuery(document).ready(function(){hideAll();showLines()});function setChecks(csv){ruleboxes=csv.split(',');for(var i in ruleboxes){jQuery('#'+ruleboxes[i]).attr('checked','checked')}}function clearChecks(csv){ruleboxes=csv.split(',');for(var i in ruleboxes){jQuery('#'+ruleboxes[i]).removeAttr('checked')}}