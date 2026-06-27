import rl from 'readline-sync';

const customers = []

function createCustomer(customerData) {
  customers.push(customerData);
  console.log("customer created successfuli");
  console.log(customers);
}

const getCustomers = () => { return customers };


function searchCustomer(idNumber) {
  const found = customers.find(({ id }) => id === idNumber);
  if (found) {
    return found
  } else return `customer not found`
};

function deposit(idNumber, depositAmount) {
  const customer = customers.find(({ id }) => idNumber === id);
  customer.balance += depositAmount;
  return "balance update successfuli";
};


function withdraw(idNumber, withdrawalAmount) {
  const customer = customers.find(({ id }) => idNumber === id);
  if (customer.balance >= withdrawalAmount) {
    customer.balance -= withdrawalAmount
    return "balance update successfuli";
  } else return "There is not enough money in the account";
};

function deactivateCustomer(idNumber) {
  const customer = customers.find(({ id }) => idNumber === id);
  customer.isActive = false;
  return "Account closed successfully"
};

function showStatistics() {
  const totalCustomers = customers.reduce((acc, customer) => {
    return acc + 1
  }, 0);
  const activeAccounts = customers.filter((customer) => customer.isActive).reduce((acc, cust) => {
    return acc + 1;
  }, 0);
  const totalMoney = customers.reduce((acc, customer) => {
    return acc + customer.balance;
  }, 0);

  const highestBalance = customers.reduce((acc, corent) => {
    return  corent.balance > acc ? corent.balance : acc;
  }, 0);

  const statistics = {
    totalCustomers,
    activeAccounts,
    totalMoney,
    "averagebalance": (totalMoney / totalCustomers),
    highestBalance
  };
  return statistics;
};

export default {
  createCustomer,
  getCustomers,
  searchCustomer,
  deposit,
  Withdraw: withdraw,
  deactivateCustomer,
  showStatistics
};













