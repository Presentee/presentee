import { API, graphqlOperation } from 'aws-amplify';

import React, { useEffect, useReducer } from 'react';
import NavigationBar from 'Navigation';



import { createRestaurant } from 'graphql/mutations';
import { listRestaurants } from 'graphql/queries';
import { onCreateRestaurant } from 'graphql/subscriptions';

import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';



const initialState = {
  restaurants: [],
  formData: {
    name: '',
    city: '',
    description: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'QUERY':
      return { ...state, restaurants: action.payload };
    case 'SUBSCRIPTION':
      return { ...state, restaurants: [...state.restaurants, action.payload] };
    case 'SET_FORM_DATA':
      return { ...state, formData: { ...state.formData, ...action.payload } };
    default:
      return state;
  }
};

const Admin = () => {
  const createNewRestaurant = async (e) => {
    e.stopPropagation();
    const { name, description, city } = state.formData;
    const restaurant = {
      name,
      description,
      city,
    };
    await API.graphql(graphqlOperation(createRestaurant, { input: restaurant }));
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getRestaurantList();

    const subscription = API.graphql(graphqlOperation(onCreateRestaurant)).subscribe({
      next: (eventData) => {
        const payload = eventData.value.data.onCreateRestaurant;
        dispatch({ type: 'SUBSCRIPTION', payload });
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  const getRestaurantList = async () => {
    const restaurants = await API.graphql(graphqlOperation(listRestaurants));
    dispatch({
      type: 'QUERY',
      payload: restaurants.data.listRestaurants.items,
    });
  };
  

  const handleChange = (e) =>
    dispatch({
      type: 'SET_FORM_DATA',
      payload: { [e.target.name]: e.target.value },
    });

  return (
    <div>
      <NavigationBar />
      <h2>
        Admin Page
      </h2>
    </div>
  );
};

export default Admin