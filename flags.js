//Use to change the color of an object based on the active Flag in iRacing

var Flag = $prop('DataCorePlugin.GameData.Flag_Name');

switch (Flag){
	case 'Yellow':
		return '#7DFFFF00';
		break;
	case 'Green':
		return '#8000CC00';
		break;
	case 'Black':
		return '#7D2D0060';  //Dark Purple
		break;
	case 'Blue':
		return '#7D0000FF';
		break;
	case 'Checkered':
		return '#00FFFFFF'; //Transparent
		break;
	case 'White':
		return '#7DFFFFFF';
		break;
	default:
		return '#00FFFFFF'; //Transparent
}
