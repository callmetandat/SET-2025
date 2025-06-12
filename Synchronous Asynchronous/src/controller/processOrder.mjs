import axios from 'axios';
import fetch from 'node-fetch'
import { END_POINT } from '../config/constants.mjs';

async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

function checkRestaurantAvailability() {
  return fetch('https://your.mockapi.io/restaurantAvailability')
    .then(res => res.json())
    .then(data => {
      const restaurant = data[0]; // Get first restaurant
      if (!restaurant?.available) {
        throw new Error('Restaurant unavailable');
      }
      return restaurant;
    });
}

function processPayment() {
  return fetch('https://your.mockapi.io/processPayment')
    .then(res => res.json())
    .then(data => {
      const payment = data[0]; // Get first payment record
      if (!payment?.payment) {
        throw new Error('Payment failed');
      }
      return payment;
    });
}

function assignDriver() {
  return fetch('https://your.mockapi.io/assignDriver')
    .then(res => res.json())
    .then(data => {
      const driver = data[0]; // Get first driver
      if (!driver?.delivery) {
        throw new Error('Driver assignment failed');
      }
      return driver;
    });
}

function processOrder() {
  checkRestaurantAvailability()
    .then(restaurant => {
      console.log('✅ Restaurant available:', restaurant.name);
      return processPayment();
    })
    .then(payment => {
      console.log('✅ Payment processed:', payment.id || 'payment ok');
      return assignDriver();
    })
    .then(driver => {
      console.log('✅ Driver assigned:', driver.name || driver.id);
      console.log('🎉 Order completed successfully!');
    })
    .catch(error => {
      console.error('❌ Order failed:', error.message);
    });
}

processOrder();

