import { Icons } from '$lib/utils';

export const viewBox = (icon: Icons) => {
	// if (icon === Icons.Discord) return '0 0 461.001 461.001';

	// if (icon === Icons.Discord) return '0 0 408.788 408.788';

	//Fix Size of icons
	return [Icons.GitHub, Icons.Dev, Icons.Discord, Icons.Search, Icons.Code].includes(icon) ? '0 0 16 16' : '0 0 24 24';
};
