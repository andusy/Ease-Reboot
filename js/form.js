class Form(){
  // Variable declaration
  var type, amount, peer, due;
  var date, time, status; // These variables cannot be set by the user


  // Empty constructor
  constructor(){
    this.status = 'open';

    // Set date to when form was created
    var m;
    var d = new Date();

    this.year = d.getFullYear();
    this.month = d.getMonth();
    m = getMonthAsString(d.getMonth();)
    this.day = d.getDate();

    this.hour = d.getHours();
    this.minute = d.getMinutes();

    // Initializing date and time
    this.date = m + " " + this.day + ", " + this.year;
    this.time = this.hour + ":" + this.minute;
  }

  constructor(t, a, p, d){
    this.type = t;
    this.amount = a;
    this.peer = p;
    this.due = d;
  }

  //  Accessors
  getType(){
    return this.type;
  }

  getAmount(){
    return this.amount;
  }

  getPeer(){
    return this.peer;
  }

  getDue(){
    return this.due;
  }

  getDate(){
    return this.date;
  }

  getTime(){
    return this.time;
  }

  getStatus(){
    return this.status;
  }

  //  Mutators

  private function getMonthAsString(month){
    switch(month){
      case 0:
        return "January";
        break;
      case 1:
        return "February";
        break;
      case 2:
        return "March";
        break;
      case 3:
        return "April";
        break;
      case 4:
        return "May";
        break;
      case 5:
        return "June";
        break;
      case 6:
        return "July";
        break;
      case 7:
        return "August";
        break;
      case 8:
        return "September";
        break;
      case 9:
        return "October";
        break;
      case 10:
        return "November";
        break;
      case 11:
        return "December";
        break;
    }
  }
}
