function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }

  const year= 2023;
  if (isLeapYear(year)) {
  console.log(`${year}, yes`)
  } else {
    console.log(`${year}, no`)
  }