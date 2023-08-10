//get curent rpm 0-100
var rpm = $prop('DataCorePlugin.GameData.CarSettings_CurrentDisplayedRPMPercent');  

//if RPM > x then return 1 (on) else return 0 (off)
if (rpm > 89){
	return 1;
	} else {
	return 0;
}
