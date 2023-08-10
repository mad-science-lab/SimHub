var Flag = $prop('DataCorePlugin.GameData.Flag_Name');

switch (Flag){
	case 'Yellow':
		return '#7DFFFF00';
		break;
	case 'Green':
		return '#7DFFFF00';
		break;
	case 'Black':
		return '#7D2D0060';
		break;
	case 'Blue':
		return '#7D0000FF';
		break;
	case 'Checkered':
		return '#00FFFFFF';
		break;
	case 'White':
		return '#7DFFFFFF';
		break;
	default:
		return '#00FFFFFF';	
}
