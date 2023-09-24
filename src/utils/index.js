// src -> utils -> indexjs

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const getNumberOfDaysInMonth = (year, month)=> {
	return new Date(year, month + 1, 0).getDate();
} 

export const getSortedDays = ( year, month ) => {
	const dayIndex = getNumberOfDaysInMonth(year, month);
	const firstHalf = DAYS_OF_WEEK.slice(dayIndex);
	return [...firstHalf, ...DAYS_OF_WEEK.slice(0, dayIndex)]
};

export const range = (start, end) => {
	const length = Math.abs((end- start)/1);

	const { result } = Array.from({ length }).reduce(
		({ result, current }) => ({
			result: [...result, current],
			current: current + 1,
		}),
		{ result: [], current: start }
);

return result;
}