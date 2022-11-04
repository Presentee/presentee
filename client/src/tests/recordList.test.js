import React from 'react';
import { render, screen } from '@testing-library/react';

import RecordList from '../components/recordList';

/* The following tests are to make sure that the text stays in place
 * It was quite a bit of work to get all the text labels to be passed from
 * one page to another, so these are to make sure that they are in place
 * and stay.
 */

describe('RecordList', () => {
  test('renders RecordList component', () => {
    render(<RecordList />);
    screen.getByText('Presentation List');
  });
});

describe('RecordList', () => {
  test('renders RecordList component', () => {
    render(<RecordList />);
    screen.getByText('Presentation Name');
  });
});

describe('RecordList', () => {
  test('renders RecordList component', () => {
    render(<RecordList />);
    screen.getByText('Presenter');
  });
});

describe('RecordList', () => {
  test('renders RecordList component', () => {
    render(<RecordList />);
    screen.getByText('Event Key');
  });
});

describe('RecordList', () => {
  test('renders RecordList component', () => {
    render(<RecordList />);
    screen.getByText('Action');
  });
});