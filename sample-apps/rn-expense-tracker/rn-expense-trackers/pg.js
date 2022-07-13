function formatDuration (seconds) {
  // make an object with time frames and corarrayponding seconds (year, day, hour, second AS WELL AS an empty array)
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      array = [];
  // edge case if 0 is the argument
  if (seconds === 0) return 'now';
  
  // Loop through the array one key at a time (year, then day, then hour, then seconds
  for (var key in time) {
    // if the number of seconds is larger than the current amount of seconds left, we 
    if (seconds >= time[key]) {
      // divide seconds left each time and round down using floor and store that value in a variable 'val'. 
      var val = Math.floor(seconds/time[key]);
      // Push val into the array 'array' Also remember to handle the 's' for plurality)
      array.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      // chop off (subtract) the number of second used up for each unit of time
      seconds = seconds % time[key];
    }
  }
 
  return array.length > 1 ? array.join(', ').replace(/,([^,]*)$/,' and'+'$1') : array[0]
}