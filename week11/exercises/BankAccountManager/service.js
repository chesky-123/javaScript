import rl from 'readline-sync';
import customerManager from "./utils.js"


function createId() {
  let id = 0;
  function uploadId() {
    return ++id;
  } return uploadId;
};

function askForName() {
  const name = rl.question("enter your name: ");
  return name;
}

function askForAccountType() {
  const accountTypes = ["Regular", "Premium", "Student"];
  const accuntType = rl.keyInSelect(accountTypes, `please choice the accountType: `);
  return accountTypes[accuntType];
};

function askForBalance() {
  const balance = rl.questionInt("please enter balance: ");
  return balance;
};

function validAndSaveCustomer(customerData) {
  if (isValidName(customerData.follName)) {
    if (isNumber(customerData.balance)) {
      if (isPositiveNumber(customerData.balance)) {
        customerManager.createCustomer(customerData);
      } else console.log("ERROR: balance must be a positive number"), createCustomer();
    } else console.log("ERROR: balance must be a number"), createCustomer();
  } else console.log("ERROR:name not entering"), createCustomer();
};

function isValidName(name) {
  return name ? true : false;
};

function isNumber(num) {
  return typeof num === 'number';
};

function isPositiveNumber(num) {
  return num >= 0;
};

function isActive(idNumber) {
  const customers = getAllCustomers();
  const customer = customers.find(({ id }) => id === idNumber);
  return customer.isActive;
};

function isCustomer(idNumber) {
  const customers = getAllCustomers();
  const customer = customers.find(({ id }) => id === idNumber);
  if (customer) {
    return true;
  } return false
}

const id = createId();
function createCustomer() {
  const customer = {
    id: id(),
    follName: askForName(),
    accountType: askForAccountType(),
    balance: askForBalance(),
    isActive: true
  };
  validAndSaveCustomer(customer);
};

function searchCustomer() {
  const idNumber = rl.questionInt("type the id number of the account you are looking for: ");
  return customerManager.searchCustomer(idNumber);
};

const getAllCustomers = () => { return customerManager.getCustomers() };


function deposit() {
  const idNumber = rl.questionInt("please enter the id: ");
  const depositAmount = rl.questionInt("please enter the balance; ");
  if (isNumber(idNumber)) {
    if (isNumber(depositAmount)) {
      if (isPositiveNumber(depositAmount)) {
        if (isCustomer(idNumber)) {
          if (isActive(idNumber)) {
            return customerManager.deposit(idNumber, depositAmount);
          } else return "ERROR: inactive customer";
        } else return "ERROR: customer not found";
      } else return "ERROR: balance must be a positive number";
    } else return "ERROR: balance must be a number";
  } else return "ERROR: id must be a number";

}

function withdraw() {
  const idNumber = rl.questionInt("please enter the id: ");
  const withdrawalAmount = rl.questionInt("please enter the balance; ");
  if (isNumber(idNumber)) {
    if (isNumber(withdrawalAmount)) {
      if (isPositiveNumber(withdrawalAmount)) {
        if (isCustomer(idNumber)) {
          if (isActive(idNumber)) {
            return customerManager.Withdraw(idNumber, withdrawalAmount);
          } else return "ERROR: inactive customer";
        } else return "ERROR: customer not found";
      } else return "ERROR: balance must be a positive number";
    } else return "ERROR: balance must be a number";
  } else return "ERROR: id must be a number";
};

function deactivateCustomer() {
  const idNumber = rl.questionInt("please enter the id: ");
  if (isCustomer(idNumber)) {
    return customerManager.deactivateCustomer(idNumber);
  } return "ERROR: customer not found";
};

function showStatistics() {
  const statistics = customerManager.showStatistics();
  const printStatistics = `======= statistics ========
  Total Customers: ${statistics.totalCustomers}
  Active Accounts: ${statistics.activeAccounts}
  Total Money: ${statistics.totalMoney}
  Average Balance: ${statistics.averagebalance}
  Highest Balance: ${statistics.highestBalance}
                            `
  return printStatistics;
};


export default {
  createCustomer,
  getAllCustomers,
  searchCustomer,
  deposit,
  withdraw,
  deactivateCustomer,
  showStatistics
}



