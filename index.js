/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Function to create an employee record
function createEmployeeRecord(employeeData) {
    // Initialize an empty timeInEvents array and timeOutEvents array
    const employeeRecord = {
      firstName: employeeData[0],
      familyName: employeeData[1],
      title: employeeData[2],
      payPerHour: employeeData[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
    return employeeRecord;
  }
  
  // Function to create employee records from an array of arrays
  function createEmployeeRecords(arraysOfEmployeeData) {
    // Map each array of employee data to an employee record using createEmployeeRecord
    return arraysOfEmployeeData.map(createEmployeeRecord);
  }
  
  // Function to create a time-in event
  function createTimeInEvent(employeeRecord, timestamp) {
    // Split the timestamp to extract date and hour
    const [date, hour] = timestamp.split(" ");
    // Add a timeIn event to the employee record's timeInEvents array
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
    });
    return employeeRecord;
  }
  
  // Function to create a time-out event
  function createTimeOutEvent(employeeRecord, timestamp) {
    // Split the timestamp to extract date and hour
    const [date, hour] = timestamp.split(" ");
    // Add a timeOut event to the employee record's timeOutEvents array
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
    });
    return employeeRecord;
  }
  
  // Function to calculate hours worked on a specific date
  function hoursWorkedOnDate(employeeRecord, date) {
    // Find the timeIn event and timeOut event for the given date
    const timeInEvent = employeeRecord.timeInEvents.find(
      (event) => event.date === date
    );
    const timeOutEvent = employeeRecord.timeOutEvents.find(
      (event) => event.date === date
    );
    // Calculate the hours worked as the timeOut hour minus the timeIn hour
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  
  // Function to calculate wages earned on a specific date
  function wagesEarnedOnDate(employeeRecord, date) {
    // Calculate the hours worked on the given date
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    // Calculate the wages earned as hours worked multiplied by pay per hour
    const wagesEarned = hoursWorked * employeeRecord.payPerHour;
    return wagesEarned;
  }
  
  // Function to calculate all wages for an employee
  function allWagesFor(employeeRecord) {
    // Get all the dates for which the employee has worked
    const datesWorked = employeeRecord.timeInEvents.map((event) => event.date);
    // Calculate the total wages by summing wages earned for each date
    const totalWages = datesWorked.reduce(
      (total, date) => total + wagesEarnedOnDate(employeeRecord, date),
      0
    );
    return totalWages;
  }
  
  // Function to find an employee by first name
  function findEmployeeByFirstName(srcArray, firstName) {
    // Find the employee record with a matching first name
    return srcArray.find((employee) => employee.firstName === firstName);
  }
  
  // Function to calculate the payroll for all employees
  function calculatePayroll(employeeRecords) {
    // Calculate the total payroll by summing total wages for each employee
    const totalPayroll = employeeRecords.reduce(
      (total, employee) => total + allWagesFor(employee),
      0
    );
    return totalPayroll;
  }
  
  
  

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

