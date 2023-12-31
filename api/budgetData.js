import { clientCredentials } from '../utils/client';

const getBudgets = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/budgets`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getUsers = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createBudget = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/budgets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getBudgetsByUserID = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/budgets`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data).filter((item) => item.user_id.id === id));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getBudgetExpenses = (budgetId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/budget_expenses`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const budgetExpenses = Object.values(data).filter((expense) => expense.budget_id.id === budgetId);
        resolve(budgetExpenses);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createBudgetExpense = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/budget_expenses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(data);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const updateBudget = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/budgets/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

export {
  createBudgetExpense,
  getBudgetExpenses,
  getBudgets,
  createBudget,
  getUsers,
  getBudgetsByUserID,
  updateBudget,
};
